let relogioScreen = document.querySelector('#relogio-screen');
let relogioMenu = document.querySelector('#relogio-menu');
let alarmeScreen = document.querySelector('#alarme-screen');
let alarmeMenu = document.querySelector('#alarme-menu');
let cronometroScreen = document.querySelector('#cronometro-screen');
let cronometroMenu = document.querySelector('#cronometro-menu');
let timerScreen = document.querySelector('#timer-screen');
let timerMenu = document.querySelector('#timer-menu');


function relogio(){
    alarmeMenu.classList.remove("ativo");
    cronometroMenu.classList.remove("ativo");
    timerMenu.classList.remove("ativo");
    relogioMenu.classList.add("ativo");

    alarmeScreen.style.display = "none";
    cronometroScreen.style.display = "none";
    relogioScreen.style.display = "grid";
}

function alarme(){
    relogioMenu.classList.remove("ativo");
    cronometroMenu.classList.remove("ativo");
    timerMenu.classList.remove("ativo");
    alarmeMenu.classList.add("ativo");

    relogioScreen.style.display = "none";
    cronometroScreen.style.display = "none";
    timerScreen.style.display = "none";
    alarmeScreen.style.display = "grid";
}

function cronometro(){
    relogioMenu.classList.remove("ativo");
    alarmeMenu.classList.remove("ativo");
    timerMenu.classList.remove("ativo");
    cronometroMenu.classList.add("ativo");

    relogioScreen.style.display = "none";
    alarmeScreen.style.display = "none";
    timerScreen.style.display = "none";
    cronometroScreen.style.display = "grid";
}

function timer(){
    relogioMenu.classList.remove("ativo");
    alarmeMenu.classList.remove("ativo");
    cronometroMenu.classList.remove("ativo");
    timerMenu.classList.add("ativo");

    relogioScreen.style.display = "none";
    alarmeScreen.style.display = "none";
    cronometroScreen.style.display = "none";
    timerScreen.style.display = "grid";
}
