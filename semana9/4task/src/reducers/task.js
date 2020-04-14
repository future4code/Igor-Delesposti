
const initialState = {
    taskList: []
};

const task = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TODO" :
            const newTaskList = [...state.taskList, action.payload]
            return {...state, taskList: newTaskList}
         default: 
            return state; 
    }
}
export default task;