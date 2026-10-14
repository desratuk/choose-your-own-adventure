import type { Story } from '../src/engine/types';
import fratelliRun from './fratelli-run/story';
import returnToSender from './return-to-sender/story';
import stoppedClocks from './stopped-clocks/story';
import playerTwo from './player-two/story';
import lastSkyway from './last-skyway/story';
import midnightSignal from './midnight-signal/story';
import lanternArchive from './lantern-archive/story';

// Register story packs here. The first one is the default; others are reachable with ?story=<id>.
export const stories: Story[] = [stoppedClocks, fratelliRun, returnToSender, playerTwo, lastSkyway, midnightSignal, lanternArchive];
