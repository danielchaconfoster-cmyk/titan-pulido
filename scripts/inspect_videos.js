const fs = require('fs');
const { execSync } = require('child_process');

const files = fs.readdirSync('.').filter(f => f.startsWith('WhatsApp Video') && f.endsWith('.mp4'));

for (const f of files) {
  try {
    const cmd = `ffprobe -v error -select_streams v:0 -show_entries stream=width,height,duration -of csv=s=x:p=0 "${f}"`;
    const res = execSync(cmd).toString().trim();
    const size = (fs.statSync(f).size / (1024 * 1024)).toFixed(2);
    console.log(`${f} -> ${res} (${size} MB)`);
  } catch (e) {
    console.error(f, e.message);
  }
}
