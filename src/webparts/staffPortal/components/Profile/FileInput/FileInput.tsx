import * as React from "react";
import {useState, useEffect} from "react";
import Axios from "axios";
import swal from "sweetalert";

import styles from "../FileInput/FileInput.module.scss";
import Button from "@material-ui/core/Button";

const FileInput = () =>{

  const [IMG, setIMG] = useState({});

  const StaffID = 10001;
  const uploadPicture = (e) => {
    Axios.post("http://localhost:3001/imageupload", {
        StaffID : StaffID,
        image: IMG
    }); 
    console.log(IMG)
    e.preventDefault();
    swal({
        title:"Saved",
        text: "Image uploaded",
        icon: "success",
        timer: 2000,
    })
  }; 

  const uploadImage = (e)=>{
    const reader = new FileReader();
    reader.onload = ()=>{
        if(reader.readyState === 2){
           setIMG(JSON.stringify(reader.result))
        }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  return(
    <>
      <div className={styles.card}>
      <div className={styles.secondChildCont}>
        <img src={String(IMG)}/> 
      </div>
      <form>
        <div className={styles.formfile}>
          <input type="file" name="image" accept="image/*" onChange = {uploadImage}/>
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