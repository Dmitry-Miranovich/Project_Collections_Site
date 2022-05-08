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

     render(){
         return(
             <div>

             </div>
         )
     }
}
export default RegistrationField