const addItemReducer = (state = false, action)=>{
    switch (action.type) {
        case "ADD_ITEM":{
            state = action.data
            return state
        }
        default:{
            return state
        }
    }
}
export default addItemReducer