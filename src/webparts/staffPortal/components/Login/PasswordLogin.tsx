import * as React from "react";
import styles from "../Login/Login.module.scss";
import {useState} from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from "@material-ui/core/Button";
import Axios from "axios";
import {Link} from "react-router-dom";
import swal from "sweetalert";


 const PasswordLogin = () => {

    const [fetchFName, setFetchFName] = useState("");
    const [fetchLName, setFetchLName] = useState("");
    const [Password, setPassword] = useState("");
    const [CPassword, setCPassword] = useState("");

    const handleLogin = (e) =>{
        e.preventDefault();
        Axios.post("http://localhost:3001/createpassword", {
            Password : Password,
        }).then((response)=>{
            
        })
       
    }
     
        return (
            <>
                <div className={styles.staffPortal}>
                    <div className={styles.container}>
                        <div className={styles.wrapper}>
                            <div className={styles.loginWrapper}>
                                <div className={styles.div}>
                                    <img src="" alt="" />
                                    <div className={styles.divv}>
                                        <p className={styles["lotus-p"]}>Lotus Beta Analytics</p>
                                        <p className={styles["nig-p"]}>NIGERIA LIMITED</p>
                                    </div>
                                    <p className={styles["staff-p"]}>Welcome  {fetchFName} {fetchLName}</p>
                                </div>
                           </div>
                           
                           <div className={styles.loginScreen}>
                                <p className={styles["cp-text"]}>Create Password</p>
                                <div className={styles["formcontrol-container"]}>
                                    <FormControl>
                                        <InputLabel 
                                        htmlFor="my-input" 
                                        style={{
                                            fontSize: "10px", 
                                            marginTop: "4rem"
                                        }} 
                                        required>
                                        Password
                                        </InputLabel>

                                        <Input 
                                        type="password"
                                        id="my-input" 
                                        aria-describedby="my-helper-text" 
                                        style={{ marginTop: "5rem"}} 
                                        onChange={(e)=>{setPassword(e.target.value)}} 
                                        />

                                        <InputLabel 
                                        htmlFor="my-input" 
                                        style={{
                                            fontSize: "10px", 
                                            marginTop: "8rem"
                                        }} 
                                        required>
                                        Confirm Password
                                        </InputLabel>

                                        <Input 
                                        type="password" 
                                        id="my-input" 
                                        aria-describedby="my-helper-text" 
                                        style={{ marginTop: "3rem"}} 
                                        onChange={(e)=>{setCPassword(e.target.value)}} 
                                        />

                                        <FormHelperText 
                                        id="my-helper-text" 
                                        style={{marginTop: "0.5rem", fontSize: "8px", fontWeight: "bold"}}>
                                     
                                        </FormHelperText>

                                        <Button 
                                        style={{
                                            background: "orange", 
                                            color: "white", 
                                            fontWeight: "bold", 
                                            marginTop: "0.5rem"
                                        }}
                                        onClick={handleLogin}
                                        >
                                        Login
                                        </Button>
                                    </FormControl>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
}

export default PasswordLogin;
