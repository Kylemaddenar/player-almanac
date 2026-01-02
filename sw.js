/*
 * Player Almanac - Service Worker
 * Version: 6.17.2
 * 
 * This service worker caches the app for full offline functionality.
 * After the first visit, the app works completely without internet.
 */

const CACHE_NAME = 'player-almanac-v6.17.2';

// Files to cache for offline use
const CACHE_FILES = [
  './',
  './player_almanac.html',
  './manifest.json'
];

// Install event - cache all required files
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Installing v6.17.2...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Caching app files');
        return Promise.allSettled(
          CACHE_FILES.map(file => 
            cache.add(file).catch(err => {
              console.warn('[ServiceWorker] Failed to cache:', file, err);
            })
          )
        );
      })
      .then(() => {
        // Force activation immediately
        return self.skipWaiting();
      })
      .catch((err) => {
        console.error('[ServiceWorker] Install failed:', err);
      })
  );
});

// Activate event - clean up ALL old caches
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activating v6.17.2...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Delete ALL old player-almanac caches
            if (cacheName.startsWith('player-almanac-') && cacheName !== CACHE_NAME) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // Take control immediately
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip non-http(s) requests
  if (!event.request.url.startsWith('http')) {
    return;
  }

  // Don't cache API calls to Cloudflare Workers
  if (event.request.url.includes('workers.dev') || event.request.url.includes('api.')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          console.log('[ServiceWorker] Serving from cache:', event.request.url);
          return cachedResponse;
        }

        return fetch(event.request)
          .then((networkResponse) => {
            // Don't cache error responses
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            // Don't cache HTML error pages for JSON requests
            const contentType = networkResponse.headers.get('content-type') || '';
            if (event.request.url.endsWith('.json') && !contentType.includes('application/json')) {
              console.warn('[ServiceWorker] Skipping cache - wrong content type:', event.request.url);
              return networkResponse;
            }

            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          })
          .catch((err) => {
            console.error('[ServiceWorker] Fetch failed:', err);
            
            if (event.request.mode === 'navigate') {
              return caches.match('./player_almanac.html');
            }
            
            throw err;
          });
      })
  );
});

// Handle skip waiting message
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
