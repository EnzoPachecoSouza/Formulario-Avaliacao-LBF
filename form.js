document.addEventListener("DOMContentLoaded", function () {
    atualizarSeletorBandas();
    resetForm();
});

function getAvaliador() {
    const avaliador = localStorage.getItem("nome");
    console.log(avaliador);
    return avaliador;

}

document.getElementById("avaliador").value = getAvaliador();
document.getElementById("nomeAvaliador").innerHTML = getAvaliador();

function atualizarFormulario() {

    const avaliador = getAvaliador();
    const aspectoDiv = document.getElementById("aspecto");
    const quesitosDiv = document.getElementById("quesitos");

    aspectoDiv.innerHTML = "";
    quesitosDiv.innerHTML = "";

    let aspecto = "";
    let quesitos = [];

    console.log("atualizou");

    if (avaliador === "Avaliador Teste 1" || avaliador === "Marcelo Bambam" || avaliador === "Jorge Scheffer") {
        aspecto = "Aspecto de Sopro";
        quesitos = ["Afinação", "Ritmo", "Dinâmica", "Articulação"];
    }
    else if (avaliador === "Avaliador Teste 2" || avaliador === "Marco Almeida" || avaliador === "Marcos Sadao") {
        aspecto = "Aspecto Interpretação";
        quesitos = ["Fraseado", "Expressão", "Regência", "Escolha de Repertório"];
    }
    else if (avaliador === "Avaliador Teste 3" || avaliador === "Hércules Alves" || avaliador === "Luis Caldana") {
        aspecto = "Aspecto Percussão";
        quesitos = ["Afinação", "Ritmo / Precisão Rítmica", "Dinâmica", "Técnica Instrumental"];
    }
    else if (avaliador === "Jandir Souto") {
        aspecto = "Aspecto Uniformidade e Instrumental";
        quesitos = ["Uniformidade", "Instrumental"];
    }
    else if (avaliador === "Daniel Borges") {
        aspecto = "Aspecto Check-In";
        quesitos = ["Check-in Correto", "Horário Feito", "A corporação seguiu a ordem de apresentação?", "Maestro(a)", "CPF"];
    }
    else if (avaliador === "Leandro Simplício") {
        aspecto = "Aspecto Cronômetro";
        quesitos = ["Tempo de Apresentação", "Estourou o Tempo?", "", "Maestro(a)", "CPF"];
    }
    else if (avaliador === "Maria Júlia Ribeiro") {
        aspecto = "Aspecto Faixa Etária";
        quesitos = ["Quantidade de Integrantes", "Possui membros acima da idade?", "", "Maestro(a)", "CPF"];
    }
    else if (avaliador === "Ewerton Ravelli") {
        aspecto = "Aspecto Check List";
        quesitos = [
            "A corporação apresentou faixa, estandarte ou distintivo conforme regulamento?",
            "O Instrumental está dentro do esperado na categoria?",
            "A Percussão esta menor que 50 %?",
            "A Banda Musical de Concerto possui os instrumentos mínimos obrigatórios?",
            "A Banda Sinfônica possui os instrumentos mínimos obrigatórios?",
            "O Regente está em traje social?"
        ];
    }
    else if (avaliador === "Dados de Apresentação") {
        aspecto = "Dados de Apresentação";
        quesitos = [
            "Nome do 1º Regente",
            "Nome do 2º Regente",
            "Peça de Aquecimento",
            "Peça de Confronto"
        ];
    }


    if (aspecto === "Aspecto de Sopro" || aspecto === "Aspecto Interpretação" || aspecto === "Aspecto Percussão") {
        aspectoDiv.innerHTML = `<h3>${aspecto}</h3>`;
        quesitos.forEach((q, index) => {
            quesitosDiv.innerHTML += `
                <label for="quesito${index + 1}">${q}:</label>
                <input type="number" id="quesito${index + 1}" name="quesito${index + 1}" min="0" max="10" placeholder="De 0,00 até 10,00" required><br>
            `;
        });
    } else if (aspecto === "Aspecto Uniformidade e Instrumental") {
        aspectoDiv.innerHTML = `<h3>${aspecto}</h3>`;
        quesitos.forEach((q, index) => {
            quesitosDiv.innerHTML += `
                <label for="quesito${index + 1}">${q}:</label>
                <input type="number" id="quesito${index + 1}" name="quesito${index + 1}" min="0" max="10" placeholder="De 0,00 até 10,00" required><br>
            `;
        });
    } else if (aspecto === "Aspecto Check-In") {
        aspectoDiv.innerHTML = `<h3>${aspecto}</h3>`;
        quesitos.forEach((q, index) => {
            if (index === 0) { // Para o primeiro quesito (Check-in Correto)
                quesitosDiv.innerHTML += `
                <label for="quesito${index + 1}">${q}:</label>
                <select id="quesito${index + 1}" name="quesito${index + 1}" required>
                    <option value="">Selecione</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select><br>
            `;
            } else if (index === 1) {// Para os outros quesitos
                let placeholderText = index === 1 ? "Exemplo: 11:40" : "";
                // quesitosDiv.innerHTML += `
                // <label for="quesito${index + 1}">${q}:</label>
                // <input type="text" id="quesito${index + 1}" name="quesito${index + 1}" placeholder="${placeholderText}" required><br>
                quesitosDiv.innerHTML += `
                <label for="quesito${index + 1}">${q}:</label>
                <input type="time" id="quesito${index + 1}" name="quesito${index + 1}" min="00:00" placeholder="${placeholderText}" required><br>
            `;
            } else if (index === 2) { // Para o primeiro quesito (Check-in Correto)
                quesitosDiv.innerHTML += `
                <label for="quesito${index + 1}">${q}</label>
                <select id="quesito${index + 1}" name="quesito${index + 1}" required>
                    <option value="">Selecione</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select><br>
            `;
            } else {
                quesitosDiv.innerHTML += `
                <label for="quesito${index + 1}">${q}:</label>
                <input type="text" id="quesito${index + 1}" name="quesito${index + 1}" required><br>
            `;
            }
        });
    }
    else if (aspecto === "Aspecto Cronômetro") {
        aspectoDiv.innerHTML = `<h3>${aspecto}</h3>`;

        // quesitosDiv.innerHTML = `
        //     <label for="quesito1">${quesitos[0]}:</label>
        //     <input type="text" id="quesito1" name="quesito1" placeholder="Exemplo: 05:30" required><br>

        quesitosDiv.innerHTML = `
            <label for="quesito1">${quesitos[0]}:</label>
            <input type="time" id="quesito1" name="quesito1" min="00:00" required><br>
            
            <label for="quesito2">${quesitos[1]}:</label>
            <select id="quesito2" name="quesito2" required onchange="verificarEstouro()">
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
            </select><br>
    
            <div id="campoEstouro" style="display: none;">
                <label for="quesito3">Quanto tempo estourou?</label>
                <input type="time" id="quesito3" name="quesito3" min="00:00" disabled><br>
            </div>

            <label for="quesito1">${quesitos[3]}:</label>
            <input type="text" id="quesito4" name="quesito4 "required><br>

            <label for="quesito1">${quesitos[4]}:</label>
            <input type="text" id="quesito5" name="quesito5" required><br>
        `;
    } else if (aspecto === "Aspecto Faixa Etária") {
        aspectoDiv.innerHTML = `<h3>${aspecto}</h3>`;

        quesitosDiv.innerHTML = `
            <label for="quesito1">${quesitos[0]}:</label>
            <input type="text" id="quesito1" name="quesito1" placeholder="Exemplo: 30" required><br>
    
            <label for="quesito2">${quesitos[1]}:</label>
            <select id="quesito2" name="quesito2" required onchange="verificarFaixaEtaria()">
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
            </select><br>
    
            <div id="campoQuantidade" style="display: none;">
                <label for="quesito3">Quantos membros acima da idade?</label>
                <input type="text" id="quesito3" name="quesito3" placeholder="Exemplo: 2"><br>
            </div>

            <label for="quesito1">${quesitos[3]}:</label>
            <input type="text" id="quesito4" name="quesito4 "required><br>

            <label for="quesito1">${quesitos[4]}:</label>
            <input type="text" id="quesito5" name="quesito5" required><br>
        `;
    } else if (aspecto === "Aspecto Check List") {
        //lógica do aspecto check list
        aspectoDiv.innerHTML = `<h3>${aspecto}</h3>`;
        quesitos.forEach((q, index) => {
            // Para o primeiro quesito (Check-in Correto)
            quesitosDiv.innerHTML += `
                <label class="label-checkList" for="quesito${index + 1}">${q}</label>
                <select id="quesito${index + 1}" name="quesito${index + 1}" required>
                    <option value="">Selecione</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select><br>
            `;
        })
    } else if (aspecto === "Dados de Apresentação") {
        //lógica do aspecto Dados de Apresentação
        aspectoDiv.innerHTML = `<h3>${aspecto}</h3>`;
        quesitos.forEach((q, index) => {
            if (index === 1) { // Para o segundo quesito (não obrigatório)
                quesitosDiv.innerHTML += `
                <label for="quesito${index + 1}">${q}:</label>
                <input type="text" id="quesito${index + 1}" name="quesito${index + 1}"><br>

            `;
            } else { // Para os outros quesitos
                quesitosDiv.innerHTML += `
                <label for="quesito${index + 1}">${q}:</label>
                <input type="text" id="quesito${index + 1}" name="quesito${index + 1}" required><br>
            `;
            }
        });
    }
}

