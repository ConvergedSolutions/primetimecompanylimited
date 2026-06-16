const menuOpenButton = document.querySelector ("#menu-open-button");
const menuCloseButton = document.querySelector ("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle Mobile Visibility
    document.body.classList.toggle("show-mobile-menu"); 
});

    // Close menu when button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());