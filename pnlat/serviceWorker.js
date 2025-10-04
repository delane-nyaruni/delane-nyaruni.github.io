const CACHE_NAME = 'pnlat-cache-v1';
const urlsToCache = [
  '/',
  '/pnlat/dashboard',
  '/pnlat/tokens',
  '/pnlat/user',
  '/pnlat/settings',
];

  // '../src/pages/Loading.jsx',
  // '../public/manifest.json',
  

// Install event
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened Cache')
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
        return fetch(event.request).catch(() => caches.match('offline.html'));
      })
  );
});

//Activate
this.addEventListener('activate', (event) => {
  const urlsToCache = [];
  urlsToCache.push(CACHE_NAME); 

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => { // Corrected arrow function syntax
          if (!urlsToCache.includes(cacheName)) {
            return caches.delete(cacheName);
          }return 1
        })
      );
    })
  );
});

const checkAPIPermission = () => {
  if (!('serviceWorker' in navigator)){
    throw new Error("No support for service worker");
  }

   if (!('Notification' in window.Notification)){
    throw new Error("No support for notification API");
  }
}

const registerSW = async () => {
  const registration = await navigator.serviceWorker.register('serviceWorker.js')
  return registration;
}

const reqNotificationPermission = async () => {
  const permission = await Notification.requestPermission();

  if(permission !== 'granted'){
    throw new Error("Notification permission denied");
  } else {
    new Notification('Set for notification updates')
  }
}

checkAPIPermission();
registerSW();
reqNotificationPermission();
