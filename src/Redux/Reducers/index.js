import { reducer } from "./addItem";
import {combineReducers} from "redux";

const rootReducers = combineReducers({
    reduce:reducer 
})



export default rootReducers;