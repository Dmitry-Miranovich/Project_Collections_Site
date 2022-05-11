import React, {useEffect} from "react";
import '../../../css/main_page.css'
import UserInfo from "./UserInfo";

const UsersList = (user) => {

    const mas = Array.from(user.data)

    const renderUserInfo = (key , value) =>{
        return <UserInfo key = {key} user_data = {value}/>
    }

    const showUsers = () =>{
        return mas.map(((value, key) => {
            return renderUserInfo(key, value)
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