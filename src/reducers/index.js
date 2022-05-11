import {combineReducers} from "redux";
import userReducer from './userReducer'
import adminReducer from './adminReducer'
import userAccountReducer from "./userAccountReducer";

const allReducers = combineReducers({
    isLogged: userReducer,
    isAdmin: adminReducer,
    userID: userAccountReducer
})

export default allReducers