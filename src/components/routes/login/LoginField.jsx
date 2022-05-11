import React , {useState} from "react";
import '../../../css/login.css'
import {Link, Redirect} from "react-router-dom";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {useSelector , useDispatch} from "react-redux"
import {isUserLogged, setUserID} from '../../../actions'
import {isUserAdmin} from "../../../actions";

function LoginField (props){
    const isLogged = useSelector(state => state.isLogged)
    const isAdmin = useSelector(state => state.isAdmin)
    const userID = useSelector(state => state.userID)
    const dispatch = useDispatch()
    const history = useHistory()

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
            dispatch(setUserID(res.id))
            console.log({userID})
            history.push('/users')
        }
    }
    const handleSubmit = e =>{
        e.preventDefault()
        axios.post("http://localhost:8100/login", user)
            .then((res)=>{
                console.log(res)
                handleRedirect(res.data)
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