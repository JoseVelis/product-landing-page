// Cambiar entre modo claro y oscuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verificar si hay una preferencia guardada en localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        themeToggle.textContent = '🌞'; // Cambiar el ícono si está en modo oscuro
    }
}

// Alternar entre modos
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌓'; // Cambiar el ícono a modo claro
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '🌞'; // Cambiar el ícono a modo oscuro
    }
});