const form = document.getElementById("newForm");
const emailCliente = document.querySelector("#emailCliente")



form.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.querySelector("#email").value.trim();

    // === para comparar o tipo de dado e valor 
    if (email === "") {
        alert("Digite o seu email");
        return false
    }

    //Validação simples: tem @ e .
    if (!email.includes("@") || !email.includes(".")) {
        alert("Email invalido. tente novamente.");
        return false

    }

    
    
    emailCliente.textContent = email
    emailCliente.style.display = "block";
    // alert("Email cadastro com susseso! ✅");

    // Limpa o campo
    form.reset();

});

