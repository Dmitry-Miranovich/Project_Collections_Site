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
export const getUserEmail = (email) =>{
    return{
        type: "get_email",
        data: email
    }
}
export const setUserEmail = (email)=>{
    return{
        type: "set_email",
        data: email
    }
}