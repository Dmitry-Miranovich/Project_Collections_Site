const userAccountReducer = (state = "" ,action)=>{
    switch (action.type) {
        case "GET_EMAIL":{
            return state
        }
        case "SET_EMAIL":{
            state = action.data
            return state
        }
        default:{
            return state
        }
    }
}
export default userAccountReducer