importScripts("res/bundle.js");
importScripts("res/config.js");
importScripts("res/the.js");

const sw = new UVServiceWorker();

self.addEventListener("fetch", event => event.respondWith(sw.fetch(event)));
