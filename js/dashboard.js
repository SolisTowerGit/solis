document.addEventListener("DOMContentLoaded", async () => {

    conectarSupabase();

    iniciarRealtime();

    configurarPesquisa();

    await carregarDespesas();

});

async function carregarDespesas() {

    const lista = await listarDespesas();

    definirDespesas(lista);

    preencherTabela(lista);

    atualizarCards(lista);

}