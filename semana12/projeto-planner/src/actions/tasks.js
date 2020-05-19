import axios from 'axios';

// Funções síncronas

export const setAllTasks = (task) => {
    return {
        type: "SET_ALL_TASKS",
        payload: {
          task
        }
    }
}

// Funções assíncronas

export const getTasks = () => async (dispatch) => {
    
    try {
      const response = await axios.get(
        'https://us-central1-missao-newton.cloudfunctions.net/generic/planner-igor', {
      }
      )
      
      dispatch(setAllTasks(response.data))
    } catch (error) {
      console.error(error)
    }
  }

export const createTask = (body) => async (dispatch) =>{
  
  try{
    const response = await axios.post(
      'https://us-central1-missao-newton.cloudfunctions.net/generic/planner-igor', body
      
    )
      alert("Tarefa criado com sucesso.")
      dispatch(getTasks())
  } catch (error) {
    console.error()
  }
}