function verificarFaixaEtaria() {
    const selectFaixaEtaria = document.getElementById("quesito2"); // Campo "Possui membros acima da idade?"
    const campoQuantidade = document.getElementById("campoQuantidade"); // Div para a pergunta extra

    if (selectFaixaEtaria.value === "Sim") {
        campoQuantidade.style.display = "block"; // Mostra o campo se "Sim" for selecionado
    } else {
        campoQuantidade.style.display = "none"; // Oculta o campo se "Não" for selecionado
        document.getElementById("quesito3").value = "0"; // Limpa o valor do input
    }
}


function verificarEstouro() {
    const select = document.getElementById("quesito2");
    const campoEstouro = document.getElementById("campoEstouro");
    const inputEstouro = document.getElementById("quesito3"); // Adicionei a captura do input

    if (select.value === "Sim") {
        campoEstouro.style.display = "block";
        inputEstouro.removeAttribute("disabled"); // 🔹 Agora pode digitar
        inputEstouro.value = ""; // 🔹 Limpa o campo ao exibir
    } else {
        campoEstouro.style.display = "none";
        inputEstouro.value = "00:00"; // 🔹 Define um valor padrão
        inputEstouro.setAttribute("disabled", "true"); // 🔹 Impede a edição novamente
    }
}


function abrirModalConfirmacao(event) {
    event.preventDefault(); // Evita o envio automático do formulário

    const avaliador = getAvaliador();
    const corporacao = document.getElementById("corporacao").value;
    const termosAceitos = document.getElementById("aceitarTermos").checked;

    if (!avaliador) {
        alert("⚠️ Selecione um avaliador antes de enviar.");
        return;
    }

    if (!corporacao) {
        alert("⚠️ Selecione a corporação antes de enviar.");
        return;
    }

    if (!termosAceitos) {
        alert("⚠️ Você deve aceitar os termos antes de enviar a avaliação.");
        return;
    }

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = ""; // Limpa o conteúdo anterior

    // Captura todos os inputs e selects dentro da div "quesitos"
    const inputs = document.querySelectorAll("#quesitos input, #quesitos select");

    inputs.forEach((input) => {
        let nomeQuesito = document.querySelector(`label[for="${input.id}"]`); // Pega o nome do quesito pelo label
        let valorCampo = input.value.trim();

        if (nomeQuesito) {
            let nome = nomeQuesito.innerText;
            let valor = valorCampo !== "" ? valorCampo : "Não informado";

            // Cria um elemento para exibir a avaliação no modal
            let item = document.createElement("p");
            item.innerHTML = `<strong>${nome}</strong>${valor}`;
            modalBody.appendChild(item);
        }
    });

    // Exibe o modal
    document.getElementById("modalConfirmacao").style.display = "flex";
}

