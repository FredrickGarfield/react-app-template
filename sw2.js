// DO NOT MODIFY; this is a copy
importScripts("res/bundle.js");
importScripts("res/config2.js");
importScripts("res/the.js");

const sw = new UVServiceWorker();

self.addEventListener("fetch", event => event.respondWith(sw.fetch(event)));
