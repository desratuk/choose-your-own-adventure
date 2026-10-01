import './styles.css';
import { stories } from '../stories';
import type { Story } from './engine/types';
import { startReader } from './reader/app';
import { startMap } from './reader/map';
import { startPicker } from './reader/picker';
import seg14 from 'dseg/fonts/DSEG14-Classic/DSEG14Classic-Bold.woff2?url';
import seg7 from 'dseg/fonts/DSEG7-Classic/DSEG7Classic-Bold.woff2?url';

// Segment-display fonts used by the time-circuits header.
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

const root = document.getElementById('app')!;
const params = new URLSearchParams(location.search);
const requested = stories.find((s) => s.id === params.get('story'));

function open(story: Story) {
  document.documentElement.dataset.story = story.id;
  document.title = story.title;
  if (params.has('map')) return startMap(root, story);
  // With several stories, the address records which one is open so reloads and "back" work.
  if (stories.length > 1 && params.get('story') !== story.id) history.pushState(null, '', `?story=${story.id}`);
  startReader(root, story, stories.length > 1 ? showPicker : undefined);
}

function showPicker() {
  if (location.search) history.pushState(null, '', location.pathname);
  startPicker(root, stories, open);
}

// Browser back/forward between the picker and a story.
addEventListener('popstate', () => location.reload());

if (requested) open(requested);
else if (stories.length === 1) open(stories[0]);
else showPicker();
