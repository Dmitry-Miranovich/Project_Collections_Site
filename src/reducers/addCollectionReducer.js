const addCollectionReducer = (state = false, action)=>{
    switch (action.type) {
        case "ADD_COLLECTION":{
            state = action.data
            return state
        }
        default:{
            return state
        }
    }
}
export default addCollectionReducer