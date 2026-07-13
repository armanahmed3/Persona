import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

async function main() {
  const zai = await ZAI.create();
  const prompts: { file: string; prompt: string }[] = [
    {
      file: '/home/z/my-project/public/ai-images/skills-orb.png',
      prompt:
        'Cinematic 3D render of a glowing holographic skill tree orb, neon violet and cyan interconnected nodes forming a sphere, dark background, futuristic AI capabilities visualization, octane render, 8k',
    },
    {
      file: '/home/z/my-project/public/ai-images/comparison-bg.png',
      prompt:
        'Cinematic 3D abstract split scene, left side dark flat 2D web, right side glowing neon 3D futuristic web with particles, violet and cyan, dramatic lighting, octane render, 8k',
    },
  ];

  for (const { file, prompt } of prompts) {
    if (fs.existsSync(file) && fs.statSync(file).size > 10000) {
      console.log(`[skip] ${file}`);
      continue;
    }
    try {
      console.log(`[gen] ${file} ...`);
      const t0 = Date.now();
      const res = await Promise.race([
        zai.images.generations.create({ prompt, size: '1024x1024' }),
        new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 80000)),
      ]);
      const b64 = (res as any)?.data?.[0]?.base64;
      if (!b64) { console.error(`[fail] ${file}`); continue; }
      fs.writeFileSync(file, Buffer.from(b64, 'base64'));
      console.log(`[ok ] ${file} in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
    } catch (e: any) {
      console.error(`[err] ${file}: ${e?.message || e}`);
    }
  }
  console.log('Done.');
}
main();
