import * as React from "react";
import styles from "../Login/Login.module.scss";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


 const Login = () => {
     
        return (
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
                                <p  className={styles["staff-p"]}>Staff Portal</p>
                            </div>
                        </div>
                        <div className={styles.loginScreen}>
                            
                                <p className={styles["signin-text"]}>Sign in</p>
                           
                                <div className={styles["formcontrol-container"]}>
                                    <FormControl>
                                      <InputLabel htmlFor="my-input" style={{fontSize: "10px", marginTop: "4rem"}} >Email or Username</InputLabel>
                                      <Input id="my-input" aria-describedby="my-helper-text" style={{ marginTop: "5rem"}} />
                                      <FormHelperText 
                                      id="my-helper-text" 
                                      style={{marginTop: "0.5rem", fontSize: "8px", fontWeight: "bold"}}>
                                          CREATE AN ACCOUNT
                                      </FormHelperText>

                                      <Button style={{background: "orange", color: "white", fontWeight: "bold", marginTop: "0.5rem"}}>Next</Button>
                                    </FormControl>
                                </div>
                           
                        </div>
                    </div>
                </div>
            </div>

        );
}

export default Login;
