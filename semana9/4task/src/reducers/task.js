

const initialState = {
    taskList: [],
    filter: "none"
};

const task = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const newTaskList = [...state.taskList, action.payload]
            return { ...state, taskList: newTaskList }
        case "DELETE_TASK": {
            const newState = state.taskList.filter((task) => {
                return (task.id !== action.payload.id)
            })

            return { ...state, taskList: newState }
        }
        case "toggle_TODO": {
            const newState = state.taskList.map((task) => {
                if (task.id === action.payload.id) {
                    task.complete = !task.complete
                    return task;
                } else {
                    return task;
                }
            })

            return { ...state, taskList: newState }

        }
        case "SET_TODOS": {
            return { ...state, taskList: action.payload.todos }
        }
        case "SET_FILTER": {

            return { ...state, filter: action.payload.filter }
        }

        default:
            return state;

    }

}
export default task;