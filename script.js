let currentTheme = 'ubuntu';

// Initialize terminal
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    
    // Create navigation
    Object.keys(pages).forEach(page => {
        const button = document.createElement('div');
        button.className = 'ascii-button';
        button.textContent = page;
        button.onclick = () => loadPage(page);
        sidebar.appendChild(button);
    });

    // Theme switching with TAB key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            cycleTheme();
        }
    });

    // Load initial page and theme
    setTheme(currentTheme);
    loadPage('System');
});

function loadPage(pageName) {
    const page = pages[pageName];
    const header = document.getElementById('header');
    const mainContent = document.getElementById('main-content');
    
    // Update header
    header.textContent = page.Header;
    
    // Update content
    mainContent.innerHTML = '';
    page.Content.Sections.forEach(section => {
        section.forEach(content => {
            if (typeof content === 'string') {
                const p = document.createElement('p');
                p.innerHTML = content;
                if (currentTheme === 'rainbow') {
                    p.classList.add('rainbow-text');
                }
                mainContent.appendChild(p);
            } else if (content.type === 'image') {
                const div = document.createElement('div');
                div.className = 'image-container';
                div.innerHTML = `<img src="${content.url}" alt="${content.alt}">`;
                mainContent.appendChild(div);
            } else if (content.type === 'themes') {
                const themeContainer = document.createElement('div');
                themeContainer.className = 'theme-container';
                
                content.options.forEach(themeName => {
                    const themeButton = document.createElement('div');
                    themeButton.className = `ascii-button ${themeName === currentTheme ? 'selected' : ''}`;
                    themeButton.textContent = themeName;
                    themeButton.onclick = () => {
                        setTheme(themeName);
                        document.querySelectorAll('.theme-container .ascii-button').forEach(btn => {
                            btn.classList.toggle('selected', btn.textContent === themeName);
                        });
                    };
                    themeContainer.appendChild(themeButton);
                });
                
                mainContent.appendChild(themeContainer);
            }
        });
    });
    
    // Update navigation selection
    document.querySelectorAll('#sidebar .ascii-button').forEach(btn => {
        btn.classList.toggle('selected', btn.textContent === pageName);
    });
}

function cycleTheme() {
    const themeNames = Object.keys(THEMES);
    const currentIndex = themeNames.indexOf(currentTheme);
    const nextTheme = themeNames[(currentIndex + 1) % themeNames.length];
    setTheme(nextTheme);
}

function setTheme(themeName) {
    currentTheme = themeName;
    const theme = THEMES[themeName];
    
    // Apply theme variables to root
    document.documentElement.style.setProperty('--term-bg', theme.termBg);
    document.documentElement.style.setProperty('--term-fg', theme.termFg);
    document.documentElement.style.setProperty('--term-highlight', theme.termHighlight);
    document.documentElement.style.setProperty('--term-select', theme.termSelect);
    document.documentElement.style.setProperty('--term-accent', theme.termAccent);
    
    // Update body class for rainbow effects
    document.body.className = `theme-${themeName}`;
}