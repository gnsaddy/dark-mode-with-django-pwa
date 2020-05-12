# Dark Mode Switcher

``DarkMode switcher using Django``   ``Implemented Progressive WebApp``
``Service-Worker``

## Django Progressive Web App
- ``Add on Home screen feature`` <br>
- ``Offline caching fearure`` <br>
- ``Notification Feature`` <br>
- ``Web Manifest Feature `` <br>
- ``Django staticfile handling`` <br>


## ``Service Worker Javascript``
```javascript
const staticCacheName = "static-cache" + '-' + new Date().getDate() + ':' + new Date().getHours() + ':' + new Date().getSeconds();
const filesToCache = [
    '/',
    '/offline',
    '/assets/manifest.json',
    '/assets/img/icons/icon-96x96.png'
];

// Cache on install
self.addEventListener("install", event => {
    console.log("Installing service worker...");
    event.waitUntil(
        caches.open(staticCacheName)
            .then(cache => {
                return cache.addAll(filesToCache);
            })
    )
    console.log('Service worker installed and cached files');
    this.skipWaiting();
});

// Clear cache on activate
self.addEventListener('activate', event => {
    console.log('Service worker is activating...')
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => (cacheName.startsWith("static-cache")))
                    .filter(cacheName => (cacheName !== staticCacheName))
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );

    console.log('service worker activated')
});

// Serve from Cache
self.addEventListener("fetch", event => {
    console.log('fetch event fired')
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match('offline');
            })
    )
});
```