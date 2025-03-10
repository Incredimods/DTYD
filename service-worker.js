    // service-worker.js
    self.addEventListener('install', event => {
      event.waitUntil(
        caches.open('DTYD-cache')
          .then(cache => {
            return cache.addAll([
                '/',
                'asset-v1/icon.png',
                'css/style.min.css',
                'js/script.min.js',
                'index.html',
            ]);
          })
      );
    });

    self.addEventListener('fetch', event => {
      event.respondWith(
        caches.match(event.request)
          .then(response => {
            return response || fetch(event.request);
          })
      );
    });
