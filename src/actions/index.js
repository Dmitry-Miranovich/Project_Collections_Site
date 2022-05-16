export const isUserLogged = (state) =>{
    return{
        type: "IS_LOGGED",
        status: state
    }
}
export const isUserAdmin = (status_admin) =>{
    return{
        type: "IS_ADMIN",
        data: status_admin
    }
}
export const setUserID = (ID)=>{
    return{
        type: "SET_ID",
        data: ID
    }
}
export const setForeignId = (ID)=>{
    return{
        type: "FOREIGN_ID",
        id: ID
    }
}
export const setUser = (user)=>{
    return{
        type: "SET_USER",
        data: user
    }
}
export const setIsAddCollection = (state)=>{
    return{
        type: "ADD_COLLECTION",
        data: state
    }
}
export const setCollections = (state)=>{
    return{
        type: "SET_COLLECTION",
        data: state
    }
}
export const setIsAddItem = (state)=>{
    return{
        type: "ADD_ITEM",
        data: state
    }
}
export const setIsAddItemBox = (state)=>{
    return{
        type: "ADD_ITEM_BOX",
        data: state
    }
}