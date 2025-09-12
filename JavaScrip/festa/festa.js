const idade = document.getElementById("idade");
const menorIdade = document.getElementById("menorIdade")
const maiorIdade = document.getElementById("maiorIdade")
const digiteIdade = document.getElementById("digiteIdade")

function verificarIdade(event) {
    event.preventDefault();

    if (idade.value == "") {
        digiteIdade.style.display = "block";
        menorIdade.style.display = "none"
        maiorIdade.style.display = "none"
        return false

    } else {
        if (idade.value >= 18) {
            maiorIdade.style.display = "block"
            menorIdade.style.display = "none"
            digiteIdade.style.display = "none";
        } else {
            menorIdade.style.display = "block"
            maiorIdade.style.display = "none"
            digiteIdade.style.display = "none";
        }
    }
}