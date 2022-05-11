import React from "react"
import "../../../css/profile.css"

//todo Profile pic add
function ProfileInfo() {
    return(
        <div className={"profile_box_page"}>
            <div className={"profile_pic"}>

            </div>
            <div className={"profile_description"}>
                <p>Place holder1</p>
                <p>Place holder2</p>
                <p>Place holder3</p>
            </div>
            <div className={"profile_actions"}>
                <button className={"add_collection"}>
                    Добавить коллекцию
                </button>
            </div>
        </div>
    )
}
export default ProfileInfo