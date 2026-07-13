document.addEventListener("DOMContentLoaded", async () => {

    conectarSupabase();

    iniciarRealtime();

    configurarPesquisa();

    const autenticado = await verificarSessao();

    if (autenticado) {

        await carregarDespesas();

    }

});

async function carregarDespesas() {

    const lista = await listarDespesas();

    definirDespesas(lista);

    preencherTabela(lista);

    atualizarCards(lista);

}