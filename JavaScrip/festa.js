const idade = document.getElementById("idade");
const MenorIdade = document.getElementById("MenorIdade")
const DigiteIdade = document.getElementById("DigiteIdade")

function verificarIdade(event) {
    event.preventDefault();
    // alert("Leandro");

    if (idade.value == "") {
        DigiteIdade.style.display = "block";
        MenorIdade.style.display = "none"
        return false

    } else {
        if (idade.value >= 18) {
            alert("Maior de idade")
        } else {
            MenorIdade.style.display = "block"
            DigiteIdade.style.display = "none";
        }
    }


}