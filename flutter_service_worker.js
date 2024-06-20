'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f535b059a8c5c3cc22f6f64a681a4a7c",
"assets/AssetManifest.bin.json": "2b3bd446f071b224d693f9a6ac390301",
"assets/AssetManifest.json": "6c2876a591d492efb6417ecfb38c2927",
"assets/assets/album_collection.svg": "4c1301a37f3c3fd95d4082b3a25c42ab",
"assets/assets/Approve.svg": "23c6fb12053fe646f2de424adb67c939",
"assets/assets/apps-sort.svg": "de9a57f2c514f04468b7fe65e0bc8fef",
"assets/assets/arrows_repeat.svg": "fbe07418ebc6fe782b7ea3239c905b58",
"assets/assets/background.jpg": "f223c30066dec11b176998dde446ab71",
"assets/assets/bags-orders.svg": "d59ea8a2e8ef32779feb18017dddad08",
"assets/assets/bars_staggered.svg": "ebc1055c8420e079cef89e1e390c8dc9",
"assets/assets/bell.svg": "e29eefcb0b81a4aa3430992358922552",
"assets/assets/box-check.svg": "09bbeb4599ef7611a677ab5c7d71bc9b",
"assets/assets/box-circle-check.svg": "73031d15ffa991ba21255c09c2ad2876",
"assets/assets/boxes.svg": "f8e443a901e30fac5c1f0f48f2baa61b",
"assets/assets/check.svg": "3a7b0fc20ce21440eaf152ff19287d37",
"assets/assets/creditcard.svg": "baa906814ba55ffb3530a3e50a1f74dd",
"assets/assets/crosscircle.svg": "7f36973a1d08edf258a0469f8baa119e",
"assets/assets/edit.svg": "7f16dd1520559466c7a43e901b18ac2e",
"assets/assets/envelope.svg": "6d72d5b3f4755cb39d563c0350d6e0d3",
"assets/assets/file-download.svg": "64216ab6e09c8d6ae6d2b4d4135c90bd",
"assets/assets/fonts/Roboto-Bold.ttf": "b8e42971dec8d49207a8c8e2b919a6ac",
"assets/assets/fonts/Roboto-Medium.ttf": "68ea4734cf86bd544650aee05137d7bb",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Roboto-Thin.ttf": "66209ae01f484e46679622dd607fcbc5",
"assets/assets/hourglass-start.svg": "bf6503f1183a53a81afd8574e8595352",
"assets/assets/indian-rupee-sign.svg": "7207ca0b1a44a0fae5ccb1f95d6501c6",
"assets/assets/lock.svg": "8e0384686c5b513fd13888f47ba2ddda",
"assets/assets/login_screen_logo.png": "905c24f7e10be60339d0b6f2d83b778b",
"assets/assets/memo-circle-check.svg": "23c6fb12053fe646f2de424adb67c939",
"assets/assets/minus-small.svg": "86666b573fa9b4620b673a2348f65c6e",
"assets/assets/money-bills.svg": "c9ca2b40496ccdc0c6ab75b81ac524c2",
"assets/assets/order-cancel.svg": "516998ae1ece22bec64900d651ac4a36",
"assets/assets/overview.svg": "625d498a23fc37606ac7e4130b89e65d",
"assets/assets/plus-small.svg": "8c488e8410027860c8c063af494415f5",
"assets/assets/receipt.svg": "d7e90a61e3b4ec9e4913a58f5873b51f",
"assets/assets/reject.svg": "2ace1ccc99c190e9069b338539a4dfa4",
"assets/assets/report.svg": "9030cacbcacc74369a379dcae97784b2",
"assets/assets/right_arrow.png": "3b6e1869ac79ce4644bc6b83890c6357",
"assets/assets/sb_money-bill-wave.svg": "557bb15534ed1ca54f75480bd56abc82",
"assets/assets/seeds-home-icon.png": "e7eed57e69f8dd7279f327a4d1e24e95",
"assets/assets/sensor-alert.svg": "fc1199a3ab46132d3394f6757b572eec",
"assets/assets/share.svg": "cc371c4ea73377b3dd1c70bf9862d704",
"assets/assets/shipping-fast.svg": "6002d5dc2d05fdb0471d711e456aabdb",
"assets/assets/shipping-timed.svg": "887c19b0d03e10b01207153f9d962a65",
"assets/assets/shoppingbag.svg": "b02a509c76b7174aa10016717e4209fd",
"assets/assets/shoppingcartadd.png": "75e93cf736d2f7c9d938ab722d9c0f5e",
"assets/assets/shopping_bag.png": "83ad3fdd8a9aa0a5c1f13e397ce798dc",
"assets/assets/shopping_cart_add.svg": "ec312d195b57214af364c41988a0aa95",
"assets/assets/sign-out-alt.svg": "14d7389c7fda161a376cbac9c5bf8f3c",
"assets/assets/site-alt.svg": "cb68fee6cf970bfe5cb74242c1a733ed",
"assets/assets/slider1.png": "41dae1b46f9d29293c924f5303aa9468",
"assets/assets/slider2.png": "17ab3ade0bd42abdfb212ba6b3663572",
"assets/assets/slider3.png": "69bb26df863e6e8456e386be21f52ead",
"assets/assets/sreekar_seeds.png": "e2d0944e6adaec25e598c3de3ed3a12a",
"assets/assets/srikar-bio.png": "b3ae3b4060b9c6ead18e5f63ae0faf66",
"assets/assets/Srikar-GROUP.png": "419110cceb1904b2ee5b82db2e4d3471",
"assets/assets/srikar-home-icon.png": "4ef3ac79f310cd99887d731e0fa4cc2b",
"assets/assets/srikar-seed.png": "bb20fba67794f396fe150f5f5b78aa50",
"assets/assets/srikargroups_logo.png": "24f7b037c0c403cabe30cd9fe1442cb7",
"assets/assets/srikargroups_logo_with_border.png": "0e0f111ed926018f00c4bb3fe9134555",
"assets/assets/srikar_biotech_logo.svg": "61edbfe5f86b3475bc835790d37a067b",
"assets/assets/srikar_seeds.png": "d29a4a5b8e0261ce22b7b3ca336de109",
"assets/assets/truck-check.svg": "e79aec6fafb79618809f19aca630382a",
"assets/FontManifest.json": "7023a6a4ed893d3b72c9f7d904c31a2c",
"assets/fonts/MaterialIcons-Regular.otf": "2b2a109f8aa84e8e9b7fd6940f292502",
"assets/NOTICES": "697017b93d8281f41e3ab3246cfbe0b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d62b0bc06da2f79482ade64d2a17248d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "55859b4b492116a6de4b249c77101d6a",
"/": "55859b4b492116a6de4b249c77101d6a",
"main.dart.js": "6d9fd288c105ec4f0cf12c72fd7bf8c8",
"manifest.json": "9b0efe5ff38334b5a77f03148724e5b8",
"version.json": "065022c6d29eb32ec5ee426b86f3b546"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
