function entrar() {

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    if(usuario === usuarioCorreto && senha === senhaCorreta){

        window.location.href = "home.html";

    } else {

        document.getElementById("mensagem").innerText = "Usuário ou senha inválidos";

    }

}