// 定義解決方案數據
const solutions = {
    1: {
        title: '解決方案 1',
        description: '這是解決方案 1 的詳細描述。',
        features: [
            '功能特點 1',
            '功能特點 2',
            '功能特點 3'
        ],
        image: 'images/solution1.jpg'
    },
    2: {
        title: '解決方案 2',
        description: '這是解決方案 2 的詳細描述。',
        features: [
            '功能特點 1',
            '功能特點 2',
            '功能特點 3'
        ],
        image: 'images/solution2.jpg'
    },
    3: {
        title: '解決方案 3',
        description: '這是解決方案 3 的詳細描述。',
        features: [
            '功能特點 1',
            '功能特點 2',
            '功能特點 3'
        ],
        image: 'images/solution3.jpg'
    },
    4: {
        title: '解決方案 4',
        description: '這是解決方案 4 的詳細描述。',
        features: [
            '功能特點 1',
            '功能特點 2',
            '功能特點 3'
        ],
        image: 'images/solution4.jpg'
    },
    5: {
        title: '解決方案 5',
        description: '這是解決方案 5 的詳細描述。',
        features: [
            '功能特點 1',
            '功能特點 2',
            '功能特點 3'
        ],
        image: 'images/solution5.jpg'
    },
    6: {
        title: '解決方案 6',
        description: '這是解決方案 6 的詳細描述。',
        features: [
            '功能特點 1',
            '功能特點 2',
            '功能特點 3'
        ],
        image: 'images/solution6.jpg'
    },
    7: {
        title: '解決方案 7',
        description: '這是解決方案 7 的詳細描述。',
        features: [
            '功能特點 1',
            '功能特點 2',
            '功能特點 3'
        ],
        image: 'images/solution7.jpg'
    },
    8: {
        title: '解決方案 8',
        description: '這是解決方案 8 的詳細描述。',
        features: [
            '功能特點 1',
            '功能特點 2',
            '功能特點 3'
        ],
        image: 'images/solution8.jpg'
    }
};

// 生成解決方案頁面內容
function generateSolutionContent() {
    const main = document.querySelector('main');
    if (!main) return;

    // 從 URL 獲取解決方案編號
    const solutionNumber = window.location.pathname.split('solution')[1].split('.')[0];
    const solution = solutions[solutionNumber];
    if (!solution) return;

    // 生成頁面內容
    main.innerHTML = `
        <section class="section">
            <h2>${solution.title}</h2>
            <div class="solution-content">
                <img src="${solution.image}" alt="${solution.title}" class="solution-image">
                <div class="solution-details">
                    <p>${solution.description}</p>
                    <h3>主要特點</h3>
                    <ul>
                        ${solution.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </section>
    `;
}

// 當 DOM 加載完成時生成內容
document.addEventListener('DOMContentLoaded', generateSolutionContent); 