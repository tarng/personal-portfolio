# 使用指南

## 目錄

1. [環境要求](#環境要求)
2. [安裝步驟](#安裝步驟)
3. [運行網站](#運行網站)
4. [開發指南](#開發指南)
5. [圖片生成](#圖片生成)
6. [常見問題](#常見問題)

## 環境要求

### 基本要求
- 現代網頁瀏覽器（Chrome、Firefox、Safari、Edge 或 Opera）
- 本地伺服器（用於開發）

### 開發環境（可選）
- Python 3.x（用於生成解決方案圖片）
- 程式碼編輯器（如 VS Code、Sublime Text 等）

## 安裝步驟

1. 克隆專案：
```bash
git clone [repository-url]
cd personal-portfolio
```

2. 安裝 Python 依賴（如果需要生成圖片）：
```bash
pip install Pillow
```

## 運行網站

1. 使用 Python 的內建 HTTP 伺服器：
```bash
python3 -m http.server 8000
```

2. 在瀏覽器中訪問：
```
http://localhost:8000
```

## 開發指南

### 檔案結構說明

- `index.html`: 網站首頁
- `education.html`: 學歷頁面
- `skills.html`: 技能頁面
- `experience.html`: 經歷頁面
- `solutions.html`: 解決方案列表頁
- `solution1.html` ~ `solution8.html`: 解決方案詳細頁
- `search.html`: 搜尋頁面
- `styles.css`: 樣式表
- `navigation.js`: 導航選單腳本
- `solution.js`: 解決方案動態內容腳本
- `search.js`: 搜尋功能腳本
- `generate_images.py`: 圖片生成腳本

### 樣式開發

1. 主要樣式定義在 `styles.css` 中
2. 使用 CSS3 的 Flexbox 和 Grid 進行布局
3. 包含響應式設計的媒體查詢
4. 使用 CSS 動畫增強用戶體驗

### JavaScript 開發

1. `navigation.js`: 處理導航選單的動態生成
2. `solution.js`: 處理解決方案頁面的動態內容
3. `search.js`: 實現全站搜尋功能

### 圖片生成

使用 `generate_images.py` 生成解決方案圖片：
```bash
python3 generate_images.py
```

生成的圖片將保存在 `images` 目錄中。

## 圖片生成

### 圖片規格
- 尺寸：1200x800 像素
- 格式：JPG
- 品質：95%
- 背景：漸層效果
- 文字：解決方案編號

### 自定義圖片

1. 修改 `generate_images.py` 中的顏色設定：
```python
colors = [
    '#3498db',  # 藍色
    '#2ecc71',  # 綠色
    '#9b59b6',  # 紫色
    '#e67e22',  # 橙色
    '#e74c3c',  # 紅色
    '#1abc9c',  # 淺藍色
    '#00bcd4',  # 青色
    '#f1c40f'   # 黃色
]
```

2. 調整圖片大小和品質：
```python
image = Image.new('RGB', (1200, 800), color='white')
image.save(f'images/solution{i}.jpg', quality=95)
```

## 常見問題

### 1. 圖片無法顯示
- 確認 `images` 目錄存在
- 確認圖片檔案名稱正確
- 確認圖片權限設定正確

### 2. 導航選單不顯示
- 確認 `navigation.js` 已正確載入
- 檢查瀏覽器控制台是否有錯誤訊息

### 3. 搜尋功能無效
- 確認 `search.js` 已正確載入
- 檢查瀏覽器控制台是否有錯誤訊息

### 4. 動畫效果不順暢
- 確認使用現代瀏覽器
- 檢查設備性能是否足夠

## 更新日誌

### v1.0.0 (2024-03-24)
- 初始版本發布
- 實現基本功能
- 添加動畫效果
- 優化移動端顯示 