function fecharModalConfirmacao() {
    document.getElementById("modalConfirmacao").style.display = "none";
}

function confirmarEnvio() {
    fecharModalConfirmacao(); // Fecha o modal
    enviarAvaliacao(); // Chama a função de envio real
}


function enviarAvaliacao() {
    let avaliador = getAvaliador();
    let corporacao = document.getElementById("corporacao").value;

    if (!avaliador) {
        alert("⚠️ Selecione um avaliador antes de enviar.");
        return;
    }

    if (!corporacao) {
        alert("⚠️ Selecione a corporação antes de enviar.");
        return;
    }

    let dados = { avaliador, corporacao };
    let camposInvalidos = false;

    // Captura todos os inputs e selects dentro da div "quesitos"
    const inputs = document.querySelectorAll("#quesitos input, #quesitos select");

    inputs.forEach((input) => {
        let nomeCampo = input.name; // Nome do quesito
        let valorCampo = input.value.trim();

        if (input.type === "number") {
            let valor = valorCampo === "" ? NaN : parseFloat(valorCampo);
            if (isNaN(valor) || valor < 0 || valor > 10) {
                alert(`⚠️ O valor do campo "${nomeCampo}" deve estar entre 0 e 10.`);
                camposInvalidos = true;
                return;
            }
            dados[nomeCampo] = valor; // Adiciona ao objeto de dados
        } else {
            if (valorCampo === "") {
                if (avaliador === "Dados de Apresentação" && nomeCampo === "quesito2") {
                    // Exceção para esse caso específico
                } else {
                    alert(`⚠️ O campo "${nomeCampo}" não pode estar vazio.`);
                    camposInvalidos = true;
                    return;
                }
            }
            dados[nomeCampo] = valorCampo; // Adiciona ao objeto de dados
        }
    });

    // Se houver campos inválidos, interrompe o envio
    if (camposInvalidos) return;

    console.log("✅ Dados enviados:", dados);

    document.getElementById("button-send").classList.add("disabled");

    // Armazena a banda avaliada no localStorage
    const bandasAvaliadas = JSON.parse(localStorage.getItem(`bandasAvaliadas_${avaliador}`)) || [];
    if (!bandasAvaliadas.includes(corporacao)) {
        bandasAvaliadas.push(corporacao);
        localStorage.setItem(`bandasAvaliadas_${avaliador}`, JSON.stringify(bandasAvaliadas));
    }

    fetch("https://script.google.com/macros/s/AKfycby3hFvunaCkrDZp3uHNlpnwb8hYQD56tiQzvDuvR3ZKxHiuQCIF89gY9KOIFwrNoAZ1wQ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    })
        .then(() => {
            alert("✅ Avaliação enviada com sucesso!");
            document.getElementById("icon-pdf").classList.remove("disabled");
            document.getElementById("button-send").classList.add("disabled");
            desabilitarCampos();
        })
        .catch(error => {
            console.error("❌ Erro ao enviar:", error);
            document.getElementById("button-send").classList.remove("disabled");
        });
}

function atualizarSeletorBandas() {
    const avaliador = getAvaliador();
    const seletor = document.getElementById("corporacao");

    // Limpa o seletor
    seletor.innerHTML = '<option value="">-- Escolha --</option>';

    // Obtém as bandas já avaliadas pelo avaliador
    const bandasAvaliadas = JSON.parse(localStorage.getItem(`bandasAvaliadas_${avaliador}`)) || [];

    // Filtra as bandas disponíveis
    const bandasNaoAvaliadas = bandasDisponiveis.filter(banda => !bandasAvaliadas.includes(banda));

    // Adiciona as bandas não avaliadas ao seletor
    bandasNaoAvaliadas.forEach(banda => {
        const option = document.createElement("option");
        option.value = banda;
        option.textContent = banda;
        seletor.appendChild(option);
    });
}

const bandasDisponiveis = [
    "01 - Banda",
    "02 - Banda",
    "03 - Banda",
    "04 - Banda",
    "05 - Banda"
];


function desabilitarCampos() {
    // Seleciona todos os inputs e selects
    let elementos = document.querySelectorAll("input, select");

    // Desativa cada um
    elementos.forEach(elemento => {
        elemento.disabled = true;
    });
}

function habibilitarCampos() {
    // Seleciona todos os inputs e selects
    let elementos = document.querySelectorAll("input, select");

    // Desativa cada um
    elementos.forEach(elemento => {
        elemento.disabled = false;
    });
}

// Função para gerar PDF
function printPDF() {
    if (document.getElementById("icon-pdf").classList.contains("disabled")) {
        alert("⚠️ Você precisa enviar a avaliação primeiro!");
        return;
    }

    window.print();

    // Habilita o botão de reset após gerar o PDF
    document.getElementById("icon-reset").classList.remove("disabled");

}

// Função para resetar o formulário
function resetForm() {
    document.getElementById("formulario").reset();
    document.getElementById("corporacao").selectedIndex = 0;
    console.log("Formulário resetado");

    // Desabilita os botões novamente
    document.getElementById("icon-pdf").classList.add("disabled");
    document.getElementById("icon-reset").classList.add("disabled");
    document.getElementById("button-send").classList.remove("disabled"); // Desabilita o button-send

    habibilitarCampos();
    atualizarSeletorBandas(); // Atualiza o seletor após o envio
}


