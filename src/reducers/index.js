import {combineReducers} from "redux";
import userReducer from './userReducer'
import adminReducer from './adminReducer'
import userAccountReducer from "./userAccountReducer";

const allReducers = combineReducers({
    isLogged: userReducer,
    isAdmin: adminReducer,
    userEmail: userAccountReducer
})

export default allReducers