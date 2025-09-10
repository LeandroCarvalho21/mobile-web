//variaveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("result");

//função
function resultadoNotaClick(event) {
    event.preventDefault()

    if (inputNota.value >= 6) {
        resultado.innerHTML = "Aprovado";
        inputNota.value = "";
    } else {
        resultado.innerHTML = "Reprovado";
        inputNota.value = "";
    }
}