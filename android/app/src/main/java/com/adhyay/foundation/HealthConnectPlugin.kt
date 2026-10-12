package com.adhyay.foundation

import android.content.Intent
import android.net.Uri
import android.util.Log
import androidx.health.connect.client.HealthConnectClient
import androidx.health.connect.client.PermissionController
import androidx.health.connect.client.permission.HealthPermission
import androidx.health.connect.client.records.ActiveCaloriesBurnedRecord
import androidx.health.connect.client.records.HeartRateRecord
import androidx.health.connect.client.records.OxygenSaturationRecord
import androidx.health.connect.client.records.RestingHeartRateRecord
import androidx.health.connect.client.records.SleepSessionRecord
import androidx.health.connect.client.records.StepsRecord
import androidx.health.connect.client.records.TotalCaloriesBurnedRecord
import androidx.health.connect.client.request.AggregateRequest
import androidx.health.connect.client.request.ReadRecordsRequest
import androidx.health.connect.client.time.TimeRangeFilter
import com.getcapacitor.JSArray
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import java.time.Duration
import java.time.Instant
import java.time.LocalDate
import java.time.ZoneId
import java.time.temporal.ChronoUnit

/**
 * Adhyay BioMind – Health Connect Bridge Plugin (Kotlin)
 *
 * Reads dynamic biometric telemetry from Google Health Connect (synced from CMF Watch Pro 2
 * or any Health Connect-compatible wearable): Heart Rate, SpO2, Resting HR, Steps, Calories & Sleep.
 */
@CapacitorPlugin(name = "HealthConnect")
class HealthConnectPlugin : Plugin() {

    private val TAG = "AdhyayBioMind"
    private var healthClient: HealthConnectClient? = null
    private val scope = CoroutineScope(Dispatchers.IO)

    private val requiredPermissions = setOf(
        HealthPermission.getReadPermission(HeartRateRecord::class),
        HealthPermission.getReadPermission(OxygenSaturationRecord::class),
        HealthPermission.getReadPermission(RestingHeartRateRecord::class),
        HealthPermission.getReadPermission(SleepSessionRecord::class),
        HealthPermission.getReadPermission(StepsRecord::class),
        HealthPermission.getReadPermission(TotalCaloriesBurnedRecord::class),
        HealthPermission.getReadPermission(ActiveCaloriesBurnedRecord::class)
    )

    private fun getClient(): HealthConnectClient? {
        if (healthClient == null) {
            val ctx = context ?: return null
            if (HealthConnectClient.getSdkStatus(ctx) == HealthConnectClient.SDK_AVAILABLE) {
                healthClient = HealthConnectClient.getOrCreate(ctx)
            }
        }
        return healthClient
    }

    private fun getTodayStart(): Instant {
        return LocalDate.now().atStartOfDay(ZoneId.systemDefault()).toInstant()
    }

    private fun formatTimeAgo(time: Instant): String {
        if (time == Instant.EPOCH) return ""
        val now = Instant.now()
        val mins = ChronoUnit.MINUTES.between(time, now)
        if (mins < 1) return "Just now"
        if (mins < 60) return "${mins}m ago"
        val hours = ChronoUnit.HOURS.between(time, now)
        if (hours < 24) return "${hours}h ago"
        val days = ChronoUnit.DAYS.between(time, now)
        return "${days}d ago"
    }

    @PluginMethod
    fun isAvailable(call: PluginCall) {
        val ctx = context
        if (ctx == null) {
            call.resolve(JSObject().put("available", false).put("status", "no_context"))
            return
        }
        val status = HealthConnectClient.getSdkStatus(ctx)
        val res = JSObject()
        when (status) {
            HealthConnectClient.SDK_AVAILABLE -> {
                res.put("available", true)
                res.put("status", "available")
            }
            HealthConnectClient.SDK_UNAVAILABLE -> {
                res.put("available", false)
                res.put("status", "unavailable")
            }
            HealthConnectClient.SDK_UNAVAILABLE_PROVIDER_UPDATE_REQUIRED -> {
                res.put("available", false)
                res.put("status", "update_required")
            }
            else -> {
                res.put("available", false)
                res.put("status", "unknown")
            }
        }
        call.resolve(res)
    }

