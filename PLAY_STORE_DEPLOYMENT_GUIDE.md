# Adhyay - Google Play Store (Android) Production Deployment Guide

This guide details the complete, end-to-end process for publishing **Adhyay** to the **Google Play Store**.

---

## 1. Prerequisites Checklist

| Requirement | Description | Status |
| :--- | :--- | :--- |
| **Google Play Developer Account** | Register at [Google Play Console](https://play.google.com/console/signup) ($25 one-time registration fee). | Required |
| **Java Development Kit (JDK)** | JDK 17+ or Android Studio JBR (already configured on your machine). | Ready |
| **Android App Bundle (.aab)** | Google Play mandates `.aab` format (not `.apk`) for all new app releases. | Will build |
| **Privacy Policy URL** | `https://purushub.github.io/Adhyay/privacy-policy.html` (100% on-device zero data collection). | Hosted on GitHub |
| **App Assets** | 512×512 App Icon, 1024×500 Feature Graphic, and phone screenshots. | Ready/Included |

---

## 2. Step 1: Generate Release Keystore (App Signing Key)

To sign production bundles, create a secure Java Keystore (`.jks` / `.keystore`). 

Open PowerShell in `d:\Experiences\skillizee\Adhyay\android\app` and execute:

```powershell
keytool -genkey -v -keystore adhyay-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias adhyay-key
```

When prompted:
1. Enter a strong password (keep this safe in your password manager).
2. Answer the basic certificate questions (Your Name, Organization name, City, Country code e.g. `IN`).
3. Press `y` to confirm.

> **CRITICAL: BACK UP YOUR KEYSTORE AND PASSWORDS!**
> If you lose `adhyay-release-key.jks` or its passwords, Google Play will **not** allow you to update your app in the future without contacting developer support to reset your upload key. Keep a secure backup in Google Drive or offline storage.

---

## 3. Step 2: Configure Signing in `android/app/build.gradle`

Open `d:\Experiences\skillizee\Adhyay\android\app\build.gradle` and add the release signing configuration:

```groovy
android {
    ...
    signingConfigs {
        release {
            storeFile file("adhyay-release-key.jks")
            storePassword "YOUR_KEYSTORE_PASSWORD"
            keyAlias "adhyay-key"
            keyPassword "YOUR_KEY_PASSWORD"
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

---

## 4. Step 3: Build the Production Android App Bundle (.aab)

Whenever you prepare a new release:

1. **Update Version in `android/app/build.gradle`**:
   - Increment `versionCode` (e.g., `1` -> `2`)
   - Update `versionName` (e.g., `"1.0.0"` -> `"1.0.1"`)

2. **Sync Web Assets & Build Bundle**:
   In `d:\Experiences\skillizee\Adhyay`:
   ```powershell
   node build-www.js
   npx cap sync android
   cd android
   cmd /c "set JAVA_HOME=C:\Program Files\Android\Android Studio\jbr&& set PATH=%JAVA_HOME%\bin;%PATH%&& gradlew.bat bundleRelease"
   ```

3. **Output File Location**:
   Your production bundle will be generated at:
   ```
   d:\Experiences\skillizee\Adhyay\android\app\build\outputs\bundle\release\app-release.aab
   ```
   *(This `.aab` is the exact file you upload to Google Play Console).*

---

## 5. Step 4: Google Play Console Setup

Navigate to [Google Play Console](https://play.google.com/console):

### A. Create Application
- Click **Create app**
- **App name**: `Adhyay - Mental Clarity & Soundscapes`
- **Default language**: English (United States) or English (India)
- **App or Game**: App
- **Free or Paid**: Free
- Check the Declarations & Terms boxes, click **Create app**.

### B. Complete Mandatory App Content Tasks
In the left sidebar, navigate to **Policy and programs** > **App content**:
1. **Privacy policy**: Enter your hosted URL:
   `https://purushub.github.io/Adhyay/privacy-policy.html`
   *(Or alternatively: `https://raw.githubusercontent.com/Purushub/Adhyay/main/privacy-policy.html`)*
2. **App access**: Select *"All functionality is available without special access"* (Adhyay works out-of-the-box offline/locally).
3. **Ads**: Select *"No, my app does not contain ads"*.
4. **Content ratings**: Fill in the IARC questionnaire:
   - Category: Consumer / Utility / Health & Fitness
   - Violence, profanity, drug references: No
   - Result: Rated Everyone / PEGI 3.
5. **Target audience and content**: Select target age group (e.g., `18 and over` or `13-17, 18+`). Select *"Not designed for children"*.
6. **Financial features / News app / Government app**: Select *"No"*.
7. **Data safety questionnaire**:
   - Does your app collect or share user personal data? -> **No** (all breathwork, mood check-ins, and journal history are stored locally in the user's device via localStorage).

---

## 6. Step 5: Store Listing (Graphics & Copy)

Navigate to **Grow** > **Store presence** > **Main store listing**:

### Text Metadata:
- **App name** (up to 30 chars): `Adhyay: Calm Mind & Music`
- **Short description** (up to 80 chars): `Breathe, reset overthinking, and relax with calming mood soundscapes and timers.`
- **Full description**:
  > Adhyay is your personal mental sanctuary designed to restore clarity in moments of stress, overthinking, and emotional turbulence.
  > 
  > Key Features:
  > • Science-Backed Breathing Protocols: Physiological Sigh, Navy SEAL Box Breathing, and 4-7-8 Somatic Vagal Reset.
  > • Real-Time Mood Calming Soundscapes: 528Hz Solfeggio Love tone, 432Hz cooling waves, 639Hz joy resonance, 216Hz Tibetan singing bowls, and delta sleep drones.
  > • Personalized Root-Cause Diagnostic: Understand your anxiety and reframe spiraling cognitive loops.
  > • Daily Streak & Progress Reports: Track nervous system recovery and clarity score changes.
  > • Dual Aesthetics: Switch seamlessly between Organic Zen Sanctuary and Private Members Club Noir.
  > • 100% Private: All your data stays safely on your device.

### Graphic Assets:
1. **App icon**: `512 x 512 px` (32-bit PNG with alpha).
2. **Feature graphic**: `1024 x 500 px` (JPG or 24-bit PNG).
3. **Phone screenshots**: Minimum 2 screenshots (16:9 or 9:16 aspect ratio, e.g. 1080x1920 or 1080x2400).
   - Screenshot 1: Home screen with mood check-in & circular soundscapes
   - Screenshot 2: Now Playing celestial yogi vinyl player
   - Screenshot 3: Breathing pacer session with real-time lung graphics
   - Screenshot 4: Nervous system clarity report

---

## 7. Step 6: Testing & Submission Tracks

> **Google Play 20-Tester Rule for Personal Accounts**:
> If you have a personal Google Play Console account created after November 2023, Google requires **20 opt-in testers to test your app in Closed Testing for at least 14 days** before you can request access to Production.
> (If you have an Organization account, you can submit directly to Production or Open Testing).

### Testing Process:
1. Navigate to **Testing** > **Closed testing** (or **Internal testing**).
2. Click **Create release**.
3. Upload `app-release.aab`.
4. Enter Release notes (e.g. `Initial release of Adhyay featuring mood soundscapes, breathwork pacers, and mental clarity diagnostics`).
5. Click **Next** > **Save** > **Review release** > **Start rollout**.
6. Under the **Testers** tab, add emails or a Google Group with your testers and share the join link.
7. Once closed testing concludes (or if using an Organization account), promote the release to **Production**!
