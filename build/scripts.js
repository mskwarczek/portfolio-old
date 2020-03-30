// Sticky navbar
const navbar = document.querySelector('#nav');
const navbarInitialPosition = navbar.offsetTop;

const stickyNavbar = () => {
    if (window.pageYOffset >= navbarInitialPosition) {
        navbar.classList.add('stick')
    } else {
        navbar.classList.remove('stick');
    };
};

// Scroll progress
const progressBar = document.querySelector('.progress-bar');

const showProgress = () => {
    let scrollPosition = window.pageYOffset / (document.body.scrollHeight - window.innerHeight) * 100;
    progressBar.style.width = scrollPosition + '%';
};

// Onscroll animation
const animatedElements = document.querySelectorAll('.hidden');

const onscrollAnimation = () => {
    animatedElements.forEach(elem => {
        if (window.pageYOffset + window.innerHeight >= elem.offsetTop + 100) {
            elem.classList.remove('hidden');
            elem.classList.add('show');
        };
    });
};

// Trigger all actions
window.onscroll = () => {
    stickyNavbar();
    showProgress();
    onscrollAnimation();
};

// Navigation menu on/off
const toggleMenu = () => {
    const menu = document.querySelector('.list');
    menu.classList.contains('on')
    ? menu.classList.remove('on')
    : menu.classList.add('on');
};

// Contact form

window.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('contact-form');
    const status = document.getElementById('contact-form-status');
    
    const success = () => {
        form.reset();
        status.innerHTML = 'Thanks!';
    };

    const error = () => {
        status.innerHTML = 'Oops! There was a problem.';
    };

    form.addEventListener('submit', event => {
        event.preventDefault();
        const data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

const ajax = (method, url, data, success, error) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        };
    };
    xhr.send(data);
};
