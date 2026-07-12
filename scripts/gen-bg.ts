import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/public/ai-images';
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const IMAGES: { file: string; prompt: string }[] = [
  { file: 'cta-bg.png', prompt: 'Cinematic 3D abstract tunnel of glowing neon violet light streaks, dark futuristic background, motion blur, octane render, 8k' },
  { file: 'process-bg.png', prompt: 'Cinematic 3D abstract data visualization landscape, glowing neon grid and flowing data streams in cyan and magenta, dark futuristic, octane render' },
];

function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    p,
    new Promise<T>((_, rej) => setTimeout(() => rej(new Error('timeout ' + ms + 'ms')), ms)),
  ]);
}

async function genOne(zai: any, file: string, prompt: string) {
  const outPath = path.join(OUT_DIR, file);
  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 10000) {
    console.log(`[skip] ${file} already exists`);
    return;
  }
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      console.log(`[gen ] ${file} attempt ${attempt} ...`);
      const t0 = Date.now();
      const response = await withTimeout(
        zai.images.generations.create({ prompt, size: '1024x1024' }),
        60000
      );
      const base64 = response?.data?.[0]?.base64;
      if (!base64) {
        console.error(`[fail] ${file}: no image data`);
        continue;
      }
      fs.writeFileSync(outPath, Buffer.from(base64, 'base64'));
      console.log(`[ok  ] ${file} in ${((Date.now() - t0) / 1000).toFixed(1)}s (${fs.statSync(outPath).size} bytes)`);
      return;
    } catch (err: any) {
      console.error(`[err ] ${file} attempt ${attempt}: ${err?.message || err}`);
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
}

async function main() {
  console.log(`Generating ${IMAGES.length} images ...`);
  const zai = await ZAI.create();
  for (const img of IMAGES) {
    await genOne(zai, img.file, img.prompt);
  }
  console.log('Done.');
}

main().catch((e) => { console.error('Fatal:', e); process.exit(1); });
