// Obtener el botón y el estado inicial del tema
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Función para establecer el tema
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
        localStorage.setItem('theme', theme);
    } catch (e) {
        console.error('Error al guardar el tema en localStorage', e);
    }
    
    // Actualizar el emoji del botón
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌓';
}

// Verificar si hay un tema guardado
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setTheme(savedTheme);
} else if (prefersDarkScheme.matches) {
    setTheme('dark');
}

// Asegurarse de que el botón exista antes de agregar el evento
if (themeToggle) {
    // Evento click del botón
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });

    // Escuchar cambios en las preferencias del sistema
    prefersDarkScheme.addEventListener('change', (e) => {
        setTheme(e.matches ? 'dark' : 'light');
    });
} else {
    console.error('El botón de cambio de tema no se encontró en el DOM');
}