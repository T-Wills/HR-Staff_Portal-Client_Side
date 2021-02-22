import * as React from "react";
import {useState, useEffect} from "react";
import Axios from "axios";
import swal from "sweetalert";

import styles from "./FileInput.module.scss";
import Button from "@material-ui/core/Button";

const FileInput2 = () =>{
  const [IMG, setIMG] = useState({});
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
  return(
    <>
      <div className={styles.card}>
      <div className={styles.secondChildCont}>
        <img src={String(UserImage)}/> 
      </div>
      
      </div>
    </>
  )
}
export default FileInput2;