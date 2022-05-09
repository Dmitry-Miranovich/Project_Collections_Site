import React from "react"
import "../../../css/main_page.css"
import {Link} from "react-router-dom";

class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className={"header"}>
                <h1>Collections</h1>
                <div className={"header_items"}>
                    <div>
                        <Link to={"/profile"}>Профиль</Link>
                    </div>
                    <div>
                        <Link to={"/users"}>Пользователи</Link>
                    </div>
                    <div>
                        <Link to={"/search"}>Поиск</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header