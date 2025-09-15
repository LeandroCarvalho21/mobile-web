function diasParaNiver() {
    const hoje = new Date();
    const diaSemana = hoje.getDay(2); //0=Dom, 1=Seg,...., 4=Quin
    let diasFaltando = 4 - diaSemana;

    if (diasFaltando < 0) {
        diasFaltando += 7;
    }
    document.getElementById("dias").textContent = diasFaltando
}

function atualizarHora() {
    const agora = new Date();
    const horaAtual = agora.getHours();
    const minutoAtual = agora.getMinutes();
    const segundosAtual = agora.getSeconds();
    document.getElementById("hora").textContent = `${horaAtual}:${minutoAtual}:${segundosAtual}`
    
    // if (segundosAtual == 0) {
    //     segundosAtual = `0${segundosAtual}`
    // }
}

//chamar função
diasParaNiver();
setInterval(atualizarHora, 1000);
atualizarHora();
