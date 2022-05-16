import React, {useEffect, useState} from "react";
import "../../../css/profile.css"
import {isUserLogged, setCollections, setUserID} from "../../../actions";
import axios from "axios";
import Header from "../main_page/Header";
import ProfileInfo from "./ProfileInfo";
import ProfileCollection from "./ProfileCollection";
import {useDispatch, useSelector} from "react-redux";
import AddCollection from "../collections/AddCollection";
import CollectionItem from "../collections/CollectionItem";
import CollectionsItemsBox from "../items/CollectionItemsBox";
import ItemAddBox from "../items/ItemAddBox";

const ProfilePage = (prop) =>{

    const [isDataLoaded ,setIsDataLoaded] = useState(false)
    const isAddCollection = useSelector(state => state.isCollectionAdd)
    const isAddItem = useSelector(state => state.isItemAdd)
    const isAddItemBox = useSelector(state => state.addItem)
    const [user, setUser] = useState({
        data: null,
    })
    const collectionStore = useSelector(state => state.collectionStore)
    const id = JSON.parse(localStorage.getItem("page_number"))
    const pageID = {
        id: id
    }
    const dispatch = useDispatch()
    useEffect(()=>{
        const userID = JSON.parse(localStorage.getItem("user_info"))
        console.log("ID авторизированного юзера")
        if(userID.id === pageID.id){
            dispatch(isUserLogged(true))
            console.log("isLogged = true")
        }else{
            dispatch(isUserLogged(false))
        }
        axios.get("http://localhost:5000/profile/"+ id)
            .then((res)=>{
                console.log("Полученная инфа")
                console.log(res.data)
                if(res.data.validation.isValid){
                    setUser(res.data.validation.result)
                    dispatch(setCollections(res.data.validation.collections))
                    setIsDataLoaded(true)
                    return res.data
                }else{
                    console.log(res.data)
                }
            })
            .catch((err)=>{
                console.log(err)
            })
    }, [id])


    return(
        <div className={"profile_page"}>
            <Header/>
            <div className={"profile_body"}>
                {isDataLoaded? (
                    <div className={"profile_sub_body"}>
                        <ProfileInfo data = {user}/>
                        {isAddCollection && !isAddItem?(
                            <AddCollection/>
                        ):(
                            <div className={"collection-switch-box"}>
                                {!isAddItem?(
                                    <ProfileCollection data = {collectionStore}/>
                                ):(
                                    <div>
                                        {!isAddItemBox?(
                                            <CollectionsItemsBox/>
                                        ):(
                                            <ItemAddBox/>
                                        )}
                                    </div>

                                )}
                            </div>
                        )}
                    </div>
                ):(
                    <h2>Загрузка</h2>
                )}
            </div>

        </div>
    )

}
export default ProfilePage