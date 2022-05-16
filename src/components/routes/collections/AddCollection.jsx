import React, {useState} from "react";
import "../../../css/collections.css"
import {useDispatch, useSelector} from "react-redux";
import ProfileCollection from "../profile/ProfileCollection";
import DraggableUploader from "./DraggableUploader";
import {AnchorButton} from "@blueprintjs/core";
import axios from "axios";
import {setIsAddCollection} from "../../../actions";


const AddCollection = () =>{
    const id = localStorage.getItem("page_number")
    const isAddCollection = useSelector(state => state.isCollectionAdd)
    const dispatch = useDispatch()
    const [collection, SetCollection] = useState({
        name: "",
        description:"",
        topic: "",
        image: null,
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

    const createCollection = () =>{
        const loadedFile = JSON.parse(localStorage.getItem("uploaded-image"))
        const obj = {
            name: collection.name,
            description: collection.description,
            topic: collection.topic,
            image: loadedFile.data,
            userID: id
        }
        console.log(obj)
        axios.post("http://localhost:5000/profile/upload", obj)
            .then(res=>{
                if(res.data.validation.isCollectionAdded){
                    dispatch(setIsAddCollection(false))
                }
            })
            .catch(err=>{
                console.log(err)
            })
    }

    return(
        <div className={"collection_add_page"}>
            {isAddCollection?(
                <div>
                    <h1>Добавить коллекцию</h1>
                    <div className={"collection_add_body"}>
                        <form onSubmit={createCollection}>
                            <p>Название коллекции</p>
                            <input type={"text"} name={"name"} onChange={handleChange}/>
                            <p>Описание</p>
                            <textarea name = {"description"} onChange={handleChange}/>
                            <p>Тема</p>
                            <input type = {"text"} name={"topic"} onChange={handleChange}/>
                            <p>Обложка</p>
                            <DraggableUploader/>
                            <AnchorButton text={"Добавить"} onClick={createCollection}/>
                        </form>
                    </div>
                </div>

            ):(
                <div/>
            )}
        </div>
    )

}
export default AddCollection