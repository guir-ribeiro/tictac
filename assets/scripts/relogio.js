const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");


function contagem (){
    const dataAtual = new Date();

    horas.innerHTML = formatTime(dataAtual.getHours());
    minutos.innerHTML = formatTime(dataAtual.getMinutes());
    segundos.innerHTML = formatTime(dataAtual.getSeconds());
}

function formatTime(time){
    var timer = time < 10 ? `0${time}`: time;
    return timer
}

setInterval(contagem,1000)