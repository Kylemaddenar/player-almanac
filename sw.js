/*
 * Player Almanac - Service Worker
 * Version: 7.1.0
 * 
 * This service worker caches the app for full offline functionality.
 * After the first visit, the app works completely without internet.
 */

const CACHE_NAME = 'player-almanac-v7.1.0';

// Files to cache for offline use
const CACHE_FILES = [
  './',
  './player_almanac.html',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Installing v7.1.0...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        CACHE_FILES.map(file => cache.add(file).catch(() => {}))
      );
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activating v7.1.0...');
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName.startsWith('player-almanac-') && cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;
  if (event.request.url.includes('workers.dev') || event.request.url.includes('api.')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;
      return fetch(event.request);
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
