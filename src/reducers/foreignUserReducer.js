const foreignUserReducer = (state = 0, actions)=>{

    switch(actions.type){
        case "FOREIGN_ID":{
            state = actions.id
            return state
        }
        default:{
            return state
        }
    }

}
export default foreignUserReducer