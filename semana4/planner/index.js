
function criarTarefa(){
    const input = document.querySelector("input")
    const itemDaLista = input.value
    const diaDaSemana = document.querySelector("select").value
    
    if (itemDaLista === ""){
        alert("Insira uma tarefa no campo.")
    } else {
        switch (diaDaSemana){
            case "seg": {
                const listaTarefas = document.getElementById("segundafeira")
                listaTarefas.innerHTML += "<li>" + itemDaLista + "</li>"
                break;
            }
            case "ter": {
                const listaTarefas = document.getElementById("tercafeira")
                listaTarefas.innerHTML += "<li>" + itemDaLista + "</li>"
                break;
            }
            case "qua": {
                const listaTarefas = document.getElementById("quartafeira")
                listaTarefas.innerHTML += "<li>" + itemDaLista + "</li>"
                break;
            }
            case "qui": {
                const listaTarefas = document.getElementById("quintafeira")
                listaTarefas.innerHTML += "<li>" + itemDaLista + "</li>"
                break;
            }
            case "sex": {
                const listaTarefas = document.getElementById("sextafeira")
                listaTarefas.innerHTML += "<li>" + itemDaLista + "</li>"
                break;
            }
            case "sab":{
                const listaTarefas = document.getElementById("sabado")
                listaTarefas.innerHTML += "<li>" + itemDaLista + "</li>"
                break;
            }
            case "dom":{
                const listaTarefas = document.getElementById("domingo")
                listaTarefas.innerHTML += "<li>" + itemDaLista + "</li>"
                break;
            }
            
        }
             
        
    }
    input.value = ""
    
} 









