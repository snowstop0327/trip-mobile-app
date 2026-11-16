# 🐕 柴柴領隊：山陰 4 日自駕秘書

2026/12/4–12/7 山陰自駕旅行用的手機網頁 App：行程（可編輯）、日文手指卡、免訂位美食與神社攻略、租車憑證、4 人分帳與行前清單。

## 資料夾結構

```
index.html              ← 頁面本體
css/app.css             ← 編譯好的樣式（不要手改，用 npm run build 產生）
js/app.js               ← 所有功能與行程資料
manifest.webmanifest    ← 「加入主畫面」用的 App 名稱、圖示、顏色
sw.js                   ← 離線快取（沒網路也能打開）
icons/                  ← App 圖示
src/input.css           ← 樣式原始檔（自訂 CSS 寫在這裡）
tailwind.config.js、package.json ← 編譯樣式用的設定
.nojekyll               ← 告訴 GitHub Pages 直接照原樣發布
```

## 部署到 GitHub Pages

1. 在 GitHub 建一個新的 repo（例如 `sanin-trip`），Public。
2. 把這個資料夾**裡面的所有檔案**放到 repo 的最上層（`node_modules/` 不用傳，`.gitignore` 已排除）。
3. repo → **Settings → Pages** → Source 選 **Deploy from a branch**，Branch 選 `main`、資料夾選 `/ (root)` → Save。
4. 等 1～2 分鐘，網址會是 `https://你的帳號.github.io/sanin-trip/`。

## 裝到手機

- **iPhone**：用 Safari 打開網址 → 分享按鈕 → 「加入主畫面」。
- **Android**：用 Chrome 打開 → 右上選單 → 「安裝應用程式」或「加到主畫面」。

第一次開啟後會把頁面、字型、照片存到手機，之後**在日本沒網路也能打開**（天氣和導航仍需要網路）。

⚠️ 編輯過的行程、分帳、勾選清單都只存在「那支手機、那個開啟方式」裡：
- iPhone 上「Safari 分頁」和「主畫面 App」是分開的兩份資料，建議裝好主畫面 App 之後就只用它。
- 4 個人的手機資料不會互相同步，分帳建議由一個人記。

## 修改內容之後

- 只改 `js/app.js` 的文字或行程資料：直接上傳即可。
- 改了 `index.html` 或 `js/app.js` 裡的**樣式 class**：要重新編譯樣式
  ```bash
  npm install
  npm run build
  ```
- 想讓已經裝好的手機一定拿到新版：把 `sw.js` 最上面的 `VERSION` 改成 `v2`、`v3`…，再上傳。
