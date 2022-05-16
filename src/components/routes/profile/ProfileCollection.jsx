import React, {useEffect} from "react";
import "../../../css/profile.css"
import CollectionItem from "../collections/CollectionItem";

const ProfileCollection = (props) =>{

    const showCollections = () =>{
        return props.data.map((value, key)=>{
            return showCollection(value, key)
        })
    }
    const showCollection = (value, key)=>{
        return <CollectionItem key = {key} value = {value}/>
    }

    return(
        <div className={"profile_collection_box"}>
            <h1>Коллекции</h1>
            <div className={"collection-container"}>
                {showCollections()}
            </div>
        </div>
    )
}
export default ProfileCollection