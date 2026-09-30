import type { Story } from '../src/engine/types';
import stoppedClocks from './stopped-clocks/story';

// Register story packs here. The first one is the default; others are reachable with ?story=<id>.
export const stories: Story[] = [stoppedClocks];
