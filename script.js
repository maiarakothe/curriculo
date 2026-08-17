const formulario = document.getElementById("form-contato");
const mensagemSucesso = document.getElementById("mensagem-sucesso");

window.addEventListener("load", function () {
    alert("Olá! Seja bem-vindo(a) ao meu portfólio! Fique à vontade para explorar e conhecer mais sobre mim e meu trabalho.");
});

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;

    mensagemSucesso.innerText =
        `Obrigada pela mensagem, ${nome}! Em breve entrarei em contato.`;

    formulario.reset();
});
