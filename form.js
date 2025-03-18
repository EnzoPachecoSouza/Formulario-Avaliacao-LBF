document.getElementById("aspecto").addEventListener("change", function () {
    const selectedAspect = this.value;
    const inputsContainer = document.getElementById("inputs-avaliacao");
    inputsContainer.innerHTML = "";

    let campos = [];
    
    if (selectedAspect === "sopro") {
        campos = ["Afinação", "Ritmo/Precisão Rítmica", "Dinâmica", "Articulação"];
    } else if (selectedAspect === "interpretacao") {
        campos = ["Fraseado", "Expressão", "Regência", "Escolha do Repertório"];
    } else if (selectedAspect === "percussao") {
        campos = ["Afinação", "Ritmo/Precisão", "Dinâmica", "Técnica Instrumental"];
    }

    campos.forEach(campo => {
        const label = document.createElement("label");
        label.textContent = campo;
        
        const input = document.createElement("input");
        input.type = "number";
        input.step = "0.01";
        input.min = "0";
        input.max = "10";
        input.required = true;
        
        inputsContainer.appendChild(label);
        inputsContainer.appendChild(input);
    });
});
