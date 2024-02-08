function toggleMenu() {
    const menu = document.querySelector(".menu-links"); // Target these 2 elements
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); // Whenever we click the 2 elements, it will add or remove the open class
    icon.classList.toggle("open");
}