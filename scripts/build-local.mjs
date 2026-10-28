/** Build static site with localhost canonicals (preview npm run preview at :4321). */
import { spawnSync } from 'node:child_process';

const env = { ...process.env, PUBLIC_SITE_URL: 'http://localhost:4321' };
const r = spawnSync('npm', ['run', 'build'], { stdio: 'inherit', shell: true, env });
process.exit(r.status ?? 1);
