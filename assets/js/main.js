//dark theme toggle
const darkThemeToggle = document.querySelector('.theme-toggle');
darkThemeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});