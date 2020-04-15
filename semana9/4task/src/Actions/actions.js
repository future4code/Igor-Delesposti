export  function addTodo (text, id){
    return{
        type: 'ADD_TODO',
        payload: {
            text: text,
            id: new Date().getTime(),
            complete: false,
            
        },
    }
}

export  function deleteTask (id){
    return{
        type: 'DELETE_TASK',
        payload: {
            id: id
        }
    }
}

export  function toggleTodo (id, text){
    return{
        type: 'toggle_TODO',
        payload:{
            id: id,
            text: text,
            
        }
    }
}


export  function completeAllTasks (){
    return{
        type: 'COMPLETE_ALL_TASKS',
        
    }
}

export  function deleteAllComplete (){
    return{
        type: 'DELETE_ALL_COMPLETE',
        
    }
}

export  function setFilter (filter){
    return{
        type: 'SET_FILTER',
        payload: {
            filter: filter
        }
    }
}

