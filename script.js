function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamberger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
const themes = [
    { backgroundColor: '#3498db', color: '#ecf0f1' },
    { backgroundColor: '#e74c3c', color: '#ecf0f1' },
    { backgroundColor: '#2ecc71', color: '#ecf0f1' },
    { backgroundColor: '#f1c40f', color: '#2c3e50' }
  ];
  let currentTheme = 0;

  document.getElementById('themeButton').addEventListener('click', function() {
    currentTheme = (currentTheme + 1) % themes.length;
    this.style.backgroundColor = themes[currentTheme].backgroundColor;
    this.style.color = themes[currentTheme].color;
  });
// Get the theme button and body element
const themeButton = document.getElementById('themeButton');
const body = document.body;

// Check if user has a theme preference stored in local storage
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    body.classList.add(storedTheme);
}

// Toggle theme when button is clicked
themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : '';
    localStorage.setItem('theme', currentTheme);
});
