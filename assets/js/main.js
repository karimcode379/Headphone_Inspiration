let mobileMenu = document.getElementById('mobileMenu');
let header = document.getElementById('header');

function toggleMenu() {
    if (mobileMenu.style.right === "-110%") {
        mobileMenu.style.right = "0"
    } else {
        mobileMenu.style.right = "-110%";
    }
}