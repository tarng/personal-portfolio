# 個人作品集網站使用說明

本文件提供詳細的配置和使用說明，幫助您快速設置和自定義個人作品集網站。

## 目錄

1. [基本設置](#基本設置)
2. [圖片配置](#圖片配置)
3. [文字內容更新](#文字內容更新)
4. [聯絡方式更新](#聯絡方式更新)
5. [本地部署與測試](#本地部署與測試)
6. [常見問題](#常見問題)
7. [使用 Cursor 進行開發](#使用-cursor-進行開發)

## 基本設置

### 1. 專案結構確認

確保您有以下目錄結構：
```
personal-portfolio/
├── docs/
├── images/
├── *.html
└── styles.css
```

### 2. 圖片目錄設置

1. 在專案根目錄下創建 `images` 目錄（如果不存在）
2. 準備所需的圖片文件

## 圖片配置

### 1. 個人照片

1. 準備一張個人照片
2. 將照片命名為 `personal-photo.jpg`
3. 將照片放入 `images` 目錄
4. 建議尺寸：400x400 像素
5. 格式：JPG 或 PNG

### 2. 解決方案圖片

1. 準備 8 張解決方案相關的圖片
2. 將圖片命名為 `solution1.jpg` 到 `solution8.jpg`
3. 將所有圖片放入 `images` 目錄
4. 建議尺寸：1200x800 像素
5. 格式：JPG 或 PNG

## 文字內容更新

### 1. 網站標題

編輯所有 HTML 文件的 `<title>` 標籤：

```html
<title>您的名字 - 頁面名稱</title>
```

### 2. 個人簡介

編輯 `index.html` 中的個人簡介部分：

```html
<div class="profile-text">
    <p>您好！我是[您的名字]。我是一位[您的專業領域]。</p>
    <p>我擅長[您的技能]，並且持續學習和成長。我相信[您的價值觀或理念]。</p>
</div>
```

### 3. 學歷資訊

編輯 `education.html` 中的學歷內容：

```html
<div class="timeline-item">
    <h3>[學位名稱]</h3>
    <p class="company">[學校名稱]</p>
    <p class="date">[就讀時間]</p>
    <ul>
        <li>主修：[您的科系]</li>
        <li>論文主題：[論文主題]</li>
        <li>相關成就：[成就描述]</li>
    </ul>
</div>
```

### 4. 技能專長

編輯 `skills.html` 中的技能內容：

```html
<div class="skill-category">
    <h3>[技能類別]</h3>
    <ul>
        <li>[具體技能 1]</li>
        <li>[具體技能 2]</li>
        <li>[具體技能 3]</li>
    </ul>
</div>
```

### 5. 工作經歷

編輯 `experience.html` 中的工作經歷：

```html
<div class="timeline-item">
    <h3>[職位名稱]</h3>
    <p class="company">[公司名稱]</p>
    <p class="date">[工作時間]</p>
    <ul>
        <li>[工作職責 1]</li>
        <li>[工作職責 2]</li>
        <li>[工作職責 3]</li>
    </ul>
</div>
```

### 6. 解決方案內容

編輯各個解決方案頁面（`solution1.html` 到 `solution8.html`）：

```html
<div class="solution-content">
    <h2>[解決方案名稱]</h2>
    <div class="solution-description">
        <p>[解決方案描述]</p>
        <p>[技術細節]</p>
        <p>[應用場景]</p>
    </div>
</div>
```

## 聯絡方式更新

編輯所有頁面中的聯絡方式部分：

```html
<div class="floating-contact">
    <a href="mailto:[您的電子郵件]" class="contact-icon" title="Email">
        <i class="fas fa-envelope"></i>
    </a>
    <a href="[您的 LinkedIn 連結]" target="_blank" class="contact-icon" title="LinkedIn">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="[您的 GitHub 連結]" target="_blank" class="contact-icon" title="GitHub">
        <i class="fab fa-github"></i>
    </a>
</div>
```

## 本地部署與測試

### 1. 啟動本地伺服器

使用 Python 的內建 HTTP 伺服器：

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### 2. 訪問網站

在瀏覽器中訪問：`http://localhost:8000`

### 3. 測試清單

1. 檢查所有頁面是否正常載入
2. 確認所有圖片是否正確顯示
3. 測試所有連結是否有效
4. 檢查響應式設計在不同設備上的表現
5. 驗證聯絡方式連結是否正確
6. 確認解決方案下拉選單是否正常運作

## 常見問題

### 1. 圖片無法顯示

- 確認圖片檔案名稱是否正確
- 確認圖片是否放在正確的目錄中
- 檢查圖片路徑是否正確

### 2. 樣式異常

- 確認 `styles.css` 檔案是否正確載入
- 檢查 CSS 檔案路徑是否正確
- 清除瀏覽器快取後重試

### 3. 連結無效

- 確認所有 HTML 檔案名稱是否正確
- 檢查檔案路徑是否正確
- 確認目標檔案是否存在

### 4. 本地伺服器無法啟動

- 確認 Python 是否正確安裝
- 檢查端口 8000 是否被占用
- 嘗試使用其他端口（如 8080）

## 注意事項

1. 保持檔案結構完整
2. 定期備份您的修改
3. 測試所有功能後再部署
4. 確保所有連結都是最新的
5. 定期更新內容保持新鮮度

## 使用 Cursor 進行開發

### 1. 環境設置

1. 安裝 Cursor IDE
   - 訪問 [Cursor 官網](https://cursor.sh) 下載並安裝
   - 確保您有穩定的網路連接

2. 打開專案
   - 啟動 Cursor
   - 選擇 File > Open Folder
   - 選擇 `personal-portfolio` 資料夾

### 2. 使用 Cursor 的功能

1. 檔案導航
   - 使用左側檔案瀏覽器快速切換檔案
   - 使用 `Cmd/Ctrl + P` 快速搜尋檔案
   - 使用 `Cmd/Ctrl + Shift + F` 進行全專案搜尋

2. 智能編輯
   - 使用 AI 輔助功能（按 `Cmd/Ctrl + K`）
   - 自動完成和程式碼建議
   - 智能重構和重命名

3. 即時預覽
   - 安裝 Live Server 擴充功能
   - 右鍵點擊 HTML 檔案，選擇 "Open with Live Server"
   - 或使用命令面板（`Cmd/Ctrl + Shift + P`）輸入 "Live Server: Open with Live Server"

4. 版本控制
   - 使用內建的 Git 功能
   - 查看檔案變更歷史
   - 提交和推送變更

### 3. 開發工作流程

1. 修改現有檔案
   - 在檔案瀏覽器中找到要修改的檔案
   - 雙擊開啟檔案
   - 使用 Cursor 的智能編輯功能進行修改
   - 即時預覽變更效果

2. 新增功能
   - 使用 AI 輔助功能生成新的程式碼
   - 遵循現有的程式碼風格
   - 確保新功能與現有功能整合

3. 除錯
   - 使用瀏覽器的開發者工具
   - 檢查 Console 面板的錯誤訊息
   - 使用 Cursor 的智能提示修復問題

### 4. 最佳實踐

1. 程式碼組織
   - 保持檔案結構清晰
   - 遵循現有的命名慣例
   - 適當使用註解說明複雜邏輯

2. 版本控制
   - 定期提交變更
   - 寫清楚提交訊息
   - 在重要變更前建立分支

3. 測試
   - 修改後測試所有相關功能
   - 確保響應式設計正常
   - 檢查跨瀏覽器相容性

### 5. 常見問題解決

1. AI 功能無回應
   - 檢查網路連接
   - 確認 Cursor 版本是否最新
   - 嘗試重新啟動 Cursor

2. 預覽問題
   - 清除瀏覽器快取
   - 確認 Live Server 是否正常運行
   - 檢查檔案路徑是否正確

3. 版本控制問題
   - 確認 Git 設定是否正確
   - 檢查檔案權限
   - 解決衝突時使用 Cursor 的合併工具

### 6. 進階技巧

1. 使用 AI 輔助功能
   - 生成新的 HTML 結構
   - 優化 CSS 樣式
   - 改進 JavaScript 程式碼
   - 自動修復常見問題

2. 自定義設定
   - 調整編輯器主題
   - 設定快捷鍵
   - 配置程式碼格式化規則

3. 效能優化
   - 使用 Cursor 的效能分析工具
   - 優化圖片和資源載入
   - 改善程式碼執行效率 