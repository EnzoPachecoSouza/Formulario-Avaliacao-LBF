function verificarLogin(event) {
    event.preventDefault();

    const usuarios = [
        { nome: "Jurado Palanque 1", email: "juradopalanque1@applbf.org", senha: "1234" },
        { nome: "Jurado Palanque 2", email: "juradopalanque2@applbf.org", senha: "1234" },
        { nome: "Jurado Palanque 3", email: "juradopalanque3@applbf.org", senha: "1234" },
        { nome: "Jurado Palanque 4", email: "juradopalanque4@applbf.org", senha: "1234" },
        { nome: "Jurado Palanque 5", email: "juradopalanque5@applbf.org", senha: "1234" },
        { nome: "Jurado Palanque 6", email: "juradopalanque6@applbf.org", senha: "1234" },
        { nome: "Jurado Uniformidade/Instrumental", email: "juradouniformidadeinstrumental@applbf.org", senha: "1234" },
        { nome: "Jurado Check-In", email: "juradocheckin@applbf.org", senha: "1234" },
        { nome: "Jurado Cronômetro", email: "juradocronometro@applbf.org", senha: "1234" },
        { nome: "Jurado Check List", email: "juradochecklist@applbf.org", senha: "1234" },
        { nome: "Dados de Apresentação", email: "dados@applbf.org", senha: "1234" },
        { nome: "Jurado Faixa Etária", email: "juradofaixaetaria@applbf.org", senha: "1234" }
    ];

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    // Verifica se o usuário existe no array
    const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

    if (usuarioEncontrado) {
        // Salvar dados do usuário no localStorage para usar na próxima página
        localStorage.setItem("nome", usuarioEncontrado.nome);

        // Redirecionar para a página do formulário
        window.location.href = 'form.html';
    } else {
        alert("E-mail ou senha incorretos!");
    }
}
