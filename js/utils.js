function formatarMoeda(valor) {

    return Number(valor || 0).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}

function formatarData(data) {

    if (!data) {

        return "";

    }

    return new Date(data).toLocaleDateString("pt-BR");

}

function formatarNumero(numero, casasDecimais = 2) {

    return Number(numero || 0).toLocaleString("pt-BR", {
        minimumFractionDigits: casasDecimais,
        maximumFractionDigits: casasDecimais
    });

}

function valorSeguro(valor, valorPadrao = "") {

    return valor ?? valorPadrao;

}