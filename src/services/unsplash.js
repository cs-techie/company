/**
 * Unsplash API Utility Helper
 * 
 * Fetches dynamic high-resolution photos from Unsplash API.
 * Uses environment variable VITE_UNSPLASH_ACCESS_KEY from .env
 */

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

// Local in-memory cache to prevent redundant API calls
const photoCache = new Map();

/**
 * Fetch photos by query term from Unsplash API
 */
export async function fetchUnsplashPhotos(query = 'business consulting', count = 4) {
  const cacheKey = `${query}_${count}`;
  if (photoCache.has(cacheKey)) {
    return photoCache.get(cacheKey);
  }

  if (!UNSPLASH_ACCESS_KEY || UNSPLASH_ACCESS_KEY === 'your_unsplash_access_key_here') {
    return getFallbackPhotos(query, count);
  }

  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${count}&orientation=landscape`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Unsplash API error status ${response.status}`);
    }

    const data = await response.json();
    const results = data.results.map((photo) => ({
      id: photo.id,
      url: photo.urls.regular,
      thumb: photo.urls.small,
      alt: photo.alt_description || photo.description || query,
      author: photo.user.name,
      authorUrl: photo.user.links.html,
    }));

    photoCache.set(cacheKey, results);
    return results;
  } catch (error) {
    console.error('[Unsplash API Error]', error);
    return getFallbackPhotos(query, count);
  }
}

/**
 * Fetch single high-res featured image
 */
export async function fetchFeaturedPhoto(query = 'modern architecture office') {
  const photos = await fetchUnsplashPhotos(query, 1);
  return photos[0] || getFallbackPhotos(query, 1)[0];
}

/**
 * Fallback image provider
 */
function getFallbackPhotos(query, count) {
  const fallbackUrls = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: `fallback-${i}`,
    url: fallbackUrls[i % fallbackUrls.length],
    thumb: fallbackUrls[i % fallbackUrls.length],
    alt: `${query} placeholder`,
    author: 'Unsplash',
    authorUrl: 'https://unsplash.com',
  }));
}
