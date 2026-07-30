// Minimal service worker — required for PWA installability.
// No caching for now; the page always fetches fresh so loyalty balances stay accurate.
self.addEventListener('install',  () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',    () => {});
