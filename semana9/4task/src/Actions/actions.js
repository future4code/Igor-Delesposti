export  function addTodo (text, id){
    return{
        type: 'ADD_TODO',
        payload: {
            text: text,
            id: new Date().getTime(),
            completo: false,
            
        },
    }
}

export  function deleteTodo (id){
    return{
        type: 'DELETE_TASK',
        payload: {
            id: id
        }
    }
}

export  function editTodo (id, text){
    return{
        type: 'EDIT_TODO',
        payload:{
            id: id,
            text: text,
        }
    }
}

export  function completeTodo (id){
    return{
        type: 'COMPLETE_TODO',
        payload: {
            id: id,
        }
    }
}

export  function completeAllTodos (){
    return{
        type: 'COMPLETE_ALL_TODOS',
        
    }
}

export  function clearCompleted (){
    return{
        type: 'CLEAR_COMPLETED',
        
    }
}

export  function filter (id){
    return{
        type: 'FILTER',
        payload: {
            id: id,
        }
    }
}

