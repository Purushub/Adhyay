package com.adhyay.foundation

import android.content.Intent
import android.net.Uri
import android.util.Log
import androidx.health.connect.client.HealthConnectClient
import androidx.health.connect.client.permission.HealthPermission
import androidx.health.connect.client.records.HeartRateRecord
import androidx.health.connect.client.records.OxygenSaturationRecord
import androidx.health.connect.client.records.RestingHeartRateRecord
import androidx.health.connect.client.records.SleepSessionRecord
import androidx.health.connect.client.records.StepsRecord
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
import java.time.Instant
import java.time.temporal.ChronoUnit

/**
 * Adhyay BioMind – Health Connect Bridge Plugin (Kotlin)
 *
 * Reads biometric telemetry from Google Health Connect (synced from CMF Watch Pro 2
 * or any Health Connect-compatible wearable) and exposes it to the Capacitor web layer.
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
        HealthPermission.getReadPermission(StepsRecord::class)
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
        try {
            val intent = Intent("android.health.connect.action.MANAGE_HEALTH_PERMISSIONS").apply {
                putExtra(Intent.EXTRA_PACKAGE_NAME, context.packageName)
            }
            activity.startActivity(intent)
            call.resolve(JSObject().put("opened", true))
        } catch (e: Exception) {
            try {
                val fallback = Intent(Intent.ACTION_VIEW).apply {
                    data = Uri.parse("market://details?id=com.google.android.apps.healthdata")
                }
                activity.startActivity(fallback)
                call.resolve(JSObject().put("opened", true).put("fallback", true))
            } catch (e2: Exception) {
                call.reject("Could not open Health Connect settings: ${e2.message}")
            }
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
                val res = JSObject()
                res.put("granted", allGranted)
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

    @PluginMethod
    fun readHeartRate(call: PluginCall) {
        val client = getClient()
        if (client == null) {
            call.reject("Health Connect not available")
            return
        }
        val minutes = call.getInt("minutes", 60) ?: 60
        scope.launch {
            try {
                val end = Instant.now()
                val start = end.minus(minutes.toLong(), ChronoUnit.MINUTES)
                val req = ReadRecordsRequest(
                    recordType = HeartRateRecord::class,
                    timeRangeFilter = TimeRangeFilter.between(start, end)
                )
                val response = client.readRecords(req)
                val samples = JSArray()
                var totalBpm = 0L
                var minBpm = Long.MAX_VALUE
                var maxBpm = Long.MIN_VALUE
                var latestBpm = 0L
                var latestTime = Instant.EPOCH
                var count = 0

                for (record in response.records) {
                    for (s in record.samples) {
                        val bpm = s.beatsPerMinute
                        val time = s.time
                        val obj = JSObject().apply {
                            put("bpm", bpm)
                            put("time", time.toString())
                        }
                        samples.put(obj)
                        totalBpm += bpm
                        if (bpm < minBpm) minBpm = bpm
                        if (bpm > maxBpm) maxBpm = bpm
                        if (time.isAfter(latestTime)) {
                            latestTime = time
                            latestBpm = bpm
                        }
                        count++
                    }
                }

                val result = JSObject().apply {
                    put("records", samples)
                    put("count", count)
                    put("avgBpm", if (count > 0) Math.round(totalBpm.toFloat() / count) else 0)
                    put("minBpm", if (count > 0) minBpm else 0)
                    put("maxBpm", if (count > 0) maxBpm else 0)
                    put("latestBpm", latestBpm)
                    put("latestTime", latestTime.toString())
                }
                call.resolve(result)
            } catch (e: Exception) {
                Log.e(TAG, "readHeartRate failed", e)
                call.reject("Failed to read heart rate: ${e.message}")
            }
        }
    }

    @PluginMethod
    fun readSpO2(call: PluginCall) {
        val client = getClient()
        if (client == null) {
            call.reject("Health Connect not available")
            return
        }
        val minutes = call.getInt("minutes", 120) ?: 120
        scope.launch {
            try {
                val end = Instant.now()
                val start = end.minus(minutes.toLong(), ChronoUnit.MINUTES)
                val req = ReadRecordsRequest(
                    recordType = OxygenSaturationRecord::class,
                    timeRangeFilter = TimeRangeFilter.between(start, end)
                )
                val response = client.readRecords(req)
                val samples = JSArray()
                var totalPct = 0.0
                var latestPct = 0.0
                var latestTime = Instant.EPOCH
                var count = 0

                for (rec in response.records) {
                    val pct = rec.percentage.value
                    val time = rec.time
                    val obj = JSObject().apply {
                        put("percentage", Math.round(pct * 10.0) / 10.0)
                        put("time", time.toString())
                    }
                    samples.put(obj)
                    totalPct += pct
                    if (time.isAfter(latestTime)) {
                        latestTime = time
                        latestPct = pct
                    }
                    count++
                }

                val result = JSObject().apply {
                    put("records", samples)
                    put("count", count)
                    put("avgSpO2", if (count > 0) Math.round((totalPct / count) * 10.0) / 10.0 else 0.0)
                    put("latestSpO2", Math.round(latestPct * 10.0) / 10.0)
                    put("latestTime", latestTime.toString())
                }
                call.resolve(result)
            } catch (e: Exception) {
                Log.e(TAG, "readSpO2 failed", e)
                call.reject("Failed to read SpO2: ${e.message}")
            }
        }
    }

    @PluginMethod
    fun readRestingHeartRate(call: PluginCall) {
        val client = getClient()
        if (client == null) {
            call.reject("Health Connect not available")
            return
        }
        val hours = call.getInt("hours", 24) ?: 24
        scope.launch {
            try {
                val end = Instant.now()
                val start = end.minus(hours.toLong(), ChronoUnit.HOURS)
                val req = ReadRecordsRequest(
                    recordType = RestingHeartRateRecord::class,
                    timeRangeFilter = TimeRangeFilter.between(start, end)
                )
                val response = client.readRecords(req)
                val result = JSObject()
                if (response.records.isNotEmpty()) {
                    val latest = response.records.last()
                    result.put("restingBpm", latest.beatsPerMinute)
                    result.put("time", latest.time.toString())
                    result.put("available", true)
                } else {
                    result.put("restingBpm", 0)
                    result.put("available", false)
                }
                call.resolve(result)
            } catch (e: Exception) {
                Log.e(TAG, "readRestingHeartRate failed", e)
                call.reject("Failed to read resting heart rate: ${e.message}")
            }
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
            try {
                val end = Instant.now()
                val start = end.truncatedTo(ChronoUnit.DAYS)
                val req = ReadRecordsRequest(
                    recordType = StepsRecord::class,
                    timeRangeFilter = TimeRangeFilter.between(start, end)
                )
                val response = client.readRecords(req)
                var totalSteps = 0L
                for (rec in response.records) {
                    totalSteps += rec.count
                }
                val result = JSObject().apply {
                    put("steps", totalSteps)
                    put("date", start.toString())
                }
                call.resolve(result)
            } catch (e: Exception) {
                Log.e(TAG, "readSteps failed", e)
                call.reject("Failed to read steps: ${e.message}")
            }
        }
    }

    @PluginMethod
    fun takeSnapshot(call: PluginCall) {
        val client = getClient()
        if (client == null) {
            call.reject("Health Connect not available")
            return
        }
        val minutes = call.getInt("minutes", 15) ?: 15
        scope.launch {
            try {
                val end = Instant.now()
                val start = end.minus(minutes.toLong(), ChronoUnit.MINUTES)
                val dayStart = end.minus(24L, ChronoUnit.HOURS)

                val snapshot = JSObject().apply {
                    put("timestamp", end.toString())
                }

                // Heart Rate
                try {
                    val hrReq = ReadRecordsRequest(
                        recordType = HeartRateRecord::class,
                        timeRangeFilter = TimeRangeFilter.between(start, end)
                    )
                    val hrResp = client.readRecords(hrReq)
                    var latestBpm = 0L
                    var totalBpm = 0L
                    var hrCount = 0
                    var latestHrTime = Instant.EPOCH

                    for (rec in hrResp.records) {
                        for (s in rec.samples) {
                            val bpm = s.beatsPerMinute
                            totalBpm += bpm
                            hrCount++
                            if (s.time.isAfter(latestHrTime)) {
                                latestHrTime = s.time
                                latestBpm = bpm
                            }
                        }
                    }

                    val hr = JSObject().apply {
                        put("latestBpm", latestBpm)
                        put("avgBpm", if (hrCount > 0) Math.round(totalBpm.toFloat() / hrCount) else 0)
                        put("count", hrCount)
                        put("available", hrCount > 0)
                    }
                    snapshot.put("heartRate", hr)
                } catch (e: Exception) {
                    snapshot.put("heartRate", JSObject().put("available", false).put("error", e.message))
                }

                // SpO2
                try {
                    val spo2Req = ReadRecordsRequest(
                        recordType = OxygenSaturationRecord::class,
                        timeRangeFilter = TimeRangeFilter.between(start, end)
                    )
                    val spo2Resp = client.readRecords(spo2Req)
                    val spo2 = JSObject()
                    if (spo2Resp.records.isNotEmpty()) {
                        val latest = spo2Resp.records.last()
                        spo2.put("percentage", Math.round(latest.percentage.value * 10.0) / 10.0)
                        spo2.put("available", true)
                    } else {
                        spo2.put("percentage", 0)
                        spo2.put("available", false)
                    }
                    snapshot.put("spo2", spo2)
                } catch (e: Exception) {
                    snapshot.put("spo2", JSObject().put("available", false))
                }

                // Resting Heart Rate
                try {
                    val rhrReq = ReadRecordsRequest(
                        recordType = RestingHeartRateRecord::class,
                        timeRangeFilter = TimeRangeFilter.between(dayStart, end)
                    )
                    val rhrResp = client.readRecords(rhrReq)
                    val rhr = JSObject()
                    if (rhrResp.records.isNotEmpty()) {
                        val latest = rhrResp.records.last()
                        rhr.put("bpm", latest.beatsPerMinute)
                        rhr.put("available", true)
                    } else {
                        rhr.put("bpm", 0)
                        rhr.put("available", false)
                    }
                    snapshot.put("restingHR", rhr)
                } catch (e: Exception) {
                    snapshot.put("restingHR", JSObject().put("available", false))
                }

                call.resolve(snapshot)
            } catch (e: Exception) {
                Log.e(TAG, "takeSnapshot failed", e)
                call.reject("Snapshot failed: ${e.message}")
            }
        }
    }
}
