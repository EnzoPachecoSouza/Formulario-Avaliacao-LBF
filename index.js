function verificarLogin(event) {
    event.preventDefault();

    const usuarios = {
        "enzo.avaliador@gmail.com": "Enzo1234",
        "joao.avaliador@hotmail.com": "Joao4321",
        "bruno.avaliador@gmail.com": "Bruno0020"
    };

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    if (usuarios[email] && usuarios[email] === senha) {
        window.location.href = 'form.html';
    } else {
        alert("E-mail ou senha incorretos!");
    }
}