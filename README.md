# 個人作品集網站

這是一個使用純 HTML、CSS 和 JavaScript 開發的個人作品集網站，展示唐天成的專業技能、工作經歷和解決方案。

## 功能特點

- 響應式設計，適配各種設備
- 動態導航選單
- 全站搜尋功能
- 解決方案展示
- 動畫效果
- 浮動聯絡按鈕

## 技術棧

- HTML5
- CSS3 (Flexbox, Grid, 動畫)
- JavaScript (原生)
- Font Awesome 6.0.0 (圖標)
- Python (用於生成解決方案圖片)

## 目錄結構

```
personal-portfolio/
├── images/                 # 圖片資源
│   ├── personal-photo.jpg  # 個人照片
│   ├── solution1.jpg      # 解決方案圖片
│   └── ...
├── index.html             # 首頁
├── education.html         # 學歷頁面
├── skills.html           # 技能頁面
├── experience.html       # 經歷頁面
├── solutions.html        # 解決方案列表頁
├── solution1.html        # 解決方案詳細頁
├── solution2.html        # 解決方案詳細頁
├── solution3.html        # 解決方案詳細頁
├── solution4.html        # 解決方案詳細頁
├── solution5.html        # 解決方案詳細頁
├── solution6.html        # 解決方案詳細頁
├── solution7.html        # 解決方案詳細頁
├── solution8.html        # 解決方案詳細頁
├── search.html           # 搜尋頁面
├── styles.css           # 樣式表
├── navigation.js        # 導航選單腳本
├── solution.js         # 解決方案動態內容腳本
├── search.js          # 搜尋功能腳本
├── generate_images.py  # 圖片生成腳本
└── README.md          # 專案說明文件
```

## 安裝和運行

1. 克隆專案：
```bash
git clone [repository-url]
cd personal-portfolio
```

2. 生成解決方案圖片（需要 Python 環境）：
```bash
python3 generate_images.py
```

3. 使用本地伺服器運行網站：
```bash
python3 -m http.server 8000
```

4. 在瀏覽器中訪問：
```
http://localhost:8000
```

## 瀏覽器支援

- Chrome (推薦)
- Firefox
- Safari
- Edge
- Opera

## 開發指南

詳細的開發指南請參考 [usage-guide.md](usage-guide.md)

## 授權

本專案採用 MIT 授權條款 - 詳見 [LICENSE](LICENSE) 文件 