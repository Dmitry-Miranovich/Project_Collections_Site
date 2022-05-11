import React, {useState, useEffect} from "react"
import '../../../css/main_page.css'
import axios from "axios";
import Header from "./Header";
import UsersList from "./UsersList";
import UserInfo from "./UserInfo";

function UsersPage(props) {

    const [user, setUser] = useState({
        f_name:"",
        l_name:"",
        m_name:"",
        email:"",
        status: "",
        permission: "",
        hex: ""
    })
    const [isUsersExist, setIsUsersExist] = useState(false)

    useEffect(()=>{
        axios.get("http://localhost:8100/users")
            .then((res)=>{
                setUser(res.data)
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
                <UsersList data = {user}/>
            ):(
                <h2>Пользователей не найдено</h2>
            )}
        </div>
    )

}
export default UsersPage