import React, {useEffect, useState} from "react"
import "../../../css/main_page.css"
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setForeignId} from "../../../actions";

function UserInfo(user_info){

    const history = useHistory()
    const dispatch = useDispatch()

    async function dispatching() {
        return dispatch(setForeignId(user_info.user_data.u_id))
    }
    const sendInfoToProfile = ()=>{
        console.log("data of profile")
        dispatching().then((res)=>{
            localStorage.setItem("page_number", res.id)
            history.push("/profile/"+ res.id)
        })
        console.log(user_info.user_data)
    }
    //todo image link
    return(
        <div className={"user_info"} onClick={sendInfoToProfile}>
            <div className={'image_holder'}>

            </div>
            <p>{user_info.user_data.u_first_name}</p>
            <p>{user_info.user_data.u_last_name}</p>
        </div>
    )
}
export default UserInfo