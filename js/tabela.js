function preencherTabela(lista) {

    const tbody = document.getElementById("tbody-despesas");

    if (!tbody) {

        return;

    }

    tbody.innerHTML = "";

    lista.forEach(item => {

        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${valorSeguro(item.documento)}</td>
            <td>${formatarData(item.vencimento)}</td>
            <td>${formatarData(item.quitacao)}</td>
            <td>${valorSeguro(item.nivel_1)}</td>
            <td>${valorSeguro(item.nivel_2)}</td>
            <td>${valorSeguro(item.nivel_3)}</td>
            <td>${valorSeguro(item.nivel_4)}</td>
            <td>${valorSeguro(item.nivel_5)}</td>
            <td>${valorSeguro(item.nivel_6)}</td>
            <td>${formatarMoeda(item.valor_dia)}</td>
            <td>${valorSeguro(item.fornecedor)}</td>
            <td>${formatarMoeda(item.valor)}</td>
        `;

        tbody.appendChild(linha);

    });

}