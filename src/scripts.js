// Sticky navbar
const navbar = document.querySelector('#nav');
const navbarInitialPosition = navbar.offsetTop;

const stickyNavbar = () => {
    if (window.pageYOffset >= navbarInitialPosition) {
        navbar.classList.add("stick")
    } else {
        navbar.classList.remove("stick");
    };
};

window.onscroll = () => {
    stickyNavbar();
};
