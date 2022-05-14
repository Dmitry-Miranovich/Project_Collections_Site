const userLoginReducer = (state = false, action) =>{
    switch(action.type){
        case "IS_LOGGED":{
            state = action.status
            return state;
        }
        default:
            return state
    }
}
export default userLoginReducer