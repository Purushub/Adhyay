const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const destDir = path.join(srcDir, 'www');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const filesToCopy = [
  'index.html',
  'style.css',
  'app.js',
  'manifest.json',
  'three.min.js',
  'sw.js',
  'icon-192.svg',
  'icon-512.svg'
];

for (const file of filesToCopy) {
  const src = path.join(srcDir, file);
  const dest = path.join(destDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} -> www/`);
  }
}

// Copy assets folder
function copyFolderRecursiveSync(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }
  const files = fs.readdirSync(source);
  for (const file of files) {
    const curSource = path.join(source, file);
    const curTarget = path.join(target, file);
    if (fs.lstatSync(curSource).isDirectory()) {
      copyFolderRecursiveSync(curSource, curTarget);
    } else {
      fs.copyFileSync(curSource, curTarget);
    }
  }
}

const assetsSrc = path.join(srcDir, 'assets');
const assetsDest = path.join(destDir, 'assets');
if (fs.existsSync(assetsSrc)) {
  copyFolderRecursiveSync(assetsSrc, assetsDest);
  console.log('Copied assets/ -> www/assets/');
}

console.log('Build www completed successfully!');
