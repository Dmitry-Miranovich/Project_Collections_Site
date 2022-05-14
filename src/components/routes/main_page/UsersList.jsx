import React, {useEffect, useState} from "react";
import '../../../css/main_page.css'
import UserInfo from "./UserInfo";
import {setForeignId} from "../../../actions";
import {useSelector, useDispatch} from "react-redux";
import {observe} from "web-vitals/dist/modules/lib/observe";

const UsersList = (users) => {
    const foreignId = useSelector(state => state.foreignUserID)

    const renderUserInfo = (user_value, user_key) =>{
        return <UserInfo key = {user_key} user_data = {user_value}/>
    }
    useEffect(function () {


    }, [users])
    const showUsers = () =>{
            return users.data.map(((value, key) => {
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