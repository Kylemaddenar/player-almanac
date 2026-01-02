/*
 * Player Almanac - Service Worker
 * Version: 6.17.0
 * 
 * This service worker caches the app for full offline functionality.
 * After the first visit, the app works completely without internet.
 */

const CACHE_NAME = 'player-almanac-v6.17.0';

// Files to cache for offline use
// Use relative paths that work regardless of deployment location
const CACHE_FILES = [
  './',
  './player_almanac.html',
  './manifest.json'
];

// Install event - cache all required files
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Installing v6.17.0...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Caching app files');
        // Cache files individually so one failure doesn't break everything
        return Promise.allSettled(
          CACHE_FILES.map(file => 
            cache.add(file).catch(err => {
              console.warn('[ServiceWorker] Failed to cache:', file, err);
            })
          )
        );
      })
      .then(() => {
        return self.skipWaiting();
      })
      .catch((err) => {
        console.error('[ServiceWorker] Install failed:', err);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activating v6.17.0...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName.startsWith('player-almanac-') && cacheName !== CACHE_NAME) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  if (!event.request.url.startsWith('http')) {
    return;
  }

  // Don't cache API calls
  if (event.request.url.includes('api.') || event.request.url.includes('workers.dev')) {
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
            // Don't cache error responses (this prevents caching 404 HTML pages!)
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }

            // Don't cache if content-type suggests it's an error page
            const contentType = networkResponse.headers.get('content-type') || '';
            if (event.request.url.endsWith('.json') && !contentType.includes('application/json')) {
              console.warn('[ServiceWorker] Skipping cache for non-JSON response:', event.request.url);
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

self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
