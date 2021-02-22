import * as React from "react";
import {useState, useEffect} from "react";
import Axios from "axios";
import swal from "sweetalert";

import styles from "../FileInput/FileInput.module.scss";
import Button from "@material-ui/core/Button";


const FileInput = () =>{
const [UserImage, setUserImage] = useState("")
  useEffect(() => {
    Axios.get("http://localhost:3001/getImage", {
        headers: {
          "id" : localStorage.getItem("id"),
        },
        
    })
     .then((response)=>{
        setUserImage(response.data[0].Passport);
     })
}, [])

  const [IMG, setIMG] = useState("");

const uploadPicture = (e) => {
    const formData = new FormData(); //sends image to the backend 
    formData.append('img', IMG);
    Axios.put("http://localhost:3001/img/upload", formData,{
      headers:{
        'Content-Type' : 'multipart/form-data',
        'id': localStorage.getItem("id"),
      }
    }).then((response)=>{
      if(response.data.message == "Passport Uploaded"){
        swal({
          title: "Uploaded",
          text: "Profile Picture Updated",
          icon: "success",
          timer: 2000,
        })
      }
    })
  }; 

  const handleUpload = (e) => {
    setIMG(
        e.target.files[0]
    );
}
  return(
    <>
      <div className={styles.card}>
      <div className={styles.secondChildCont}>
        <img src={String(UserImage)}/> 
      </div>
      <form>
        <div className={styles.formfile}>
          <input type = "file" id = "file" name="image" accept="image/*" onChange = {handleUpload}/>
        </div>
        <div className={styles.btn}>
        <Button 
          onClick={uploadPicture}  
          style={{
            background: "green", 
            color: "white", 
            fontWeight: "bold", 
            width:"100%"
            }}>
              Upload Picture
        </Button>
        </div>
      </form>
      </div>
    </>
  )
}
export default FileInput;