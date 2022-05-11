import React, {useEffect, useState} from "react"
import "../../../css/main_page.css"
import {useHistory} from "react-router-dom";

function UserInfo(user_info){

    const history = useHistory()

    const sendInfoToProfile = ()=>{
        console.log(user_info.user_data)
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