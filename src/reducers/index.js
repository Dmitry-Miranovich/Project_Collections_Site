import {combineReducers} from "redux";
import userLoginReducer from './userLoginReducer'
import adminReducer from './adminReducer'
import userAccountReducer from "./userAccountReducer";
import foreignUserReducer from "./foreignUserReducer";
import userReducer from "./userReducer";
import addCollectionReducer from "./addCollectionReducer";
import collectionReducer from  "./collectionReducer"

const allReducers = combineReducers({
    isLogged: userLoginReducer,
    isAdmin: adminReducer,
    isCollectionAdd: addCollectionReducer,
    userID: userAccountReducer,
    userStore:userReducer,
    foreignUserID: foreignUserReducer,
    collectionStore: collectionReducer
})

export default allReducers