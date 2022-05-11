import React, {useEffect} from "react";
import "../../../css/profile.css"
import {setUserID} from "../../../actions";
import axios from "axios";
import Header from "../main_page/Header";
import ProfileInfo from "./ProfileInfo";
import ProfileCollection from "./ProfileCollection";
import {useSelector} from "react-redux";

const ProfilePage = (prop) =>{

    const userID = useSelector(state => state.userID)

    useEffect(()=>{
        axios.get("http://localhost:8100/users/"+ userID)
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [])

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