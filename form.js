function atualizarFormulario() {
    const avaliador = document.getElementById("avaliador").value;
    const aspectoDiv = document.getElementById("aspecto");
    const quesitosDiv = document.getElementById("quesitos");
    aspectoDiv.innerHTML = "";
    quesitosDiv.innerHTML = "";

    let aspecto = "";
    let quesitos = [];

    if (avaliador === "Jurado Palanque 1" || avaliador === "Jurado Palanque 2") {
        aspecto = "Aspecto de Sopro";
        quesitos = ["Afinação", "Ritmo", "Dinâmica", "Articulação"];
    } 
    else if (avaliador === "Jurado Palanque 3" || avaliador === "Jurado Palanque 4") {
        aspecto = "Aspecto Interpretação";
        quesitos = ["Fraseado", "Expressão", "Regência", "Escolha de Repertório"];
    } 
    else if (avaliador === "Jurado Palanque 5" || avaliador === "Jurado Palanque 6") {
        aspecto = "Aspecto Percussão";
        quesitos = ["Afinação", "Ritmo", "Dinâmica", "Técnica Instrumental"];
    } 
    else if (avaliador === "Jurado Uniformidade/Instrumental") {
        aspecto = "Aspecto Uniformidade e Instrumental";
        quesitos = ["Uniformidade", "Instrumental"];
    } 
    else if (avaliador === "Jurado Check-In") {
        aspecto = "Aspecto Check-In";
        quesitos = ["Check-in Correto", "Horário Feito"];
    }  
    else if (avaliador === "Jurado Cronômetro") {
        aspecto = "Aspecto Cronômetro";
        quesitos = ["Tempo de Apresentação", "Estourou o Tempo?"];
    } 
    else if (avaliador === "Jurado Faixa Etária") {
        aspecto = "Aspecto Faixa Etária";
        quesitos = ["Quantidade de Integrantes", "Possui membros acima da idade?"];
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
            let placeholderText = index === 0 ? "Sim / Não" : index === 1 ? "Exemplo: 11:40" : "Check-in";

            quesitosDiv.innerHTML += `
                <label for="quesito${index + 1}">${q}:</label>
                <input type="text" id="quesito${index + 1}" name="quesito${index + 1}" placeholder="${placeholderText}" required><br>
            `;
        });
    } else if (aspecto === "Aspecto Cronômetro") {
        aspectoDiv.innerHTML = `<h3>${aspecto}</h3>`;

        quesitosDiv.innerHTML = `
            <label for="quesito1">${quesitos[0]}:</label>
            <input type="text" id="quesito1" name="quesito1" placeholder="Exemplo: 05:30" required><br>
            
            <label for="quesito2">${quesitos[1]}:</label>
            <select id="quesito2" name="quesito2" required onchange="verificarEstouro()">
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
            </select><br>

            <div id="campoEstouro" style="display: none;">
                <label for="quesito3">Quanto tempo estourou?</label>
                <input type="text" id="quesito3" name="quesito3" placeholder="Exemplo: 00:30"><br>
            </div>
        `;
    } else if (aspecto === "Aspecto Faixa Etária") {
        aspectoDiv.innerHTML = `<h3>${aspecto}</h3>`;

        quesitosDiv.innerHTML = `
            <label for="quesito1">${quesitos[0]}:</label>
            <input type="number" id="quesito1" name="quesito1" min="0" placeholder="Exemplo: 30" required><br>
    
            <label for="quesito2">${quesitos[1]}:</label>
            <select id="quesito2" name="quesito2" required onchange="verificarFaixaEtaria()">
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
            </select><br>
    
            <div id="campoQuantidade" style="display: none;">
                <label for="quesito3">Quantos membros acima da idade?</label>
                <input type="number" id="quesito3" name="quesito3" min="0" placeholder="Exemplo: 2"><br>
            </div>
        `;
    }


}

