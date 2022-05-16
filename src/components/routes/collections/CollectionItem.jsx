import React, {useState} from "react";
import "../../../css/collections.css"
import {useDispatch, useSelector} from "react-redux";
import {setIsAddItem} from "../../../actions";
import axios from "axios";

const CollectionItem = (prop)=>{

    const isAddItem = useSelector(state => state.isItemAdd)
    const dispatch = useDispatch()

    const showItemPage = ()=>{
        dispatch(setIsAddItem(true))
        localStorage.setItem("curr_collection", JSON.stringify(prop))
    }

    return(
        <div className={"collection-item-container"} onClick={()=>{
            showItemPage()
        }}>
            <div className={"collection-item-picture"}>
                Картинка
            </div>
            <div className={"collection-item-name"}>
                {prop.value.ci_name}
            </div>
            <div className={"collection-item-description"}>
                {prop.value.ci_description}
            </div>
            <div className={"collection-item-topic"}>
                {prop.value.ci_topic}
            </div>
            <div className={"collection-item-date"}>
                Время
            </div>
        </div>
    )

}
export default CollectionItem