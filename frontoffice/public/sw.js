const CACHE_NAME = 'pwa-app-cache-v2';

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll([
        '/'
      ]);
      cache.add("/offline.html")
    })()
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {

      if (response) {
        return response;
      }

      return fetch(event.request).then((fetchResponse) => {

        if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {

          if (!navigator.onLine && event.request.url === self.location.origin + '/') {
            return caches.match('/');
          }
          return fetchResponse;
        }

        const responseToCache = fetchResponse.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return fetchResponse;
      });
    })
  );
});