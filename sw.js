var V="kesim-takip-v5";
self.addEventListener("install",function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","apple-touch-icon.png"].map(function(u){return new Request(u,{cache:"reload"})}))}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==V}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){var r=e.request;if(r.method!=="GET")return;
 var net=fetch(r,{cache:"no-cache"}).then(function(res){if(res&&res.ok){var c=res.clone();caches.open(V).then(function(ch){ch.put(r,c)})}return res}).catch(function(){return caches.match(r)});
 var t=new Promise(function(res){setTimeout(function(){caches.match(r).then(function(h){if(h)res(h)})},4000)});
 e.respondWith(Promise.race([net,t]))});
