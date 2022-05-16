import React, {useState, useEffect} from "react"
import '../../../css/main_page.css'
import axios from "axios";
import Header from "./Header";
import UsersList from "./UsersList";
import UserInfo from "./UserInfo";
import {setUser} from "../../../actions";
import {useSelector, useDispatch} from "react-redux";

function UsersPage(props) {

    const [isUsersExist, setIsUsersExist] = useState(false)
    const isLogged = useSelector(state => state.isLogged)
    const user = useSelector(state => state.userStore)
    const dispatch = useDispatch()

    //todo https://heroku-collection-server.herokuapp.com/users

    useEffect(()=>{
        axios.get("http://localhost:5000/users")
            .then((res)=>{
                localStorage.setItem("foreign_users", JSON.stringify(res.data.users))
                dispatch(setUser(res.data.users))
            }).then(()=>{
            console.log( "Данные юзера")
            console.log({user})
            setIsUsersExist(true)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    return (
        <div className={"main_page"}>
            <Header/>
            {isUsersExist ?(
                <UsersList data = {user} isExists = {isUsersExist}/>
            ):(
                <h2>Пользователей не найдено</h2>
            )}
        </div>
    )

}
export default UsersPage