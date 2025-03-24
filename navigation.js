// 定義導航菜單結構
const navigationItems = [
    { href: 'index.html', text: '首頁' },
    { href: 'education.html', text: '學歷' },
    { href: 'skills.html', text: '技能' },
    { href: 'experience.html', text: '經歷' },
    {
        href: 'solutions.html',
        text: '解決方案',
        dropdown: [
            { href: 'solutions.html', text: '解決方案' },
            { href: 'solution1.html', text: 'Sol1' },
            { href: 'solution2.html', text: 'Sol2' },
            { href: 'solution3.html', text: 'Sol3' },
            { href: 'solution4.html', text: 'Sol4' },
            { href: 'solution5.html', text: 'Sol5' },
            { href: 'solution6.html', text: 'Sol6' },
            { href: 'solution7.html', text: 'Sol7' },
            { href: 'solution8.html', text: 'Sol8' }
        ]
    },
    { href: 'search.html', text: '搜尋', icon: 'fas fa-search' }
];

// 生成導航菜單
function generateNavigation() {
    const nav = document.querySelector('nav ul');
    if (!nav) return;

    // 清空現有導航
    nav.innerHTML = '';

    // 獲取當前頁面路徑
    const currentPath = window.location.pathname.split('/').pop();

    // 生成導航項目
    navigationItems.forEach(item => {
        const li = document.createElement('li');

        if (item.dropdown) {
            // 創建下拉菜單
            li.className = 'dropdown';
            const isActive = currentPath === item.href;

            const a = document.createElement('a');
            a.href = item.href;
            a.textContent = item.text;
            if (isActive) a.className = 'active';

            const dropdownContent = document.createElement('div');
            dropdownContent.className = 'dropdown-content';

            item.dropdown.forEach(dropdownItem => {
                const dropdownA = document.createElement('a');
                dropdownA.href = dropdownItem.href;
                dropdownA.textContent = dropdownItem.text;
                if (currentPath === dropdownItem.href) {
                    dropdownA.className = 'active';
                }
                dropdownContent.appendChild(dropdownA);
            });

            li.appendChild(a);
            li.appendChild(dropdownContent);
        } else {
            // 創建普通菜單項
            const a = document.createElement('a');
            a.href = item.href;
            if (item.icon) {
                const icon = document.createElement('i');
                icon.className = item.icon;
                a.appendChild(icon);
                a.appendChild(document.createTextNode(' ' + item.text));
            } else {
                a.textContent = item.text;
            }
            if (currentPath === item.href) {
                a.className = 'active';
            }
            li.appendChild(a);
        }

        nav.appendChild(li);
    });
}

// 當 DOM 加載完成時生成導航
document.addEventListener('DOMContentLoaded', generateNavigation); 