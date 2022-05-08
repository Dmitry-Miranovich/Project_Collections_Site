import React from "react";
import "../../../css/login.css"

class PasswordField extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={"password_field"}>
                <input className={"password"} type={'password'}/>
            </div>
        );
    }
}

export default PasswordField