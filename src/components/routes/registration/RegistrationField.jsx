import React , {useState} from "react";
import '../../../css/registration.css'
import {Link} from "react-router-dom";
import axios from "axios";
import bcrypt from 'bcryptjs'
import {useHistory} from "react-router-dom";


function RegistrationField(props){
    const history = useHistory()
    const [user, setUser] = useState({
        first_name:"",
        last_name: "",
        middle_name: "",
        email: "",
        hash: ""
    })
    const salt = bcrypt.genSaltSync(10)
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
            history.push("/")
        }
    }

    //todo https://heroku-collection-server.herokuapp.com/registration

    const handleSubmit = e =>{
        e.preventDefault()
        if(user.email !== "" && user.first_name !== "" && user.middle_name !=="" && user.last_name !=="" && user.hash !=="") {
            user.hash = bcrypt.hashSync(user.hash, salt)
            axios.post('http://localhost:5000/registration', user)
                .then((res) => {
                    console.log(res)
                    handleRedirect(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }else{
            alert("Пустые поля")
        }
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
                         <input className={"registration_field"} type={"password"} name = "hash"  onChange={handleInputChange}/>
                     </div>
                     <button type ={"submit"} >Зарегистрироватся</button>
                 </form>
             </div>
    )
}
export default RegistrationField