import React, {useEffect, useState} from "react"
import "../../../css/main_page.css"
import {useHistory} from "react-router-dom";

function UserInfo(user_info){

    const history = useHistory()

    const [user, setUser] = useState({
        f_name: "" ,
        l_name: "",
        //todo nickname + id to collections data
        status: "",
        permission: ""
    })

    const sendInfoToProfile = ()=>{
        setUser((prevState)=>{
            prevState.f_name = user_info.user_data.u_first_name
            prevState.l_name = user_info.user_data.u_last_name
            prevState.status = user_info.user_data.u_status
            prevState.permission = user_info.user_data.u_user_permission
        })

        history.push('/profile')
    }

    return(
        <div className={"user_info"} onClick={sendInfoToProfile}>
            <div className={'image_holder'}>

            </div>
            <p>{user_info.user_data.u_first_name}</p>
        </div>
    )
}
export default UserInfo