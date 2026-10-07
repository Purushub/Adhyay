import os
from PIL import Image

brain_dir = r"C:\Users\user\.gemini\antigravity-ide\brain\703b0401-b9f9-4890-8e64-66d1a927e3b7"
icon_src = os.path.join(brain_dir, "adhyay_app_icon_1791346699477.jpg")
splash_src = os.path.join(brain_dir, "adhyay_splash_screen_1791346719950.jpg")

root_dir = r"d:\Experiences\skillizee\Adhyay"
res_dir = os.path.join(root_dir, "android", "app", "src", "main", "res")

# 1. Process App Icon
print(f"Loading icon from {icon_src}...")
icon_img = Image.open(icon_src).convert("RGBA")

# Save 512x512 Play Store icon and web icons
icon_512 = icon_img.resize((512, 512), Image.Resampling.LANCZOS)
icon_512.save(os.path.join(root_dir, "play_store_icon_512.png"), "PNG")
icon_512.save(os.path.join(root_dir, "icon-512.png"), "PNG")
icon_512.save(os.path.join(root_dir, "assets", "app_icon.png"), "PNG")

icon_192 = icon_img.resize((192, 192), Image.Resampling.LANCZOS)
icon_192.save(os.path.join(root_dir, "icon-192.png"), "PNG")

# Android mipmap launcher icons
mipmap_sizes = {
    "mipmap-mdpi": (48, 48),
    "mipmap-hdpi": (72, 72),
    "mipmap-xhdpi": (96, 96),
    "mipmap-xxhdpi": (144, 144),
    "mipmap-xxxhdpi": (192, 192),
}

for folder, size in mipmap_sizes.items():
    target_dir = os.path.join(res_dir, folder)
    os.makedirs(target_dir, exist_ok=True)
    
    resized = icon_img.resize(size, Image.Resampling.LANCZOS)
    resized.save(os.path.join(target_dir, "ic_launcher.png"), "PNG")
    resized.save(os.path.join(target_dir, "ic_launcher_round.png"), "PNG")

# Adaptive foreground icons (108dp base grid)
foreground_sizes = {
    "mipmap-mdpi": (108, 108),
    "mipmap-hdpi": (162, 162),
    "mipmap-xhdpi": (216, 216),
    "mipmap-xxhdpi": (324, 324),
    "mipmap-xxxhdpi": (432, 432),
}

for folder, size in foreground_sizes.items():
    target_dir = os.path.join(res_dir, folder)
    os.makedirs(target_dir, exist_ok=True)
    resized = icon_img.resize(size, Image.Resampling.LANCZOS)
    resized.save(os.path.join(target_dir, "ic_launcher_foreground.png"), "PNG")

print("App icons generated successfully across all mipmaps!")

# 2. Process Splash Screen
print(f"Loading splash from {splash_src}...")
splash_img = Image.open(splash_src).convert("RGB")

# Save high-res asset in assets/
splash_img.save(os.path.join(root_dir, "assets", "splash_screen.jpg"), "JPEG", quality=95)

# Android drawable splash screens
splash_resolutions = {
    "drawable": (1080, 1920),
    "drawable-port-mdpi": (320, 480),
    "drawable-port-hdpi": (480, 800),
    "drawable-port-xhdpi": (720, 1280),
    "drawable-port-xxhdpi": (960, 1600),
    "drawable-port-xxxhdpi": (1280, 1920),
}

for folder, (w, h) in splash_resolutions.items():
    target_dir = os.path.join(res_dir, folder)
    os.makedirs(target_dir, exist_ok=True)
    resized_splash = splash_img.resize((w, h), Image.Resampling.LANCZOS)
    resized_splash.save(os.path.join(target_dir, "splash.png"), "PNG")

print("Splash screens generated successfully across all Android drawables!")
