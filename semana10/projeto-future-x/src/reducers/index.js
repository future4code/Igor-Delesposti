import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import tripDetails from "./tripDetails"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    tripDetails,
    // Outros reducers aqui
  });