function verificarFaixaEtaria() {
    const selectFaixaEtaria = document.getElementById("quesito2"); // Campo "Possui membros acima da idade?"
    const campoQuantidade = document.getElementById("campoQuantidade"); // Div para a pergunta extra

    if (selectFaixaEtaria.value === "Sim") {
        campoQuantidade.style.display = "block"; // Mostra o campo se "Sim" for selecionado
    } else {
        campoQuantidade.style.display = "none"; // Oculta o campo se "Não" for selecionado
        document.getElementById("quesito3").value = ""; // Limpa o valor do input
    }
}


function verificarEstouro() {
    const select = document.getElementById("quesito2");
    const campoEstouro = document.getElementById("campoEstouro");

    if (select.value === "Sim") {
        campoEstouro.style.display = "block";
    } else {
        campoEstouro.style.display = "none";
        document.getElementById("quesito3").value = ""; // Reseta o valor do campo ao ocultá-lo
    }
}

function enviarAvaliacao(event) {
    event.preventDefault(); // Evita o envio automático do formulário

    const avaliador = document.getElementById("avaliador").value;
    const corporacao = document.getElementById("corporacao").value;

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
    
    inputs.forEach((input, index) => {
        console.log(`Campo ${input.name}:`, input.value); // Debug para ver os valores

        if (input.type === "number") {
            let valor = input.value.trim() === "" ? NaN : parseFloat(input.value); // Garante que valor em branco vire NaN
            
            if (isNaN(valor) || valor < 0 || valor > 10) {
                alert(`⚠️ O valor do campo "${input.name}" deve estar entre 0 e 10.`);
                camposInvalidos = true;
                return;
            }
            dados[`quesito${index + 1}`] = valor.toFixed(2);
        } else {
            if (input.value.trim() === "") {
                alert(`⚠️ O campo "${input.name}" não pode estar vazio.`);
                camposInvalidos = true;
                return;
            }
            dados[`quesito${index + 1}`] = input.value.trim();
        }
    });

    if (camposInvalidos) {
        return; // Se houver erro, interrompe o envio
    }

    console.log("✅ Dados enviados:", dados);

    fetch("https://script.google.com/macros/s/AKfycbyjoWcm05tCmacmoyesdG8mVxUKzBH8m1odfoPTUOHp6pC33uMGGUoU8SebfwTh9W47xQ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    })
        .then(() => {
            alert("✅ Avaliação enviada com sucesso!");
            document.getElementById("formulario").reset();
            
            // Resetando selects e limpando a tela
            document.getElementById("corporacao").selectedIndex = 0;

        })
        .catch(error => console.error("❌ Erro ao enviar:", error));
}



// function enviarAvaliacao() {
//     const avaliador = document.getElementById("avaliador").value;
//     const corporacao = document.getElementById("corporacao").value;

//     if (!avaliador) {
//         alert("Selecione um avaliador antes de enviar.");
//         return;
//     }

//     if (!corporacao) {
//         alert("Selecione a corporação antes de enviar.");
//         return;
//     }

//     let dados = { avaliador, corporacao };

//     // Captura os valores na ordem correta
//     for (let i = 1; i <= 4; i++) {
//         let input = document.getElementById(`quesito${i}`);
//         dados[`quesito${i}`] = input ? input.value || "0" : "0";
//     }

//     console.log("Enviando os seguintes dados:", dados); // Para ver no console antes de enviar

//     fetch("https://script.google.com/macros/s/AKfycbyjoWcm05tCmacmoyesdG8mVxUKzBH8m1odfoPTUOHp6pC33uMGGUoU8SebfwTh9W47xQ/exec", {
//         method: "POST",
//         mode: "no-cors",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(dados)
//     })
//         .then(() => {
//             alert("Avaliação enviada com sucesso!");
//             document.getElementById("formulario").reset();

//             // Retornando os selects para a opção padrão
//             document.getElementById("corporacao").selectedIndex = 0;
//         })
//         .catch(error => console.error("Erro ao enviar:", error));
// }
