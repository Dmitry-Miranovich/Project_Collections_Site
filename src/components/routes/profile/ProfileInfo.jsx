import React, {useEffect, useState} from "react"
import "../../../css/profile.css"
import {useSelector, useDispatch} from "react-redux";
import {setIsAddCollection} from "../../../actions";

//todo Profile pic add
function ProfileInfo(user_info) {
//{user_info.user_data.data.validation.result[0].u_first_name}
    const isAddCollection = useSelector(state => state.isCollectionAdd)
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log("message form profileInfo")
        console.log(user_info)
    }, [user_info])

    //todo image for account
    return(
        <div className={"profile_box_page"}>
            <div className={"profile_pic"}>

            </div>
            <div className={"profile_description"}>
                <p>{user_info.data.u_first_name}</p>
                <p>{user_info.data.u_last_name}</p>
                <p>{user_info.data.u_email}</p>
            </div>
            <div className={"profile_actions"}>
                {isAddCollection? (
                    <button className={"add_collection"} onClick={()=>{dispatch(setIsAddCollection(false))}}>
                        Отмена
                    </button>
                ):(
                    <button className={"add_collection"} onClick={()=>{
                        dispatch(setIsAddCollection(true))
                    }}>
                        Добавить коллекцию
                    </button>
                )}
            </div>
        </div>
    )
}
export default ProfileInfo