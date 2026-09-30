// Illustrations are picked up by filename: stories/<story-id>/images/<PAGE_ID>.(webp|png|jpg|jpeg)
const files = import.meta.glob('../../stories/*/images/*.{webp,png,jpg,jpeg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const byPage = new Map<string, string>();
for (const [path, url] of Object.entries(files)) {
  const m = path.match(/stories\/([^/]+)\/images\/([^/.]+)\./);
  if (m) byPage.set(`${m[1]}/${m[2]}`, url);
}

export const imageFor = (storyId: string, pageId: string) => byPage.get(`${storyId}/${pageId}`);
