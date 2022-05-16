import React, {useEffect, useState} from "react"
import "../../../css/profile.css"
import {useSelector, useDispatch} from "react-redux";
import {setIsAddCollection, setIsAddItem, setIsAddItemBox} from "../../../actions";

//todo Profile pic add
function ProfileInfo(user_info) {
//{user_info.user_data.data.validation.result[0].u_first_name}
    const isAddCollection = useSelector(state => state.isCollectionAdd)
    const isAddItem = useSelector(state => state.isItemAdd)
    const isLogged = useSelector(state => state.isLogged)
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
            {isLogged?(
                <div className={"profile_actions"}>
                    {isAddCollection && !isAddItem ? (
                        <button className={"add_collection"} onClick={()=>{dispatch(setIsAddCollection(false))}}>
                            Отмена
                        </button>
                    ):(
                        <div>
                            {!isAddItem?(
                                <button className={"add_collection"} onClick={()=>{
                                    dispatch(setIsAddCollection(true))
                                }}>
                                    Добавить коллекцию
                                </button>
                            ):(
                                <div>
                                    <button className={"add_collection"} onClick={()=>{
                                        dispatch(setIsAddItemBox(true))
                                    }}>
                                        Добавить итем
                                    </button>
                                    <button className={"add_collection"} onClick={()=>{
                                        dispatch(setIsAddItem(false))
                                        dispatch(setIsAddItemBox(false))
                                    }}>
                                        Назад
                                    </button>
                                </div>
                            )}

                        </div>
                    )}

                </div>
            ):(
                <div>
                    {isAddItem?(
                        <button className={"add_collection"} onClick={()=>{
                            dispatch(setIsAddItem(false))
                            dispatch(setIsAddItemBox(false))
                        }}>
                            Назад
                        </button>
                    ):(
                        ""
                    )}
                </div>

            )}

        </div>
    )
}
export default ProfileInfo