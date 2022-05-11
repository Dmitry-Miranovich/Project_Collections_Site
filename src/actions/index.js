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
        type: "GET_EMAIL",
        data: email
    }
}
export const setUserEmail = (email)=>{
    return{
        type: "SET_EMAIL",
        data: email
    }
}