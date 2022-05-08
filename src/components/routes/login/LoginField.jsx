import React from "react";
import '../../../css/login.css'
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import RegistrationField from "../registration/RegistrationField";

const customUser = {
    "users": [
        {
            email: "some",
            password: "ass",
            redirect : false
        }
    ]
}

class LoginField extends React.Component{

    constructor(props, customUser) {
        super(props, customUser);
        this.state = {
            email: "some",
            password: "ass"
        }
    }
    handleInputChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRedirect(res){
        return<Redirect to={"/registration"}/>
    }

    handleSubmit = e =>{
        e.preventDefault()
        const {email, password} = this.state
        const user = {
            email,
            password
        }
        axios.post("http://localhost:8100/login", user)
            .then((res)=>{
                console.log(res)
                this.setState({redirect:true})
                this.handleRedirect(res.status)
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    render(){
        return(
            <div className={"login_field"}>
                <div className={"login_input"}>
                    <form onSubmit={this.handleSubmit}>
                        <h1> Войти </h1>
                        <div>
                            <input className={"email_field"} type={"text"} name={"email"} onChange={this.handleInputChange}/>
                        </div>
                        <div>
                            <input className={"password"} type={'password'} name={"password"} onChange={this.handleInputChange}/>
                        </div>
                        <div>
                            <button type={"submit"} >Войти</button>
                        </div>
                        <div className={"registration_field"}>
                            <div>
                                <p>Нет аккаунта? </p>
                            </div>
                            <div className={"registration_link"}>
                                <Link to={"/registration"}>Зарегистрируйтесь.</Link>
                            </div>

                        </div>

                    </form>
                </div>
            </div>
        );
    }
}
export default LoginField