import React, {useEffect, useState} from "react";
import '../../../css/main_page.css'
import UserInfo from "./UserInfo";

const UsersList = (users) => {

    const mas = Array.from(users.data)
    /*
    const [user_info, setUserInfo] =useState({
        key: "",
        value :""
    })
     */

    const renderUserInfo = (user_value, user_key) =>{
        console.log(user_value , user_key)
        return <UserInfo key = {user_key} user_data = {user_value}/>
    }

    const showUsers = () =>{
        console.log(mas)
        return mas.map(((value, key) => {
            return renderUserInfo(value, key)
        }))
    }

    return(
        <div className={'user_list'}>
            <div className={"user_list_box"}>
                {showUsers()}
            </div>
        </div>
    )
}
export default UsersList