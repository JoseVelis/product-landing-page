const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggle.textContent = '🌓'; // Cambia el ícono a modo claro
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '🌞'; // Cambia el ícono a modo oscuro
  }
});