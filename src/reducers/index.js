import { combineReducers } from "redux";
import authReducer from "./auth";
import counterReducer from "./counter";

export const allReducers = combineReducers({
    counter:counterReducer,
    user:authReducer
})
