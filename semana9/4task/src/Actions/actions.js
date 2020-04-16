import axios from 'axios'



export function deleteTask(id) {
    return {
        type: 'DELETE_TASK',
        payload: {
            id: id
        }
    }
}

export function toggleTodo(id, text) {
    return {
        type: 'toggle_TODO',
        payload: {
            id: id,
            text: text,

        }
    }
}


export function completeAllTasks() {
    return {
        type: 'COMPLETE_ALL_TASKS',

    }
}

export function deleteAllComplete() {
    return {
        type: 'DELETE_ALL_COMPLETE',

    }
}

export function setFilter(filter) {
    return {
        type: 'SET_FILTER',
        payload: {
            filter: filter
        }
    }
}

export function setTodos(todos) {
    return {
        type: 'SET_TODOS',
        payload: {
            todos: todos
        }
    }
}

//async functions


export const fetchTasks = () => async (dispatch, getState) => {
    const response = await axios.get(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/igor-hamilton/todos`
    );
    dispatch(setTodos(response.data.todos))

}

export const addTodo = (text) => async (dispatch, getState) => {
    const response = await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/igor-hamilton/todos`,

        {

            text: text
        }

    );
    dispatch(fetchTasks())    
}

export const toggleTask = (id) => async (dispatch, getState) =>{
    const response = await axios.put(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/igor-hamilton/todos/${id}/toggle`
    );
    dispatch(fetchTasks())

}

export const deleteTodo = (id) => async (dispatch, getState)=>{
    const response = await axios.delete(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/igor-hamilton/todos/${id}`

    )
    dispatch(fetchTasks())
}

export const deleteAllTasksComplete = () => async (dispatch, getState)=>{
    const response = await axios.delete(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/igor-hamilton/todos/delete-done`
    )
    dispatch(fetchTasks())
}
