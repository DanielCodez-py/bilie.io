const ham = document.querySelector('.hamIcon');
const nav = document.querySelector('#navBar');
const logo = document.querySelector('.logo');

ham.onclick =  toggle = () => {
    ham.classList.toggle("active");
    nav.classList.toggle("active");
    logo.classList.toggle("active");
}

