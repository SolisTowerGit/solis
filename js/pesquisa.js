let despesas = [];

function definirDespesas(lista) {

    despesas = [...lista];

}

function configurarPesquisa() {

    const campo = document.getElementById("pesquisa");

    if (!campo) {

        return;

    }

    campo.addEventListener("input", pesquisarDespesas);

}

function pesquisarDespesas() {

    const campo = document.getElementById("pesquisa");

    const texto = campo.value.trim().toLowerCase();

    const resultado = despesas.filter(item => {

        return Object.values(item).some(valor =>

            String(valor ?? "")
                .toLowerCase()
                .includes(texto)

        );

    });

    preencherTabela(resultado);

    atualizarCards(resultado);

}