    @PluginMethod
    override fun requestPermissions(call: PluginCall) {
        // Strategy 1: Official Health Connect contract intent
        try {
            val contract = PermissionController.createRequestPermissionResultContract()
            val intent = contract.createIntent(activity, requiredPermissions)
            activity.startActivity(intent)
            call.resolve(JSObject().put("opened", true).put("method", "contract"))
            return
        } catch (e1: Exception) {
            Log.w(TAG, "Contract intent failed: ${e1.message}, trying MANAGE_HEALTH_PERMISSIONS")
        }

        // Strategy 2: System Settings / Manage Health Permissions action
        try {
            val intent = Intent("android.health.connect.action.MANAGE_HEALTH_PERMISSIONS").apply {
                putExtra(Intent.EXTRA_PACKAGE_NAME, context.packageName)
            }
            activity.startActivity(intent)
            call.resolve(JSObject().put("opened", true).put("method", "manage_permissions"))
            return
        } catch (e2: Exception) {
            Log.w(TAG, "Manage permissions intent failed: ${e2.message}, trying ACTION_HEALTH_CONNECT_SETTINGS")
        }

        // Strategy 3: Health Connect General Settings
        try {
            val intent = Intent("androidx.health.ACTION_HEALTH_CONNECT_SETTINGS")
            activity.startActivity(intent)
            call.resolve(JSObject().put("opened", true).put("method", "settings"))
            return
        } catch (e3: Exception) {
            Log.w(TAG, "Health settings intent failed: ${e3.message}, falling back to Play Store")
        }

        // Strategy 4: Fallback to Google Play Store page for Health Connect
        try {
            val fallback = Intent(Intent.ACTION_VIEW).apply {
                data = Uri.parse("market://details?id=com.google.android.apps.healthdata")
            }
            activity.startActivity(fallback)
            call.resolve(JSObject().put("opened", true).put("fallback", true))
        } catch (e4: Exception) {
            call.reject("Could not open Health Connect permissions or store: ${e4.message}")
        }
    }

    @PluginMethod
    override fun checkPermissions(call: PluginCall) {
        val client = getClient()
        if (client == null) {
            call.reject("Health Connect not available")
            return
        }
        scope.launch {
            try {
                val granted = client.permissionController.getGrantedPermissions()
                val allGranted = granted.containsAll(requiredPermissions)
                val anyGranted = granted.any { requiredPermissions.contains(it) }
                val res = JSObject()
                res.put("granted", allGranted)
                res.put("partial", anyGranted)
                val arr = JSArray()
                for (p in granted) {
                    arr.put(p)
                }
                res.put("permissions", arr)
                call.resolve(res)
            } catch (e: Exception) {
                Log.e(TAG, "checkPermissions failed", e)
                call.reject("Permission check failed: ${e.message}")
            }
        }
    }

    private suspend fun queryHeartRate(client: HealthConnectClient, end: Instant, windowMinutes: Int = 60): JSObject {
        val res = JSObject()
        try {
            var start = end.minus(windowMinutes.toLong(), ChronoUnit.MINUTES)
            var req = ReadRecordsRequest(
                recordType = HeartRateRecord::class,
                timeRangeFilter = TimeRangeFilter.between(start, end)
            )
            var resp = client.readRecords(req)
            if (resp.records.isEmpty()) {
                start = end.minus(24L, ChronoUnit.HOURS)
                req = ReadRecordsRequest(
                    recordType = HeartRateRecord::class,
                    timeRangeFilter = TimeRangeFilter.between(start, end)
                )
                resp = client.readRecords(req)
            }
            if (resp.records.isEmpty()) {
                start = end.minus(7L, ChronoUnit.DAYS)
                req = ReadRecordsRequest(
                    recordType = HeartRateRecord::class,
                    timeRangeFilter = TimeRangeFilter.between(start, end)
                )
                resp = client.readRecords(req)
            }

            var latestBpm = 0L
            var totalBpm = 0L
            var count = 0
            var latestTime = Instant.EPOCH

            for (rec in resp.records) {
                for (s in rec.samples) {
                    val bpm = s.beatsPerMinute
                    totalBpm += bpm
                    count++
                    if (s.time.isAfter(latestTime)) {
                        latestTime = s.time
                        latestBpm = bpm
                    }
                }
            }

            if (count > 0 && latestBpm > 0) {
                res.put("available", true)
                res.put("latestBpm", latestBpm)
                res.put("avgBpm", Math.round(totalBpm.toFloat() / count))
                res.put("count", count)
                res.put("latestTime", latestTime.toString())
                res.put("timeAgo", formatTimeAgo(latestTime))
                return res
            }
        } catch (e: Exception) {
            Log.e(TAG, "HeartRate query error: ${e.message}")
        }
        res.put("available", false)
        res.put("latestBpm", 0)
        res.put("timeAgo", "")
        return res
    }

