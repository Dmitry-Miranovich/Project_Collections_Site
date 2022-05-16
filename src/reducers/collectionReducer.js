const collectionReducer = (state = null, action)=>{
    switch (action.type) {
        case "SET_COLLECTION":{
            state = action.data
            return state
        }
        default:{
            return state;
        }
    }
}
export default collectionReducer