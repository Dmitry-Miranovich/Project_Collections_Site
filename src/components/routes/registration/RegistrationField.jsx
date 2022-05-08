import React from "react";
import '../../../css/registration.css'
import {Link} from "react-router-dom";
import axios from "axios";


class RegistrationField extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            first_name:"",
            second_name: "",
            last_name: "",
            email: ""
        }
    }

    handleSubmit = e =>{

    }

     render(){
         return(
             <div className={"registration_box"}>
                 <form onSubmit={this.handleSubmit}>
                     <input className={"registration_field"} type={"text"}/>
                     <input className={"registration_field"} type={"text"}/>
                     <input className={"registration_field"} type={"text"}/>
                     <input className={"registration_field"} type={"text"}/>
                     <button type ="submit" >Зарегистрироватся</button>
                 </form>
             </div>
         )
     }
}
export default RegistrationField