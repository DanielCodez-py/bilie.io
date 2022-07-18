var ham = document.querySelector("#hamburger");
var nav = document.querySelector("#navbar");
var navCover = document.querySelector(".nav-cover"); 
var leftNav = document.querySelector(".left-btn");
var rightNav = document.querySelector(".right-btn");
var sect = document.querySelector("#main-content");

ham.onclick = () => {
    ham.classList.toggle("active")    
    nav.classList.toggle("active")
    navCover.classList.toggle("active")
}

var displacementX = 0;
rightNav.onclick=()=> {
    displacementX += 100;
    if (displacementX > 0) {
        sect.setAttribute(
            "style", 
            `transform: translateX(${displacementX})`
            )
    }
}