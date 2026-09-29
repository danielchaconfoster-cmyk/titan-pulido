const fs = require('fs');
const { execSync } = require('child_process');

const files = fs.readdirSync('.').filter(f => f.startsWith('WhatsApp Image') && f.endsWith('.jpeg'));

for (const f of files) {
  try {
    const cmd = `ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 "${f}"`;
    const res = execSync(cmd).toString().trim();
    const size = (fs.statSync(f).size / 1024).toFixed(1);
    console.log(`${f} -> ${res} (${size} KB)`);
  } catch (e) {
    console.error(f, e.message);
  }
}
