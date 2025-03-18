document.addEventListener("DOMContentLoaded", function () {
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
            input.classList.add("nota");

            inputsContainer.appendChild(label);
            inputsContainer.appendChild(input);
        });
    });

    document.getElementById("avaliacao-form").addEventListener("submit", async function (event) {
        event.preventDefault();

        const avaliador = document.getElementById("avaliador").value;
        const corporacao = document.getElementById("corporacao").value;
        const aspecto = document.getElementById("aspecto").value;
        const inputs = document.querySelectorAll("#inputs-avaliacao input.nota");

        let notas = [];
        inputs.forEach(input => notas.push(input.value));

        if (!avaliador || !corporacao || !aspecto || notas.includes("")) {
            alert("Preencha todos os campos corretamente.");
            return;
        }

        const scriptURL = "https://script.google.com/macros/s/AKfycbyLV0_7Um-ZdiZWGj2JpP-H-a5NqwKdx4PTiUElf_sBFYII9t9YbvDdVG3jTEd01Vf0yw/exec";

        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    avaliador: avaliador,
                    corporacao: corporacao,
                    aspecto: aspecto,
                    notas: notas
                })
            });

            if (!response.ok) throw new Error("Erro ao enviar os dados");

            const data = await response.json();

            if (data.status === "success") {
                alert("Avaliação enviada com sucesso!");
                document.getElementById("avaliacao-form").reset();
                document.getElementById("inputs-avaliacao").innerHTML = "";
            } else {
                alert("Erro ao enviar avaliação: " + data.message);
            }

        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao conectar com o servidor.");
        }
    });
});
