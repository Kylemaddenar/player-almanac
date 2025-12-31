/*
 * Player Almanac - Service Worker
 * Version: 6.15.1
 * 
 * This service worker caches the app for full offline functionality.
 * After the first visit, the app works completely without internet.
 */

const CACHE_NAME = 'player-almanac-v6.15.2';

// Files to cache for offline use
const CACHE_FILES = [
  '/',
  '/player_almanac.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// Install event - cache all required files
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Caching app files');
        return cache.addAll(CACHE_FILES);
      })
      .then(() => {
        // Immediately activate (don't wait for old SW to finish)
        return self.skipWaiting();
      })
      .catch((err) => {
        console.error('[ServiceWorker] Cache failed:', err);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // Delete old versions of our cache
            if (cacheName.startsWith('player-almanac-') && cacheName !== CACHE_NAME) {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        // Take control of all pages immediately
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

  // Skip non-http(s) requests (chrome-extension://, etc.)
  if (!event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // Found in cache - return it
          console.log('[ServiceWorker] Serving from cache:', event.request.url);
          return cachedResponse;
        }

        // Not in cache - fetch from network
        return fetch(event.request)
          .then((networkResponse) => {
            // Don't cache non-successful responses
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }

            // Cache the new resource for future offline use
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          })
          .catch((err) => {
            console.error('[ServiceWorker] Fetch failed:', err);
            
            // If it's a navigation request, show the cached main page
            if (event.request.mode === 'navigate') {
              return caches.match('/player_almanac.html');
            }
            
            // Otherwise just fail
            throw err;
          });
      })
  );
});

// Handle messages from the main app
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
