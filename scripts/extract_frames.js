const { execSync } = require('child_process');

try {
  execSync('ffmpeg -y -ss 00:00:03 -i "WhatsApp Video 2026-09-25 at 00.41.11.mp4" -vframes 1 "public/media/fotos/frame_41_11.jpg"');
  execSync('ffmpeg -y -ss 00:00:05 -i "WhatsApp Video 2026-09-25 at 00.34.10.mp4" -vframes 1 "public/media/fotos/frame_34_10_start.jpg"');
  execSync('ffmpeg -y -ss 00:01:15 -i "WhatsApp Video 2026-09-25 at 00.34.10.mp4" -vframes 1 "public/media/fotos/frame_34_10_end.jpg"');
  execSync('ffmpeg -y -ss 00:00:05 -i "WhatsApp Video 2026-09-25 at 00.31.03.mp4" -vframes 1 "public/media/fotos/frame_31_03.jpg"');
  console.log('Frames extracted successfully');
} catch(e) {
  console.error(e);
}
