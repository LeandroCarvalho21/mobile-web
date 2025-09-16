const form = document.getElementById("newForm");


form.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.querySelector("#email").value.trim();

    // === para comparar o tipo de dado e valor 
    if (email === "") {
        alert("Digite o seu email");
        return false
    } else {
        console.log(email);
        alert(email);
    }

    // Limpa o campo
    form.reset();

});

