// JavaScript Document
var deButton = document.querySelector("header nav button");

deButton.addEventListener('click',openMenu);

function openMenu(event) {
    var deNav document.querySelector("header nav");
    deNav.classList.toggle(toonMenu);
}
