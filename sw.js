/*
 * Player Almanac - Service Worker
 * Original app by Zagreous.
 * Offline shell maintenance: 7.7.4
 */

// Scope-specific names keep separate installations on the same host isolated.
const CACHE_PREFIX = `player-almanac:${self.registration.scope}:`;
const CACHE_NAME = `${CACHE_PREFIX}7.7.4`;
const APP_URL = new URL('./player_almanac.html', self.registration.scope).href;
const INDEX_URL = new URL('./index.html', self.registration.scope).href;
const ROOT_URL = new URL('./', self.registration.scope).href;
const CACHE_FILES = [
  './player_almanac.html',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
].map(path => new URL(path, self.registration.scope).href);

self.addEventListener('install', event => {
  // A failed download must leave the previous working offline shell in place.
  // addAll commits only when every required resource is available.
  event.waitUntil(caches.open(CACHE_NAME).then(cache =>
    cache.addAll(CACHE_FILES.map(url => new Request(url, { cache: 'reload' })))
  ));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames
      .filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  const scope = new URL(self.registration.scope);
  if (url.origin !== scope.origin || !url.pathname.startsWith(scope.pathname)) return;

  // Only cache the static app shell. User data and APIs never enter this cache.
  const cleanURL = new URL(url.href);
  cleanURL.search = '';
  cleanURL.hash = '';
  const isAppNavigation = request.mode === 'navigate' &&
    [APP_URL, INDEX_URL, ROOT_URL].includes(cleanURL.href);
  const isShellAsset = CACHE_FILES.includes(cleanURL.href);
  if (!isAppNavigation && !isShellAsset) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cacheKey = isAppNavigation ? APP_URL : cleanURL.href;
    try {
      // Fetch HTML on each visit so app releases do not depend on a cache rename.
      const response = await fetch(request, { cache: 'no-cache' });
      if (response.ok) {
        // The index is a redirect document; never overwrite the real app with it.
        const canCache = !isAppNavigation || cleanURL.href === APP_URL;
        if (canCache) {
          try { await cache.put(cacheKey, response.clone()); }
          catch (error) { console.warn('[PWA] Offline cache could not be refreshed:', error); }
        }
        return response;
      }
      const cached = await cache.match(cacheKey);
      return cached || response;
    } catch (error) {
      const cached = await cache.match(cacheKey);
      if (cached) return cached;
      return new Response('Player Almanac is unavailable offline. Reconnect and open it once to save the app on this device.', {
        status: 503,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  })());
});

self.addEventListener('message', event => {
  // The page asks to activate only after the player accepts its update prompt.
  if (event.data === 'skipWaiting' || event.data?.type === 'SKIP_WAITING') {
    event.waitUntil(self.skipWaiting());
  }
});
