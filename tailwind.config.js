/** Tailwind 設定：掃描 HTML 與 JS 裡用到的 class，產生 css/app.css */
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  theme: { extend: {} },
  plugins: [],
};
