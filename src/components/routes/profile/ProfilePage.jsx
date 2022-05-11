import React, {useEffect} from "react";
import "../../../css/profile.css"
import Header from "../main_page/Header";
import ProfileInfo from "./ProfileInfo";
import ProfileCollection from "./ProfileCollection";

const ProfilePage = (prop) =>{

    useEffect(()=>{

        

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