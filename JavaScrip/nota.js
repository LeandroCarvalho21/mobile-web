//variaveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("result");
const digiteNota = document.getElementById("message");

//função
function resultadoNotaClick(event) {
    event.preventDefault()

    /*verifica se o usuario digitou alguma nota, caso não houver nenhum número ele exibe a msg que esta na variavel
    digiteNota*/ 
    if (inputNota.value == "") {
        digiteNota.style.display = "block" //display block para exibir a msg na tela 
        resultado.innerHTML = ""; // resultado vazio para sumir com a msg de aprovado ou reprovado 
        return false; //colocamos return false para impedir o usuario de passar dessa parte.

    } else {
        if (inputNota.value >= 6) {
            resultado.innerHTML = "Aprovado";
            resultado.style.color = "#44ff00"
            digiteNota.style.display = "none"
            inputNota.value = "";
        } else {
            resultado.style.color = "red"
            resultado.innerHTML = "Reprovado";
            digiteNota.style.display = "none"
            inputNota.value = "";
        }
    }
}