import React , {useState} from "react";
import '../../../css/registration.css'
import {Link} from "react-router-dom";
import axios from "axios";


function RegistrationField(props){

    const [user, setUser] = useState({
        first_name:"",
        last_name: "",
        middle_name: "",
        email: "",
        hex: ""
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
    const handleRedirect = (res) =>{
        const {result} = res;
        const mes = {
            result
        }
        if(mes.result){
            window.location.href = "http://localhost:3000/"
        }
    }

    const handleSubmit = e =>{
        e.preventDefault()
        const {first_name, last_name, middle_name, email, hex} = user
        const user_info = {
            first_name,
            last_name,
            middle_name,
            email,
            hex
        }
        axios.post('http://localhost:8100/registration', user_info)
            .then((res)=>{
                handleRedirect(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    return(
             <div className={"registration_box"}>
                 <h1>Регистрация</h1>
                 <form onSubmit={handleSubmit}>
                     <div>
                         <p>Имя</p>
                         <div className={"some"}>
                             <input className={"registration_field"} type={"text"} name = "first_name" onChange={handleInputChange}/>
                         </div>
                     </div>
                    <div>
                        <p>Фамилия</p>
                        <input className={"registration_field"} type={"text"} name = "last_name" onChange={handleInputChange}/>
                    </div>
                     <div>
                         <p>Отчество</p>
                         <input className={"registration_field"} type={"text"} name = "middle_name"  onChange={handleInputChange}/>
                     </div>
                     <div>
                         <p>Почтовый ящик</p>
                         <input className={"registration_field"} type={"text"} name = "email"  onChange={handleInputChange}/>
                     </div>
                     <div>
                         <p>Пароль</p>
                         <input className={"registration_field"} type={"text"} name = "hex"  onChange={handleInputChange}/>
                     </div>
                     <button type ={"submit"} >Зарегистрироватся</button>
                 </form>
             </div>
    )
}
export default RegistrationField