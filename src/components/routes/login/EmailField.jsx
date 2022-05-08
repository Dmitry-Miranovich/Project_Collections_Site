import React from "react";
import '../../../css/login.css'

class EmailField extends React.Component{

    constructor(props) {
        super(props)
    }


    render(){
        return(
            <div className={"email"}>
                <input className={"email_field"} type={"text"}/>
            </div>
        );
    }
}
export default EmailField