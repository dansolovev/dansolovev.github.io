// Гамбургер
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        console.log('asd');
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});

window.addEventListener("scroll", function() {
    const nav = document.querySelector(".navigation");
    nav.classList.toggle("navigation_sticky", window.scrollY > 150);
});

var isThemeLight = true
function changeTheme() {
    
console.log('a')
  if (isThemeLight) {
    document.body.setAttribute('dark', '');
    isThemeLight = false
  } else {
    document.body.removeAttribute('dark');
    isThemeLight = true
  }
}