import React, {useState} from "react";
import "../../../css/collections.css"
import DraggableUploader from "../collections/DraggableUploader";
import {AnchorButton} from "@blueprintjs/core";
import axios from "axios";

const ItemAddBox = (props)=>{
    const [collection, SetCollection] = useState({
        name: "",
        description:"",
        date: Date.now(),
    })
    const handleChange = (e) =>{
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value
        SetCollection((prevState) => {
            return{
                ...prevState,
                [name]:value
            }
        })
    }

    const createItem = ()=>{
        const collection_data = JSON.parse(localStorage.getItem("curr_collection"))
        const userID = JSON.parse(localStorage.getItem("page_number"))
        const obj = {
            name: collection.name,
            description: collection.description,
            date: collection.date,
            id: userID
        }
        console.log(obj)

        axios.post("http://localhost:5000/collections/" + collection_data.value.ci_id, obj)

            .then((res)=>{
                console.log()
            }).catch((err)=>{
                console.log(err)
        })
    }
    return(
        <div className={"item_add_body"}>
            <form onSubmit={createItem}>
                <p>Название итема</p>
                <input type={"text"} name={"name"} onChange={handleChange}/>
                <p>Тематика</p>
                <textarea name = {"description"} onChange={handleChange}/>
                <div>
                    <AnchorButton text={"Добавить"} onClick={createItem}/>
                </div>
            </form>
        </div>
    )
}
export default ItemAddBox