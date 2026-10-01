# Adhyay - Google Play Store Deployment Guide

This guide details the step-by-step procedure to package and deploy **Adhyay** to the Google Play Store as an official Android application (`.aab` / `.apk`) using **Capacitor** or **Bubblewrap (TWA)**.

---

## Method A: Capacitor Native Android Packaging (Recommended)

Capacitor wraps the web application into an official Android Studio project, giving direct access to native Android haptics, splash screens, and Play Store in-app billing if desired.

### Step 1: Install Dependencies
In `d:\Experiences\skillizee\Adhyay`:
```bash
npm install
npm install @capacitor/core @capacitor/cli @capacitor/android
```

### Step 2: Initialize & Add Android Platform
```bash
npx cap init Adhyay com.adhyay.foundation --web-dir .
npx cap add android
```
This generates the full native Android project in the `./android` directory.

### Step 3: Sync Web Assets
Whenever you modify `index.html`, `style.css`, or `app.js`, run:
```bash
npx cap copy android
npx cap sync
```

### Step 4: Open in Android Studio
```bash
npx cap open android
```
Inside Android Studio:
1. Wait for Gradle build to complete.
2. Select **Build > Generate Signed Bundle / APK**.
3. Choose **Android App Bundle (.aab)**.
4. Create or select your release keystore.
5. Choose destination folder and build variant **release**.

---

## Method B: Bubblewrap TWA (Trusted Web Activity)

If deploying as a PWA-backed Trusted Web Activity:
```bash
npm install -g @bubblewrap/cli
bubblewrap init --manifest=https://your-domain.com/manifest.json
bubblewrap build
```

---

## Release Keystore Generation Command

To create an official upload keystore using Java's `keytool`:
```bash
keytool -genkey -v -keystore adhyay-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias adhyay-alias
```
Keep `adhyay-release-key.jks` and passwords backed up safely.

---

## Google Play Console Pre-Launch Checklist

| Requirement | Specification | Status in Adhyay Codebase |
| :--- | :--- | :--- |
| **Package Name** | `com.adhyay.foundation` | Configured in `capacitor.config.json` & `manifest.json` |
| **Target SDK** | API Level 34 or 35 (Android 14/15) | Handled by Capacitor `@capacitor/android` v6 |
| **App Icon** | 512 x 512 px PNG (32-bit color) | Vector source available in `icon-512.svg` |
| **Feature Graphic** | 1024 x 500 px PNG / JPEG | Banner layout designed around golden clarity ripple |
| **Screenshots** | At least 4 screenshots (16:9 or 9:16) | Pre-configured in `index.html` screen sections |
| **Privacy Policy** | URL explaining local on-device reflection storage | Template included |
| **Data Safety Form** | Declare: No personal health records sold | 100% compliant (Local storage by default) |
| **Closed Testing** | 20 testers opted-in for 14 days | Standard requirement for new personal accounts |

---

## Local Verification Commands
To test the app locally in a browser at any time:
```bash
npm start
# Opens http://localhost:3000
```
or
```bash
python -m http.server 3456
# Opens http://localhost:3456
```
