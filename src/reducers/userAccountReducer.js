const userAccountReducer = (state ,action)=>{
    switch (action.type) {
        case "get_email":{
            return state
        }
        case "set_email":{
            state = action.data
            return state
        }
        default:{
            return state
        }
    }
}
export default userAccountReducer