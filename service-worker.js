"use strict";var precacheConfig=[["/joblog-client/index.html","d1bc08210758da2dc3505071e7e4e20c"],["/joblog-client/static/css/main.93b7b45e.css","930f2b9da64bdfafec5a0e1a52bbb164"],["/joblog-client/static/js/main.b2e468a3.js","77e5a877e22f913daff37d64e2836bbc"],["/joblog-client/static/media/arrow_left.11911410.svg","11911410dca2de148f30954eb2fd5eab"],["/joblog-client/static/media/arrow_right.8ef6a08c.svg","8ef6a08cdc1154920165680a4edde771"],["/joblog-client/static/media/fa-brands-400.085b1dd8.ttf","085b1dd8427dbeff10bd55410915a3f6"],["/joblog-client/static/media/fa-brands-400.0fabb660.eot","0fabb6606be4c45acfeedd115d0caca4"],["/joblog-client/static/media/fa-brands-400.cac68c83.woff2","cac68c831145804808381a7032fdc7c2"],["/joblog-client/static/media/fa-brands-400.ccfdb9dc.svg","ccfdb9dc442be0c629d331e94497428b"],["/joblog-client/static/media/fa-brands-400.dc0bd022.woff","dc0bd022735ed218df547742a1b2f172"],["/joblog-client/static/media/fa-regular-400.05b53beb.woff","05b53beb21e3ef13d28244545977152d"],["/joblog-client/static/media/fa-regular-400.1a78af41.ttf","1a78af4105d4d56e6c34f76dc70bf1bc"],["/joblog-client/static/media/fa-regular-400.3a3398a6.woff2","3a3398a6ef60fc64eacf45665958342e"],["/joblog-client/static/media/fa-regular-400.ad3a7c0d.eot","ad3a7c0d77e09602f4ab73db3660ffd8"],["/joblog-client/static/media/fa-regular-400.e75dfd90.svg","e75dfd904d366a2560c63c23cfc98ef8"],["/joblog-client/static/media/fa-solid-900.03ba7cb7.svg","03ba7cb710104df27f1c9c46d64bee4e"],["/joblog-client/static/media/fa-solid-900.781e85bb.ttf","781e85bb50c8e8301c30de56b31b1f04"],["/joblog-client/static/media/fa-solid-900.89bd2e38.eot","89bd2e38475e441a5cd70f663f921d61"],["/joblog-client/static/media/fa-solid-900.c500da19.woff2","c500da19d776384ba69573ae6fe274e7"],["/joblog-client/static/media/fa-solid-900.ee09ad75.woff","ee09ad7553b8ad3d81150d609d5341a0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/joblog-client/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});