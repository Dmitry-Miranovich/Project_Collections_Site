import React from "react"
import "../../../css/main_page.css"
import {Link} from "react-router-dom";

function Header () {


    return (
        <div className={"header"}>
            <h1>Collections</h1>
            <div className={"header_items"}>
                <div className={"profile_box"}>
                    <Link to={"/profile"}>Профиль</Link>
                </div>
                <div className={"user_box"}>
                    <Link to={"/users"}>Пользователи</Link>
                </div>
                <div className={"search_box"}>
                    <Link to={"/search"}>Поиск</Link>
                </div>
                <div className={"exit_box"}>
                    <Link to={"/"}>Выйти</Link>
                </div>
            </div>
        </div>
    )
}
export default Header