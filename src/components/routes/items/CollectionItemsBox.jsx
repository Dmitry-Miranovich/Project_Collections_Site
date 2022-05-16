import React, {useEffect, useState} from "react";
import "../../../css/items.css"
import axios from "axios";
import Item from "./Item";

const CollectionsItemsBox = (props) =>{
    const collection_data = JSON.parse(localStorage.getItem("curr_collection"))
    const [items, setItems] = useState({
        data: [],
    })
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(()=>{
        axios.get("http://localhost:5000/collections/" + collection_data.value.ci_id)
            .then((res)=>{
                console.log(res)
                if(res.data.isValid){
                    setItems(prevState => {
                        prevState.data = res.data.data
                    })
                }
            }).then(()=>{
                setIsLoaded(true)
        })
    },[])

    return(
        <div className={"items-box"}>
            <h1>{collection_data.value.ci_name}</h1>
            <div className={"items-box-container"}>

            </div>
        </div>
    )
}
export default CollectionsItemsBox