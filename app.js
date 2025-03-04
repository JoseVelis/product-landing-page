// Constantes para temas
const THEMES = {
    LIGHT: 'light',
    DARK: 'dark'
};

const ICONS = {
    [THEMES.LIGHT]: '🌓',
    [THEMES.DARK]: '🌞'
};

// Selección de elementos
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Inicializar tema
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || THEMES.LIGHT;
    setTheme(savedTheme);
}

// Establecer tema
function setTheme(theme) {
    body.setAttribute('data-theme', theme);
    themeToggle.textContent = ICONS[theme];
    localStorage.setItem('theme', theme);
}

// Alternar tema
function toggleTheme() {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    setTheme(newTheme);
}

// Event listeners
themeToggle.addEventListener('click', toggleTheme);

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', initTheme);