    private suspend fun querySpO2(client: HealthConnectClient, end: Instant): JSObject {
        val res = JSObject()
        try {
            // Look back across up to 7 days to capture the newest SpO2 reading
            val start = end.minus(7L, ChronoUnit.DAYS)
            val req = ReadRecordsRequest(
                recordType = OxygenSaturationRecord::class,
                timeRangeFilter = TimeRangeFilter.between(start, end)
            )
            val resp = client.readRecords(req)
            val latest = resp.records.maxByOrNull { it.time }
            if (latest != null) {
                val pct = Math.round(latest.percentage.value * 10.0) / 10.0
                res.put("available", true)
                res.put("percentage", pct)
                res.put("time", latest.time.toString())
                res.put("timeAgo", formatTimeAgo(latest.time))
                return res
            }
        } catch (e: Exception) {
            Log.e(TAG, "SpO2 query error: ${e.message}")
        }
        res.put("available", false)
        res.put("percentage", 0.0)
        res.put("timeAgo", "")
        return res
    }

    private suspend fun queryRestingHeartRate(client: HealthConnectClient, end: Instant): JSObject {
        val res = JSObject()
        try {
            val start = end.minus(7L, ChronoUnit.DAYS)
            val req = ReadRecordsRequest(
                recordType = RestingHeartRateRecord::class,
                timeRangeFilter = TimeRangeFilter.between(start, end)
            )
            val resp = client.readRecords(req)
            val latest = resp.records.maxByOrNull { it.time }
            if (latest != null) {
                res.put("available", true)
                res.put("bpm", latest.beatsPerMinute)
                res.put("time", latest.time.toString())
                res.put("timeAgo", formatTimeAgo(latest.time))
                return res
            }
        } catch (e: Exception) {
            Log.e(TAG, "RestingHR query error: ${e.message}")
        }
        res.put("available", false)
        res.put("bpm", 0)
        res.put("timeAgo", "")
        return res
    }

    private suspend fun querySteps(client: HealthConnectClient, start: Instant, end: Instant): Pair<Long, Boolean> {
        try {
            val agg = client.aggregate(
                AggregateRequest(
                    metrics = setOf(StepsRecord.COUNT_TOTAL),
                    timeRangeFilter = TimeRangeFilter.between(start, end)
                )
            )
            val count = agg[StepsRecord.COUNT_TOTAL]
            if (count != null && count > 0) {
                return Pair(count, true)
            }
        } catch (e: Exception) {
            Log.w(TAG, "Steps aggregate error: ${e.message}")
        }
        // Fallback to reading raw records if aggregate fails or is unsupported
        try {
            val req = ReadRecordsRequest(
                recordType = StepsRecord::class,
                timeRangeFilter = TimeRangeFilter.between(start, end)
            )
            val resp = client.readRecords(req)
            var sum = 0L
            for (r in resp.records) {
                sum += r.count
            }
            return Pair(sum, resp.records.isNotEmpty() || sum > 0)
        } catch (e2: Exception) {
            Log.e(TAG, "Steps records read error: ${e2.message}")
            return Pair(0L, false)
        }
    }

    private suspend fun queryCalories(client: HealthConnectClient, start: Instant, end: Instant): Pair<Double, Boolean> {
        try {
            val agg = client.aggregate(
                AggregateRequest(
                    metrics = setOf(TotalCaloriesBurnedRecord.ENERGY_TOTAL),
                    timeRangeFilter = TimeRangeFilter.between(start, end)
                )
            )
            val kcal = agg[TotalCaloriesBurnedRecord.ENERGY_TOTAL]?.inKilocalories
            if (kcal != null && kcal > 0.0) {
                return Pair(Math.round(kcal * 10.0) / 10.0, true)
            }
        } catch (e: Exception) {
            Log.w(TAG, "TotalCalories aggregate error: ${e.message}")
        }
        try {
            val agg2 = client.aggregate(
                AggregateRequest(
                    metrics = setOf(ActiveCaloriesBurnedRecord.ACTIVE_CALORIES_TOTAL),
                    timeRangeFilter = TimeRangeFilter.between(start, end)
                )
            )
            val kcal2 = agg2[ActiveCaloriesBurnedRecord.ACTIVE_CALORIES_TOTAL]?.inKilocalories
            if (kcal2 != null && kcal2 > 0.0) {
                return Pair(Math.round(kcal2 * 10.0) / 10.0, true)
            }
        } catch (e2: Exception) {
            Log.w(TAG, "ActiveCalories aggregate error: ${e2.message}")
        }
        return Pair(0.0, false)
    }

