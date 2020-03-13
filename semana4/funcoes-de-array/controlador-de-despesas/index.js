class Despesa {
    constructor(valor, tipo, descricao) {
        this.valor = valor;
        this.tipo = tipo;
        this.descricao = descricao;
    }
}
let arrayDeDespesa = [];
let somaDasDespesas;
function addDespesa(){
    let campoValor = document.getElementById("valorDespesa");
    let campoTipo = document.getElementById("tipoDespesa");
    let campoDescricao = document.getElementById("descricaoDespesa");
    if(campoValor.value === "" || campoTipo.value === "" || campoDescricao.value === ""){
        alert("Preencha os 3 campos!");
    } else {
        const novaDespesa = new Despesa(campoValor.value, campoTipo.value, campoDescricao.value);
        arrayDeDespesa.push(novaDespesa);
        campoValor.value = "";
        campoTipo.value = "";
        campoDescricao.value = "";
        console.log(arrayDeDespesa);
        somaDespesas();
        mostrarExtrato();
    }
}
function filtrarDespesas() {
    const valorMinimoDespesa = document.getElementById("valorMinimoDespesa");
    const valorMaximoDespesa = document.getElementById("valorMaximoDespesa");
    const tipoDespesaFiltrada = document.getElementById("tipoDespesaFiltrada");
    const divDosValores = document.getElementById("listaFiltrada");
    const listaFiltrada = arrayDeDespesa.filter((elemento, index, array) => {
        return elemento.tipo === tipoDespesaFiltrada.value &&
        elemento.valor >= Number(valorMinimoDespesa.value) &&
        elemento.valor <= Number(valorMaximoDespesa.value);
    })
    listaFiltrada.forEach((elemento, index, array) => {
        divDosValores.innerHTML += elemento.valor;
        divDosValores.innerHTML += elemento.tipo;
        divDosValores.innerHTML += elemento.descricao;
    })
    console.log(listaFiltrada);
}
function limparFiltros() {
    let valorMinimoDespesa = document.getElementById("valorMinimoDespesa");
    let valorMaximoDespesa = document.getElementById("valorMaximoDespesa");
    valorMinimoDespesa.value = "";
    valorMaximoDespesa.value = "";
}
// function somaDespesas() {
//     const extrato = document.getElementById("conteudoExtrato");
//     somaDasDespesas = 0;
//     arrayDeDespesa.forEach((elemento, index, array) => {
//         somaDasDespesas += Number(elemento.valor);
//         let valorMinimoDespesa = document.getElementById("valorMinimoDespesa");
//         let valorMaximoDespesa = document.getElementById("valorMaximoDespesa");
//         valorMinimoDespesa.value = "";
//         valorMaximoDespesa.value = "";
//     }
    function somaDespesas() {
        const extrato = document.getElementById("conteudoExtrato");
        somaDasDespesas = 0;
        arrayDeDespesa.forEach((elemento, index, array) => {
            somaDasDespesas += Number(elemento.valor);
        })
        extrato.innerHTML = somaDasDespesas + " reais.";
    }
function mostrarExtrato() {
    const areaExtrato = document.getElementById("mostrarExtrato");
    areaExtrato.innerHTML = "";
    arrayDeDespesa.forEach((elemento, index, array) => {
        areaExtrato.innerHTML += "<li>" + elemento.valor + "</li>";
        areaExtrato.innerHTML += "<li>" + elemento.tipo + "</li>";
        areaExtrato.innerHTML += "<li>" + elemento.descricao + "</li>";
    })
}