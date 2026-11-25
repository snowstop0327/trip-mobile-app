/* 山陰秘書 Service Worker：讓網頁 App 在沒網路時也能打開
 * - 自己網站的檔案：先抓網路最新版，沒網路才用快取（所以更新後重開就是新版）
 * - 字型、圖示、景點照片：用快取優先（省流量、離線也看得到）
 * - 天氣、匯率 API：直接走網路（App 本身已存在手機裡）
 * 改了檔案想強迫大家更新時，把 VERSION 加 1 即可。
 */
const VERSION = 'v11';
const APP_CACHE = `sanin-app-${VERSION}`;
const ASSET_CACHE = 'sanin-assets';
const APP_SHELL = [
  './',
  './index.html',
  './css/app.css?v=11',
  './js/app.js?v=11',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png',
  './photos/conan.jpg',
  './photos/miho-shrine.jpg',
  './photos/hinomisaki-lighthouse.jpg',
  './photos/hinomisaki-shrine.jpg',
  './photos/izumo-soba.jpg',
  './photos/izumo-taisha.jpg',
  './photos/mankusen.jpg',
  './photos/matsue-castle.jpg',
  './photos/mizuki-road.jpg',
  './photos/pear-museum.jpg',
  './photos/snow-crab.jpg',
  './photos/taoyuan-city.jpg',
  './photos/tpe-airport.jpg',
  './photos/tpe-t1.jpg',
  './photos/voxy.jpg',
  './photos/yonago-airport.jpg',
  './photos/yonago-castle.jpg',
  './photos/yonago-station.jpg'
];
const ASSET_HOSTS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'cdnjs.cloudflare.com',
  'upload.wikimedia.org'
];

// 字型樣式表裡列了很多字型檔（中文字型被切成上百個小檔），把它們全部先存起來，離線才不會變回系統字
async function precacheFontFiles(cssRes, cssUrl, cache) {
  const css = await cssRes.text();
  // Noto Sans TC 四種粗細加起來幾十 MB，離線時改用手機內建中文字（iPhone 是蘋方）就好；
  // 只存像素字型 DotGothic16 和 Font Awesome 圖示
  const blocks = css.split('@font-face').filter((b) => !/Noto Sans TC/.test(b));
  const urls = blocks.flatMap((b) => [...b.matchAll(/url\(([^)]+)\)/g)])
    .map((m) => new URL(m[1].replace(/["']/g, ''), cssUrl).href);
  // 只抓 woff2（Font Awesome 也有 ttf 備援，不需要）
  const list = [...new Set(urls.filter((u) => u.includes('.woff2')))];
  for (let i = 0; i < list.length; i += 8) {
    await Promise.all(list.slice(i, i + 8).map(async (u) => {
      if (await cache.match(u)) return;
      try {
        const r = await fetch(u, { mode: 'cors' });
        if (r.ok) await cache.put(u, r);
      } catch (e) { /* 沒網路就算了，下次再補 */ }
    }));
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(APP_CACHE).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('sanin-app-') && k !== APP_CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // 自己網站：網路優先
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(APP_CACHE).then((cache) => cache.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match(req, { ignoreSearch: req.mode === 'navigate' })
          .then((hit) => hit || caches.match('./index.html')))
    );
    return;
  }

  // 字型、圖示、照片：快取優先
  if (ASSET_HOSTS.includes(url.hostname)) {
    event.respondWith(
      caches.open(ASSET_CACHE).then((cache) =>
        cache.match(req).then((hit) => {
          if (hit) return hit;
          return fetch(req).then((res) => {
            if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
            if (res.ok && (url.hostname === 'fonts.googleapis.com' || url.pathname.endsWith('all.min.css'))) {
              event.waitUntil(precacheFontFiles(res.clone(), url, cache));
            }
            return res;
          });
        })
      )
    );
  }
  // 其他（天氣、維基 API、Google 地圖）：不攔截
});
