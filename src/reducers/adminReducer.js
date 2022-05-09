const adminReducer = (state = false, action) =>{
    switch(action.type){
        case "IS_ADMIN":{
            state = action.data
            return state;
        }
        default:
            return state
    }
}
export default adminReducer