function atualizarCards(lista) {

    document.getElementById("total-documentos").textContent = lista.length;

    const fornecedores = new Set();

    let valorTotal = 0;
    let valorDia = 0;

    lista.forEach(item => {

        if (item.fornecedor) {

            fornecedores.add(item.fornecedor);

        }

        valorTotal += Number(item.valor || 0);

        valorDia += Number(item.valor_dia || 0);

    });

    document.getElementById("total-fornecedores").textContent = fornecedores.size;

    document.getElementById("valor-total").textContent =
        formatarMoeda(valorTotal);

    document.getElementById("valor-dia").textContent =
        formatarMoeda(valorDia);

}