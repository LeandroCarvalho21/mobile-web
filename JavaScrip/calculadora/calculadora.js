//variavel 
const num1 = document.getElementById("numero1");
const num2 = document.getElementById("numero2");
const resultado = document.getElementById("resultado");

//função
function somar(event) {
    event.preventDefault();

   

    if (num1.value == "" && num2.value == "") {
        resultado.innerHTML = "Digite um número"
        return false;
    } else {
        //exibe no console os números digitados
        console.log(num1.value);
        console.log(num2.value);
        resultado.innerHTML = Number(num1.value) + Number(num2.value);
        num1.value = ""
        num2.value = ""
    }
}

function sub(event) {
    event.preventDefault();
    if (num1.value == "" && num2.value == "") {
        resultado.innerHTML = "Digite um número"
        return false;
    } else {
        resultado.innerHTML = Number(num1.value) - Number(num2.value);
        num1.value = ""
        num2.value = ""
    }
}

function mult(event) {
    event.preventDefault();
    if (num1.value == "" && num2.value == "") {
        resultado.innerHTML = "Digite um número"
        return false;
    } else {
        resultado.innerHTML = Number(num1.value) * Number(num2.value);
        num1.value = ""
        num2.value = ""
    }
}

function div(event) {
    event.preventDefault();
    if (num1.value == "" && num2.value == "") {
        resultado.innerHTML = "Digite um número"
        return false;
    } else {
        resultado.innerHTML = Number(num1.value) / Number(num1.value);
        num1.value = ""
        num2.value = ""
    }
}

