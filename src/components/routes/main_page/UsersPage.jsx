import React, {useState, useEffect} from "react"
import '../../../css/main_page.css'
import axios from "axios";
import Header from "./Header";
import UsersList from "./UsersList";

function UsersPage(props) {

    const [user, setUser] = useState({
        f_name:"",
        l_name:"",
        m_name:"",
        email:"",
    })

    useEffect(()=>{
        axios.get("http://localhost:8100/users")
            .then((res)=>{
                const mas = res.data.map((value)=>{
                    setUser(prevState => {
                        prevState = value
                    })
                    console.log(user)
                })
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

    return (
        <div className={"main_page"}>
            <Header/>
            <UsersList/>
        </div>
    )

}
export default UsersPage