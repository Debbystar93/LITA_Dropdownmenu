// Toggle Menu Visibility
function toggleMenu() {
    const mainNav = document.querySelector('.main-nav');
    if (mainNav.style.display === 'flex') {
        mainNav.style.display = 'none';
    } else {
        mainNav.style.display = 'flex';
    }
}
