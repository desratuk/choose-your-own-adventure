import './styles.css';
import { stories } from '../stories';
import { startReader } from './reader/app';
import { startMap } from './reader/map';
import seg14 from 'dseg/fonts/DSEG14-Classic/DSEG14Classic-Bold.woff2?url';
import seg7 from 'dseg/fonts/DSEG7-Classic/DSEG7Classic-Bold.woff2?url';

for (const [family, url] of [
  ['DSEG14', seg14],
  ['DSEG7', seg7],
]) {
  const face = new FontFace(family, `url(${url})`, { weight: '700' });
  document.fonts.add(face);
  face.load().catch(() => {});
}

// Each story pack may ship a theme.css; load them all (they're scoped by data-story).
import.meta.glob('../stories/*/theme.css', { eager: true });

const params = new URLSearchParams(location.search);
const story = stories.find((s) => s.id === params.get('story')) ?? stories[0];
const root = document.getElementById('app')!;
document.documentElement.dataset.story = story.id;
document.title = story.title;

if (params.has('map')) startMap(root, story);
else startReader(root, story);
