/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-env serviceworker */

const CACHE_NAME = 'pnlat-cache-v1';
const BASE_URL = 'pnlat';
const urlsToCache = [
  `${BASE_URL}/`,
  `${BASE_URL}/dashboard`,
  `${BASE_URL}/tokens`,
  `${BASE_URL}/user`,
  `${BASE_URL}/settings`,
  `${BASE_URL}/offline.html`,
];

// --- Install ---
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching essential files...');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// --- Fetch ---
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const resClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone));
        return response;
      })
      .catch(() =>
        caches.match(event.request).then((res) => {
          return res || caches.match(`${BASE_URL}/offline.html`);
        })
      )
  );
});

// --- Activate ---
self.addEventListener('activate', (event) => {
  const allowedCaches = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((names) => {
      names.forEach((name) => {
        if (!allowedCaches.includes(name)) {
          console.log('[SW] Deleting old cache:', name);
          caches.delete(name);
        }
      });
    })
  );
  self.clients.claim();
});
