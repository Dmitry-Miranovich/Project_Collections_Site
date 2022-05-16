import React from "react";
import "../../../css/collections.css"

const CollectionItem = (prop)=>{

    return(
        <div className={"collection-item-container"}>
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