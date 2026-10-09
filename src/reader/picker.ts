import { getPage } from '../engine/engine';
import type { Story } from '../engine/types';
import { imageFor } from './images';
import { loadEndings, loadRun } from './storage';
import { esc } from './text';

/** Front page when more than one story is installed: one card per story. */
export function startPicker(root: HTMLElement, stories: Story[], open: (story: Story) => void) {
  delete document.documentElement.dataset.story;
  delete document.documentElement.dataset.era;
  document.title = 'Choose your adventure';
  window.scrollTo(0, 0);
  root.innerHTML = `
    <div class="picker">
      <h1 class="picker-title">Choose your adventure</h1>
      <ul class="picker-list">
        ${stories
          .map((story, i) => {
            const cover = imageFor(story.id, story.start);
            const endings = story.pages.filter((p) => p.ending);
            const found = loadEndings(story.id).filter((id) => endings.some((p) => p.id === id)).length;
            const saved = loadRun(story.id);
            const canResume = saved && (saved.revision ?? 1) === (story.revision ?? 1)
              && story.pages.some((p) => p.id === saved.current.pageId);
            return `<li>
              <button class="story-card" data-story="${esc(story.id)}" data-era="${esc(getPage(story, story.start).era)}" data-i="${i}">
                <span class="story-cover">${cover ? `<img src="${cover}" alt="" />` : ''}</span>
                <span class="story-info">
                  <strong>${esc(story.title)}</strong>
                  <em>${esc(story.subtitle)}</em>
                  <span>${esc(story.blurb)}</span>
                  <small>${canResume ? 'Adventure in progress · ' : ''}Endings found: ${found} of ${endings.length}</small>
                </span>
              </button>
            </li>`;
          })
          .join('')}
      </ul>
    </div>`;
  root.querySelectorAll<HTMLButtonElement>('.story-card').forEach((card) =>
    card.addEventListener('click', () => open(stories[Number(card.dataset.i)])),
  );
}
