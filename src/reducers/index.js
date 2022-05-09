import {combineReducers} from "redux";
import userReducer from './userReducer'
import adminReducer from './adminReducer'

const allReducers = combineReducers({
    isLogged: userReducer,
    isAdmin: adminReducer
})

export default allReducers