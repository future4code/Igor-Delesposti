let arrayDeDespesa = []

class despesa{
    constructor (valorCadastrado, tipoDespesa, descricao){
        this.valorCadastrado = valorCadastrado
        this.tipoDespesa = tipoDespesa
        this.descricao = descricao
    }
}


function adicionaDespesa(){
    const valorCadastrado = document.getElementById("valorCadastrado")
    const tipoDespesa = document.getElementById("tipoDespesa")
    const descricao = document.getElementById("descricao")
   
   
    
    if (valorCadastrado.value === "" || tipoDespesa.value === "" || descricao.value === ""){
        alert("Insira um valor.")
    }else{
        const novaDespesa = new despesa (valorCadastrado.value, tipoDespesa.value, descricao.value)
        arrayDeDespesa.push(novaDespesa)
    }

    valorCadastrado.value = ""
    tipoDespesa.value = ""
    descricao.value = ""
}

    console.log(arrayDeDespesa)

function filtrarDespesas(){
    if (valorMinimo.value === "" || valorMaximo.value === ""){
        alert("Preencha os campos!")
    }else{
        
    }
}

function apagarFiltro() {
    let valorMinimo = document.getElementById("valorMinimo")
    let valorMaximo = document.getElementById("valorMaximo")

    valorMinimo.value = ""
    valorMaximo.value = ""
}
    
  


