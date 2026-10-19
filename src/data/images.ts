import type { ImageMetadata } from 'astro';

// Photos live in src/assets/products/ and appear automatically.
// Name the main photo after the page: hot-zones.jpg, or gas-cooling-horizontal.jpg for a model page.
// Extra photos for the same page are numbered: hot-zones-2.jpg, hot-zones-3.jpg, and so on.
// Supported: jpg, jpeg, png, webp.
const files = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/products/*.{jpg,jpeg,png,webp}',
  { eager: true },
);

/** All photos for a page: the main one first, then the numbered extras in order. */
export function productImages(key: string): ImageMetadata[] {
  const found: { order: number; image: ImageMetadata }[] = [];
  for (const [path, mod] of Object.entries(files)) {
    const name = path.split('/').pop()!.replace(/\.[^.]+$/, '');
    if (name === key) found.push({ order: 1, image: mod.default });
    else {
      const match = name.match(new RegExp(`^${key}-(\\d+)$`));
      if (match) found.push({ order: Number(match[1]), image: mod.default });
    }
  }
  return found.sort((a, b) => a.order - b.order).map((f) => f.image);
}

/** Just the main photo, for cards. */
export function productImage(key: string): ImageMetadata | undefined {
  return productImages(key)[0];
}