    private suspend fun querySleep(client: HealthConnectClient, end: Instant): JSObject {
        val res = JSObject()
        try {
            val start = end.minus(7L, ChronoUnit.DAYS)
            val req = ReadRecordsRequest(
                recordType = SleepSessionRecord::class,
                timeRangeFilter = TimeRangeFilter.between(start, end)
            )
            val resp = client.readRecords(req)
            val latest = resp.records.maxByOrNull { it.endTime }
            if (latest != null) {
                val duration = Duration.between(latest.startTime, latest.endTime)
                val totalMinutes = duration.toMinutes()
                val hours = totalMinutes / 60
                val mins = totalMinutes % 60
                res.put("available", true)
                res.put("totalMinutes", totalMinutes)
                res.put("formatted", "${hours}h ${mins}m")
                res.put("hours", hours)
                res.put("minutes", mins)
                res.put("startTime", latest.startTime.toString())
                res.put("endTime", latest.endTime.toString())
                res.put("timeAgo", formatTimeAgo(latest.endTime))
                res.put("stagesCount", latest.stages.size)
                return res
            }
        } catch (e: Exception) {
            Log.e(TAG, "Sleep query error: ${e.message}")
        }
        res.put("available", false)
        res.put("totalMinutes", 0)
        res.put("formatted", "--")
        res.put("timeAgo", "")
        return res
    }

    @PluginMethod
    fun readHeartRate(call: PluginCall) {
        val client = getClient()
        if (client == null) {
            call.reject("Health Connect not available")
            return
        }
        val minutes = call.getInt("minutes", 60) ?: 60
        scope.launch {
            val res = queryHeartRate(client, Instant.now(), minutes)
            call.resolve(res)
        }
    }

    @PluginMethod
    fun readSpO2(call: PluginCall) {
        val client = getClient()
        if (client == null) {
            call.reject("Health Connect not available")
            return
        }
        scope.launch {
            val res = querySpO2(client, Instant.now())
            call.resolve(res)
        }
    }

    @PluginMethod
    fun readRestingHeartRate(call: PluginCall) {
        val client = getClient()
        if (client == null) {
            call.reject("Health Connect not available")
            return
        }
        scope.launch {
            val res = queryRestingHeartRate(client, Instant.now())
            call.resolve(res)
        }
    }

    @PluginMethod
    fun readSteps(call: PluginCall) {
        val client = getClient()
        if (client == null) {
            call.reject("Health Connect not available")
            return
        }
        scope.launch {
            val todayStart = getTodayStart()
            val (steps, available) = querySteps(client, todayStart, Instant.now())
            val res = JSObject().apply {
                put("steps", steps)
                put("available", available)
                put("date", todayStart.toString())
            }
            call.resolve(res)
        }
    }

    @PluginMethod
    fun readCalories(call: PluginCall) {
        val client = getClient()
        if (client == null) {
            call.reject("Health Connect not available")
            return
        }
        scope.launch {
            val todayStart = getTodayStart()
            val (kcal, available) = queryCalories(client, todayStart, Instant.now())
            val res = JSObject().apply {
                put("calories", kcal)
                put("available", available)
                put("date", todayStart.toString())
            }
            call.resolve(res)
        }
    }

    @PluginMethod
    fun readSleep(call: PluginCall) {
        val client = getClient()
        if (client == null) {
            call.reject("Health Connect not available")
            return
        }
        scope.launch {
            val res = querySleep(client, Instant.now())
            call.resolve(res)
        }
    }

    @PluginMethod
    fun takeSnapshot(call: PluginCall) {
        val client = getClient()
        if (client == null) {
            call.reject("Health Connect not available")
            return
        }
        val minutes = call.getInt("minutes", 60) ?: 60
        scope.launch {
            try {
                val now = Instant.now()
                val todayStart = getTodayStart()

                val hrObj = queryHeartRate(client, now, minutes)
                val spo2Obj = querySpO2(client, now)
                val rhrObj = queryRestingHeartRate(client, now)
                val (steps, stepsAvail) = querySteps(client, todayStart, now)
                val (kcal, kcalAvail) = queryCalories(client, todayStart, now)
                val sleepObj = querySleep(client, now)

                val snapshot = JSObject().apply {
                    put("timestamp", now.toString())
                    put("heartRate", hrObj)
                    put("spo2", spo2Obj)
                    put("restingHR", rhrObj)
                    put("steps", JSObject().apply {
                        put("count", steps)
                        put("available", stepsAvail)
                    })
                    put("calories", JSObject().apply {
                        put("kcal", kcal)
                        put("available", kcalAvail)
                    })
                    put("sleep", sleepObj)
                }

                call.resolve(snapshot)
            } catch (e: Exception) {
                Log.e(TAG, "takeSnapshot failed", e)
                call.reject("Snapshot failed: ${e.message}")
            }
        }
    }
}
