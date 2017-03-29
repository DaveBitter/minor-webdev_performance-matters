self.addEventListener('install', event => event.waitUntil(
    caches.open('wmtw-v1-core')
        .then(cache => cache.addAll([
            '/assets/offline/index.html',
            '/assets/css/main.css',
            '/assets/images/logo.png'
        ]))
        .then(self.skipWaiting())
));

self.addEventListener('fetch', event => {
    const request = event.request;
    event.respondWith(
        fetch(request)
            .catch(err => fetchCoreFile(request.url))
            .catch(err => fetchCoreFile('/assets/offline/index.html'))
    );
});

function fetchCoreFile(url) {
    return caches.open('wmtw-v1-core')
        .then(cache => cache.match(url))
        .then(response => response ? response : Promise.reject());
}