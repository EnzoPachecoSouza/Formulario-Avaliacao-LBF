function verificarLogin(event) {
    event.preventDefault();

    const usuarios = [
        { nome: "Avaliador Teste 1", email: "teste1@applbf.org", senha: "teste1234@" },//teste
        { nome: "Avaliador Teste 2", email: "teste2@applbf.org", senha: "teste1234@" },//teste
        { nome: "Avaliador Teste 3", email: "teste3@applbf.org", senha: "teste1234@" },//teste
        { nome: "Marcelo Bambam", email: "marcelobambam@applbf.org", senha: "Mb1234@" },//sopro
        { nome: "Jorge Scheffer", email: "jorgescheffer@applbf.org", senha: "Js1324@" },//sopro
        { nome: "Marco Almeida", email: "marcoalmeida@applbf.org", senha: "Ma1423@" },//interpretacao
        { nome: "Marcos Sadao", email: "marcossadao@applbf.org", senha: "Ms1243@" },//interpretacao
        { nome: "Hércules Alves", email: "herculesalves@applbf.org", senha: "Ha3214@" },//percussao
        { nome: "Luis Caldana", email: "luiscaldana@applbf.org", senha: "Lc4231@" },//percussao
        { nome: "Jandir Souto", email: "jandirsouto@applbf.org", senha: "Js2453#" }, //uniformidade e instrumental
        { nome: "Daniel Borges", email: "danielborges@applbf.org", senha: "Db8657#" }, //checkin
        { nome: "Leandro Simplício", email: "leandrosimplicio@applbf.org", senha: "Ls5768#" },//cronometro
        { nome: "Ewerton Ravelli", email: "ewertonravelli@applbf.org", senha: "Er5678#" }, //checklist
        { nome: "Maria Júlia Ribeiro", email: "majuribeiro@applbf.org", senha: "Mjr9087#" }, //faixa etária
        { nome: "Dados de Apresentação", email: "dados@applbf.org", senha: "1234*" } //dados de apresentação 
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
