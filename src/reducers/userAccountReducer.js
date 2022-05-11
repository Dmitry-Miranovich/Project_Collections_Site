const userAccountReducer = (state = 0 ,action)=>{
    switch (action.type) {
        case "SET_ID":{
            state = action.data
            return state
        }
        default:{
            return state
        }
    }
}
export default userAccountReducer