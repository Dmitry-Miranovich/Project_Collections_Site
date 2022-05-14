import React, {useEffect, useState} from "react";
import "../../../css/profile.css"
import {setUserID} from "../../../actions";
import axios from "axios";
import Header from "../main_page/Header";
import ProfileInfo from "./ProfileInfo";
import ProfileCollection from "./ProfileCollection";
import {useSelector} from "react-redux";

const ProfilePage = (prop) =>{

    const userID = useSelector(state => state.foreignUserID)
    const [user, setUser] = useState({
        data: null
    })

    useEffect(()=>{
        axios.get("http://localhost:5000/profile/"+ userID)
            .then((res)=>{
                if(res.data.validation.isValid){
                    setUser(prevState => {
                        prevState.data = res.data.validation.result[0]
                    })
                    console.log({user})
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [userID])

    return(
        <div className={"profile_page"}>
            <Header/>
            <div className={"profile_body"}>
                <ProfileInfo/>
                <ProfileCollection/>
            </div>

        </div>
    )

}
export default ProfilePage