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
    const horaAtual = agora.getHours().toString().padStart(2, "0");
    const minutoAtual = agora.getMinutes().toString().padStart(2, "0");
    const segundosAtual = agora.getSeconds().toString().padStart(2, "0");
    document.getElementById("hora").textContent = `${horaAtual}:${minutoAtual}:${segundosAtual}`

}

function diaMesAno() {
    const data = new Date();
    const dia = data.getDay();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    let mesNiver = mes + 1
    let diaNiver = dia + 14


    document.getElementById("dia").textContent = `${diaNiver}`
    document.getElementById("mes").textContent = `${mesNiver}`
    document.getElementById("ano").textContent = `${ano}`

    // console.log(mesNiver, diaNiver, ano);
}

//chamar função
diasParaNiver();
setInterval(atualizarHora, 1000);
// setInterval(diaMesAno, 1000);
atualizarHora();
diaMesAno();
