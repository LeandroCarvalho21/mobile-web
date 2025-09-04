//variavel 
const num1 = document.getElementById("numero1");
const num2 = document.getElementById("numero2");
const resultado = document.getElementById("resultado");


//função
function somar(event) {
    event.preventDefault();

    //exibe no console os números digitados
    console.log(num1.value);
    console.log(num2.value);


    resultado.innerHTML = Number(num1.value) + Number(num2.value);
    num1.value = ""
    num2.value = ""
    // document.innerHTML.resultado = num1 + num2;
}

function sub(event) {
    event.preventDefault();
    resultado.innerHTML = Number(num1.value) - Number(num2.value);
    num1.value = ""
    num2.value = ""
}


function mult(event) {
    event.preventDefault();
    resultado.innerHTML = Number(num1.value) * Number(num2.value);
    num1.value = ""
    num2.value = ""
}

function div(event) {
    event.preventDefault();
    resultado.innerHTML = Number(num1.value) / Number(num1.value);
    num1.value = ""
    num2.value = ""
    
}