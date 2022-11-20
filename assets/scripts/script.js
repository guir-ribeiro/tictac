let relogioScreen = document.querySelector('#relogio-screen');
let relogioMenu = document.querySelector('#relogio-menu');
let alarmeScreen = document.querySelector('#alarme-screen');

function relogio(){
    alarmeScreen.style.display = "none";
    relogioScreen.style.display = "grid";
}

function alarme(){
    relogioScreen.style.display = "none";
    alarmeScreen.style.display = "grid";
}