// JavaScript Document

// Menu-tevoorschijn 
var hamburgerMenu = document.querySelector("nav li:first-of-type");

hamburgerMenu.addEventListener("click", menuSlide); 

function menuSlide(){
    let menuVerstop = document.querySelector(".menu-hidden"); 

    menuVerstop.classList.add("menu-show"); 
}

// Menu weer weg 

var sluitKruisje = document.querySelector(".menu-sluiten");

sluitKruisje.addEventListener("click", sluitHetMenu); 

function sluitHetMenu(){
    let menuSluit = document.querySelector(".menu-hidden"); 

    menuSluit.classList.remove("menu-show"); 
}

// dark-mode // 


var darkModeButton = document.querySelector("footer button");

darkModeButton.addEventListener("click", MaakHetDonker); 

function MaakHetDonker(){
    let ditMoetDonker = document.querySelector("body"); 

    ditMoetDonker.classList.toggle("dark-mode"); 
}
