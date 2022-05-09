import React from "react"
import '../../../css/main_page.css'
import Header from "./Header";

class UsersPage extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={"main_page"}>
                <Header/>
            </div>
        )
    }
}
export default UsersPage