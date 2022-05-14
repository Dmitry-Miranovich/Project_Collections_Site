import {combineReducers} from "redux";
import userLoginReducer from './userLoginReducer'
import adminReducer from './adminReducer'
import userAccountReducer from "./userAccountReducer";
import foreignUserReducer from "./foreignUserReducer";
import userReducer from "./userReducer";

const allReducers = combineReducers({
    isLogged: userLoginReducer,
    isAdmin: adminReducer,
    userID: userAccountReducer,
    userStore:userReducer,
    foreignUserID: foreignUserReducer
})

export default allReducers