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
                <input type="text" id="quesito3" name="quesito3" placeholder="Exemplo: 00:30" disabled><br>
            </div>
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

// function enviarAvaliacao(event) {
//     event.preventDefault(); // Evita o envio automático do formulário

//     const avaliador = document.getElementById("avaliador").value;
//     const corporacao = document.getElementById("corporacao").value;
//     const termosAceitos = document.getElementById("aceitarTermos").checked;

//     // const aspectoTexto = document.getElementById("aspecto").innerText || "Aspecto não informado";

//     if (!avaliador) {
//         alert("⚠️ Selecione um avaliador antes de enviar.");
//         return;
//     }

//     if (!corporacao) {
//         alert("⚠️ Selecione a corporação antes de enviar.");
//         return;
//     }

//     if (!termosAceitos) {
//         alert("⚠️ Você deve aceitar os termos antes de enviar a avaliação.");
//         return;
//     }

//      // **Mensagem personalizada**
//      let dadosWpp = `*Declaração de Avaliação LBF*\n\n`;
//      dadosWpp += `Eu, *${avaliador}*, responsável por avaliar o *${aspecto}*, 
//      estou de acordo com o termo de veracidade proposta pela Liga Brasileira de Bandas e Fanfarras, 
//      referente ao Campeonato Brasileiro na cidade de Amparo/SP no dia 06/04/2025.\n`;
//      dadosWpp += `*Com isso, minha avaliação para:* ${corporacao} é:\n\n`;
//      dadosWpp += `*Notas:* \n`;

//     let dados = { avaliador, corporacao };
//     let camposInvalidos = false;

//     // Captura todos os inputs e selects dentro da div "quesitos"
//     const inputs = document.querySelectorAll("#quesitos input, #quesitos select");

//     inputs.forEach((input, index) => {
//         console.log(`Campo ${input.name}:`, input.value); // Debug para ver os valores

//         if (input.type === "number") {
//             let valor = input.value.trim() === "" ? NaN : parseFloat(input.value); // Garante que valor em branco vire NaN

//             if (isNaN(valor) || valor < 0 || valor > 10) {
//                 alert(`⚠️ O valor do campo "${input.name}" deve estar entre 0 e 10.`);
//                 camposInvalidos = true;
//                 return;
//             }
//             dados[`quesito${index + 1}`] = valor.toFixed(2);
//         } else {
//             if (input.value.trim() === "") {
//                 alert(`⚠️ O campo "${input.name}" não pode estar vazio.`);
//                 camposInvalidos = true;
//                 return;
//             }
//             dados[`quesito${index + 1}`] = input.value.trim();
//         }
//     });

//     if (camposInvalidos) {
//         return; // Se houver erro, interrompe o envio
//     }

//     // **Declaração final**
//      dadosWpp += `\n\nDeclaro minha total consciência diante da responsabilidade de avaliar a corporação!`;

//     // **Número de WhatsApp que receberá a mensagem**
//      const numeroWhatsApp = "5512978985954"; // 🔴 SUBSTITUA PELO NÚMERO DESEJADO

//      const mensagemWhatsApp = Object.entries(dadosWpp)
//          .map(([chave, valor]) => `🔹 ${chave}: ${valor}`)
//      .join("%0A");

//      const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`;


//     console.log("✅ Dados enviados:", dados);

//     fetch("https://script.google.com/macros/s/AKfycbxmJvDRxpuhhFk67owrZ2tBUlPBo9j4U9zSwnJ2_b0frSUOfNXEHomuLIAdD24XKUFy1w/exec", {
//         method: "POST",
//         mode: "no-cors",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(dados)
//     })
//         .then(() => {
//             alert("✅ Avaliação enviada com sucesso!");
//             window.print();
//              window.open(linkWhatsApp, "_blank");
//             document.getElementById("formulario").reset();
//             window.location.href = "comeback.html";

//             // Resetando selects e limpando a tela
//             document.getElementById("corporacao").selectedIndex = 0;



//         })
//         .catch(error => console.error("❌ Erro ao enviar:", error));
// }

function enviarAvaliacao(event) {
    event.preventDefault(); // Evita o envio automático do formulário

    const avaliador = document.getElementById("avaliador").value;
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

    let aspecto = document.getElementById("aspecto").innerText || "Aspecto não informado";
    
    let mensagemWpp = `*Declaração de Avaliação LBF*\n\n`;
    mensagemWpp += `Eu, *${avaliador}*, responsável por avaliar o *${aspecto}*, declaro estar de acordo com o termo de veracidade da Liga Brasileira de Bandas e Fanfarras.\n`;
    mensagemWpp += `Referente ao Campeonato Brasileiro em Amparo/SP no dia 06/04/2025.\n\n`;
    mensagemWpp += `*Corporação Avaliada:* ${corporacao}\n\n`;
    mensagemWpp += ` *Avaliação:* \n\n`;

    let camposInvalidos = false;
    let notas = [];

    // Captura todos os inputs e selects dentro da div "quesitos"
    const inputs = document.querySelectorAll("#quesitos input, #quesitos select");

    inputs.forEach((input) => {
        if (input.type === "number") {
            let valor = input.value.trim() === "" ? NaN : parseFloat(input.value);
            if (isNaN(valor) || valor < 0 || valor > 10) {
                alert(`⚠️ O valor do campo "${input.name}" deve estar entre 0 e 10.`);
                camposInvalidos = true;
                return;
            }
            notas.push(`*${input.previousElementSibling.innerText}* : ${valor.toFixed(2)}`);
        } else {
            if (input.value.trim() === "") {
                alert(`⚠️ O campo "${input.name}" não pode estar vazio.`);
                camposInvalidos = true;
                return;
            }
            notas.push(`*${input.previousElementSibling.innerText}* : ${input.value.trim()}`);
        }
    });

    if (camposInvalidos) return;

    mensagemWpp += notas.join("\n");
    mensagemWpp += `\n\nDeclaro minha total consciência diante da responsabilidade de avaliar a corporação.`;

    // **Número do WhatsApp que receberá a mensagem**
    const numeroWhatsApp = "5512978985954"; // 🔴 SUBSTITUA PELO NÚMERO DESEJADO

    // **Criando o link com encode para evitar erros**
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWpp)}`;

    console.log("✅ Dados enviados:", mensagemWpp);

    alert("✅ Avaliação enviada com sucesso!");
    window.print();
    window.open(linkWhatsApp, "_blank");
    document.getElementById("formulario").reset();
    window.location.href = "comeback.html";
}

