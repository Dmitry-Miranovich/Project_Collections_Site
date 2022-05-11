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