export default function addTodo (text){
    return{
        type: 'ADD_TODO',
        payload: {
            text: text,
            
        },
    }
}

export default function deleteTodo (id){
    return{
        type: 'DELETAR_TASK',
        payload: {
            id: id,
        }
    }
}

export default function editTodo (id, text){
    return{
        type: 'EDIT_TODO',
        payload:{
            id: id,
            text: text,
        }
    }
}

export default function completeTodo (id){
    return{
        type: 'COMPLETE_ALL_TODOS',
        payload: {
            id: id,
        }
    }
}

export default function completeAllTodos (){
    return{
        type: 'COMPLETE_ALL_TODOS',
        
    }
}

export default function clearCompleted (){
    return{
        type: 'CLEAR_COMPLETED',
        
    }
}

export default function filter (id){
    return{
        type: 'FILTER',
        payload: {
            id: id,
        }
    }
}

