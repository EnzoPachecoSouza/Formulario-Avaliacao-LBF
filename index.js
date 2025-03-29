function verificarLogin(event) {
    event.preventDefault();

    const usuarios = [
        { nome: "Avaliador 1", email: "avaliador1@applbf.org", senha: "1234@" },
        { nome: "Avaliador 2", email: "avaliador2@applbf.org", senha: "1234@" },
        { nome: "Avaliador 3", email: "avaliador3@applbf.org", senha: "1234@" },
        { nome: "Avaliador 4", email: "avaliador4@applbf.org", senha: "1234@" },
        { nome: "Avaliador 5", email: "avaliador5@applbf.org", senha: "1234@" },
        { nome: "Avaliador 6", email: "avaliador6@applbf.org", senha: "1234@" },
        { nome: "Avaliador Uniformidade/Instrumental", email: "avaliadoruniformidadeinstrumental@applbf.org", senha: "1234" },
        { nome: "Avaliador Check-In", email: "avaliadorcheckin@applbf.org", senha: "1234" },
        { nome: "Avaliador Cronômetro", email: "avaliadorcronometro@applbf.org", senha: "1234" },
        { nome: "Avaliador Check List", email: "avaliadorchecklist@applbf.org", senha: "1234" },
        { nome: "Dados de Apresentação", email: "dados@applbf.org", senha: "1234" },
        { nome: "Avaliador Faixa Etária", email: "avaliadorfaixaetaria@applbf.org", senha: "1234" }
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
