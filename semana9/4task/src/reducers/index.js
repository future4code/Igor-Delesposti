import { combineReducers } from "redux";
import task from "./task";
// import filter from "./filter"


// Local onde juntamos todos os nossos reducers
// em um só, lembrando, usamos o rootReducer
// para inicializar a store no createStore();

const rootReducer = combineReducers({
    task: task,
    
});

export default rootReducer;