import React, {useState} from "react"
import "../../../css/main_page.css"
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {Redirect} from "react-router";
import {setIsAddCollection} from "../../../actions";

function Header (props) {

    const [user_info ,setUserInfo] = useState(JSON.parse(localStorage.getItem("user_info")))
    const history = useHistory()
    const isAddCollection = useSelector(state => state.isCollectionAdd)
    const dispatch = useDispatch()
    const exit = () =>{
        localStorage.removeItem("user_info")
        dispatch(setIsAddCollection(false))
        history.push('/')
    }
    return (
        <div className={"header"}>
            <h1>Collections</h1>
            <div className={"header_items"}>
                <div className={"profile_box"}>
                    <button onClick={()=>{
                        localStorage.setItem("page_number", user_info.id)
                        history.push('/profile/' + user_info.id)
                        dispatch(setIsAddCollection(false))
                    }}>Профиль</button>
                </div>
                <div className={"user_box"}>
                    <button onClick={()=>{
                        history.push('/users')
                        dispatch(setIsAddCollection(false))
                    }}>Пользователи</button>
                </div>
                <div className={"search_box"}>
                    <button onClick={()=>{
                        history.push('/search')
                        dispatch(setIsAddCollection(false))
                    }}>Поиск</button>
                </div>
                <div className={"exit_box"}>
                    <button onClick={exit}>Выйти</button>
                </div>
            </div>
        </div>
    )
}
export default Header