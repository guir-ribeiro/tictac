// const horas = document.querySelector("#horas");
// const minutos = document.querySelector("#minutos");
// const segundos = document.querySelector("#segundos");

let tempo = 1000*60*60;

setInterval(function alarme (){
    const dataAtual = new Date();
    let horas = 18;
    let minutos = 55;
    let segundos = 0;

    horaAtual = (dataAtual.getHours());
    minutoAtual = (dataAtual.getMinutes());
    segundoAtual = (dataAtual.getSeconds());
    
    horasDiferenca = horas - horaAtual;
    minutosDiferenca = minutos - minutoAtual;
    segundosDiferenca = segundos > segundoAtual ? segundos - segundoAtual : segundoAtual - segundos;

    if(horaAtual == horas && minutoAtual == minutos && segundoAtual == segundos){
        console.log(`${horas} : ${minutos} : ${segundos}`)
    } else if(horaAtual != horas + 1){
        console.log(`${horasDiferenca} : ${minutosDiferenca} : ${segundosDiferenca}`)
        tempo = 1000*60*60;
    } else if(horaAtual == horas && minutoAtual == (minutos + 2)){
        tempo = 1000;
    } 
     else{
        console.log(`${horasDiferenca} : ${minutosDiferenca} : ${segundosDiferenca}`)
    }
},tempo)


// setInterval((horas, minutos, segundos) =>{
//     alarme(horas, minutos, segundos)
// },1000*2)


// function formatTime(time){
//     var timer = time < 10 ? `0${time}`: time;
//     return timer
// }