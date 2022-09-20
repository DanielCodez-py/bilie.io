const ham = document.querySelector('.hamIcon');
const nav = document.querySelector('#navBar');
const logo = document.querySelector('.logo');
const header = document.querySelector("header");
const body = document.querySelector('body');
const section1 = document.querySelector(".content-1")

ham.onclick =  toggle = () => {
    ham.classList.toggle("active");
    nav.classList.toggle("active");
    logo.classList.toggle("active");
}

body.onscroll = transBg = () => {
    header.classList.toggle("transparent");
}

const observer = new IntersectionObserver(entries => {

})

observer.observe(section1); 
