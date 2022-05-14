import React from "react"
import "../../../css/main_page.css"
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {Redirect} from "react-router";

function Header (props) {

    const userId = useSelector(state => state.userID)
    const history = useHistory()
    const exit = () =>{

    }
    return (
        <div className={"header"}>
            <h1>Collections</h1>
            <div className={"header_items"}>
                <div className={"profile_box"}>
                    <button onClick={()=>{
                        history.push('/profile/' + userId)
                    }}>Профиль</button>
                </div>
                <div className={"user_box"}>
                    <button onClick={()=>{
                        history.push('/users')
                    }}>Пользователи</button>
                </div>
                <div className={"search_box"}>
                    <button onClick={()=>{
                        history.push('/search')
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