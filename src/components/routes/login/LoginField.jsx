import React , {useState} from "react";
import '../../../css/login.css'
import {Link, Redirect} from "react-router-dom";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {useSelector , useDispatch} from "react-redux"
import {isUserLogged, setUserEmail} from '../../../actions'
import {isUserAdmin} from "../../../actions";

function LoginField (props){
    const isLogged = useSelector(state => state.isLogged)
    const isAdmin = useSelector(state => state.isAdmin)
    const userEmail = useSelector(state => state.userStore)
    const dispatch = useDispatch()
    const history = useHistory()
    const customUser = {
        "users": [
            {
                email: "some",
                password: "ass",
                redirect : false
            }
        ]
    }
    const [user, setUser ] = useState({
        email: "",
        password: ""
    })
    const [redirect, setRedirect] = useState({
        redirect: false
    })

    const handleInputChange = e =>{
        let name = e.target.name
        let value = e.target.value
        setUser((preValue)=>{
            return{
               ...preValue,
               [name]: value
            }
        })
    }
    const handleRedirect = res =>{
        if(res.redirect === true){
            console.log("Redirection to registration")
            dispatch(setUserEmail("something"))

            console.log({userEmail})
            //history.push('/users')
        }
    }
    const handleSubmit = e =>{
        e.preventDefault()
        const {email, password} = user
        const user_info = {
            email,
            password
        }

        axios.post("http://localhost:8100/login", user_info)
            .then((res)=>{
                console.log(res)
                setRedirect((prev)=>{
                    prev = true
                })
                handleRedirect(res.data)
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    return(
        <div className={"login_field"}>
            <div className={"login_input"}>
                <form onSubmit={handleSubmit}>
                    <h1> Войти </h1>
                    <div>
                        <input className={"email_field"} type={"text"} name={"email"} onChange={handleInputChange}/>
                    </div>
                    <div>
                        <input className={"password"} type={'password'} name={"password"} onChange={handleInputChange}/>

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
export default LoginField