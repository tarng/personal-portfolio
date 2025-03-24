// 定義要搜尋的頁面列表
const pages = [
    { url: 'index.html', title: '首頁' },
    { url: 'education.html', title: '學歷' },
    { url: 'skills.html', title: '技能' },
    { url: 'experience.html', title: '經歷' },
    { url: 'solutions.html', title: '解決方案' },
    { url: 'solution1.html', title: '解決方案 1' },
    { url: 'solution2.html', title: '解決方案 2' },
    { url: 'solution3.html', title: '解決方案 3' },
    { url: 'solution4.html', title: '解決方案 4' },
    { url: 'solution5.html', title: '解決方案 5' },
    { url: 'solution6.html', title: '解決方案 6' },
    { url: 'solution7.html', title: '解決方案 7' },
    { url: 'solution8.html', title: '解決方案 8' }
];

// 儲存所有頁面的內容
let pageContents = [];

// 初始化搜尋功能
async function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');

    // 載入所有頁面內容
    await loadAllPages();

    // 綁定搜尋按鈕事件
    searchButton.addEventListener('click', () => performSearch(searchInput.value));

    // 綁定 Enter 鍵事件
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
}

// 載入所有頁面內容
async function loadAllPages() {
    for (const page of pages) {
        try {
            const response = await fetch(page.url);
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // 提取頁面內容
            const content = {
                url: page.url,
                title: page.title,
                text: doc.body.textContent.trim()
            };

            pageContents.push(content);
        } catch (error) {
            console.error(`Error loading ${page.url}:`, error);
        }
    }
}

// 執行搜尋
function performSearch(query) {
    if (!query.trim()) {
        document.getElementById('searchResults').innerHTML = '<p>請輸入搜尋關鍵字</p>';
        return;
    }

    const results = [];
    const searchTerms = query.toLowerCase().split(' ');

    // 搜尋每個頁面
    for (const content of pageContents) {
        const text = content.text.toLowerCase();
        let matchCount = 0;

        // 檢查是否包含所有搜尋詞
        for (const term of searchTerms) {
            if (text.includes(term)) {
                matchCount++;
            }
        }

        // 如果所有搜尋詞都匹配，添加到結果中
        if (matchCount === searchTerms.length) {
            results.push({
                url: content.url,
                title: content.title,
                text: content.text.substring(0, 200) + '...' // 預覽前200個字符
            });
        }
    }

    // 顯示結果
    displayResults(results);
}

// 顯示搜尋結果
function displayResults(results) {
    const searchResults = document.getElementById('searchResults');

    if (results.length === 0) {
        searchResults.innerHTML = '<p>沒有找到相關結果</p>';
        return;
    }

    const resultsList = document.createElement('div');
    resultsList.className = 'results-list';

    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';

        resultItem.innerHTML = `
            <h3><a href="${result.url}">${result.title}</a></h3>
            <p>${result.text}</p>
        `;

        resultsList.appendChild(resultItem);
    });

    searchResults.innerHTML = '';
    searchResults.appendChild(resultsList);
}

// 當頁面載入完成時初始化搜尋功能
document.addEventListener('DOMContentLoaded', initializeSearch); 