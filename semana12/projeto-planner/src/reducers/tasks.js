const initialState = {
    tasks: [],
}

const tasks = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case "SET_ALL_TASKS":{
            return {...state, tasks: action.payload.task}
        }

        default:
            return state;
    }
}

export default tasks;