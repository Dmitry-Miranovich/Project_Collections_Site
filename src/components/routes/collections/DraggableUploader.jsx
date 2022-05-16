import React from "react";
import {AnchorButton, Intent} from "@blueprintjs/core";
import "../../../css/imageUpload.css"
import _ from "lodash"
import {Icon} from "react-icons-kit"
import {remove} from "react-icons-kit/fa/remove"


export default class DraggableUploader extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            loadedFile: ""
        }
    }

    onFileLoad(e){
        const file = e.currentTarget.files[0];
        //Create instance
        let fileReader = new FileReader();
        //Register event listeners
        fileReader.onload = () => {
            const file = {
                data: fileReader.result
            }
            this.setState({
                loadedFile: file
            })
            //this.addLoadedFile(file)
        }
        //Operation Aborted
        fileReader.onabort = () => {
            alert("Reading Aborted");
        }
        //Error when loading
        fileReader.onerror = () => {
            alert("Reading ERROR!");
        }
        //Read the file as a Data URL (which gonna give you a base64 encoded image data)
        fileReader.readAsDataURL(file);

    }

    addData(){
        const {loadedFile} = this.state
        if(loadedFile !==""){
            localStorage.setItem("uploaded-image", JSON.stringify(loadedFile))
            return(
                <div className={"file"} style={{display: "flex"}}>
                    <img src = {this.state.loadedFile.data} alt={""} style={{width: "100px"}}/>
                    <div className={"container"}>
                    <span className={"remove-btn"}>
                        <Icon icon={remove} size={19} onClick={()=>{this.removeLoadedFile(this.state.loadedFile.data)}}/>
                    </span>
                    </div>
                </div>
            )
        }
    }
    removeLoadedFile(file){
        this.setState((prevState)=>{
            let loadedFile = prevState.loadedFile
            let newLoadedFile = _.filter(loadedFile, (ldFile)=>{
                return ldFile !== file
            })
            return {loadedFile: newLoadedFile}
        })
    }
    render(){

        return(
            <div style={{display: "flex", flexDirection: "column"}}
            className={"inner-container"}>
                <div className={"sub-header"}>Drag an image</div>
                <div className={"draggable-container"}>
                    <input type={"file"}
                           id={"file-browser-input"}
                           name={"file-browser-input"}
                           ref={instance => this.fileInput = instance }
                           onDragOver={(e)=>{
                               e.preventDefault()
                               e.stopPropagation()
                           }}
                    onDrop={this.onFileLoad.bind(this)}
                    onChange={this.onFileLoad.bind(this)}
                    />
                    <div className={"files-preview_container"}>
                        {this.addData()}
                    </div>
                    <div className={"helper-text"}> Drag and drop</div>
                    <div className={"file-browser-container"}>
                        <AnchorButton text={"Browse"} intent={Intent.PRIMARY} minimal={true} onClick={()=>{
                            this.fileInput.click()
                        }}/>
                    </div>
                </div>
            </div>
        )
    }
}