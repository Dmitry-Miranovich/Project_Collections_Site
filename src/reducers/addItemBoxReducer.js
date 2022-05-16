const addItemBoxReducer = (state = false, action)=>{
    switch (action.type) {
        case "ADD_ITEM_BOX":{
            state = action.data
            return state
        }
        default:{
            return state
        }
    }
}
export default addItemBoxReducer