document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario() {
    if (document.getElementById("username").value != "" &&
        document.getElementById("useremail").value != "") {
        alert("Prontinho! você receberá as novidades por email.")
    } else {
        alert("Por favor, preencha os campos nome e email.")
    }
}