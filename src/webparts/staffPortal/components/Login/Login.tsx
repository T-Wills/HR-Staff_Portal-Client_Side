import * as React from "react";
import styles from "../Login/Login.module.scss";
import {useState} from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from "@material-ui/core/Button";
import axios from "axios";
import {Link} from "react-router-dom";
import swal from "sweetalert";
import {useHistory} from "react-router-dom";


 const Login = () => {
     const history = useHistory();

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [Error, setError] = useState("");

     const [fetchFName, setFetchFName] = useState("");
     const [fetchLName, setFetchLName] = useState("");
     const [fetchPassword, setfetchPassword] = useState("");
     const [CPassword, setCPassword] = useState("");
    
        const handleSubmit = (e) =>{
         e.preventDefault();
         axios.post("http://localhost:3001/checkUser/", {
             email: email,
         }).then((response)=>{
             if(response.data[0].FirstName){
                setFetchFName(response.data[0].FirstName)
                setFetchLName(response.data[0].LastName)
                setfetchPassword(response.data[0].Password)
             }
             else{
                swal({
                    title: "Wrong password",
                    text: "User not found",
                    icon: "error",
                    timer: 2000,
                })
             }
            
        })
     }
     const handleLogin = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3001/api/login/", {
            email: email,
            password: password,
        }).then((response)=>{
            if(response.data.auth){
                console.log(response.data)
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("id", response.data.id);
                history.push("/dashboard/");
            }
            else{setError(response.data.message)}
       })
    }
     const CreatePassword = (e) =>{
        e.preventDefault();
        if (password !== CPassword){
            swal({
                title: "Wrong password",
                text: "Password does not match",
                icon: "error",
                timer: 2000,
            })
        }
        else{
        axios.put("http://localhost:3001/createpassword", {
            Password : password,
            email: email,
        }).then((response)=>{
           
            if(response.data.auth){
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("id", response.data.id)
                history.push("/dashboard/");
            }
            
        })
       }
    }
     
        return (
            <>
            <div className={styles.staffPortal}>
                <div className={styles.container}>
                    {(!fetchFName || !fetchLName) ?
                       
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

                                          <InputLabel 
                                            htmlFor="my-input" 
                                            style={{fontSize: "10px", marginTop: "4rem"}} >
                                                Email or Username
                                          </InputLabel>

                                          <Input 
                                          id="my-input" 
                                          aria-describedby="my-helper-text" 
                                          style={{ marginTop: "5rem"}} 
                                          onChange={(e)=>{setEmail(e.target.value)}} 
                                          />

                                         <FormHelperText 
                                           id="my-helper-text" 
                                           style={{
                                             marginTop: "0.5rem", 
                                             fontSize: "8px", 
                                             fontWeight: "bold"
                                           }}
                                          > 
                                         </FormHelperText>

                                         <Button 
                                           style={{
                                               background: "orange", 
                                               color: "white", 
                                               fontWeight: "bold", 
                                               marginTop: "0.5rem"
                                           }}
                                           onClick={handleSubmit}>
                                             Next
                                         </Button>
                                    </FormControl>
                                </div>
                        </div>                
                    </div> 

                    :

                    <div className={styles.wrapper}>
                        <div className={styles.loginWrapper}>
                            <div className={styles.div}>
                                <img src="" alt="" />
                                <div className={styles.divv}>
                                    <p className={styles["lotus-p"]}>Lotus Beta Analytics</p>
                                    <p className={styles["nig-p"]}>NIGERIA LIMITED</p>
                                </div>
                                <p className={styles["staff-p"]}>Welcome {fetchFName} {fetchLName}</p>
                            </div>
                        </div>
                        {fetchPassword ?
                            <div className={styles.loginScreen}>
                                    <p className={styles["signin-text"]}>Sign in</p>
                            
                                    <div className={styles["formcontrol-container"]}>
                                    
                                        <FormControl>
                                        <div style={{fontSize: "10px", marginTop: "4rem"}}>Password</div>

                                        <Input 
                                        type="password" 
                                        id="my-input" 
                                        aria-describedby="my-helper-text" 
                                        style={{ marginTop: "10px"}} 
                                        onChange={(e)=>{setPassword(e.target.value)}} 
                                        />
                                        

                                        <FormHelperText 
                                        id="my-helper-text" 
                                        style={{marginTop: "0.5rem", fontSize: "8px", fontWeight: "bold"}}>
                                            {Error}  
                                        </FormHelperText>

                                        <Button 
                                            style={{
                                                background: "orange", 
                                                color: "white", 
                                                fontWeight: "bold", 
                                                marginTop: "1rem"
                                            }}
                                            onClick={handleLogin}>
                                            Login
                                        </Button>

                                        </FormControl>
                                    </div>
                                </div>
                              : 
                              <div className={styles.loginScreen}>
                              <p className={styles["cp-text"]}>Create Password</p>
                      
                              <div className={styles["formcontrol-container"]}>
                                
                                  <FormControl>
                                  {/* <InputLabel 
                                      htmlFor="my-input" 
                                      style={{fontSize: "10px", marginTop: "4rem"}}>
                                          Password
                                  </InputLabel> */}
                                    <div style={{fontSize: "10px", marginTop: "4rem"}}>Password</div>
                                  <Input 
                                  type="password" 
                                  id="my-input" 
                                  aria-describedby="my-helper-text" 
                                  style={{ marginTop: "10px"}} 
                                  onChange={(e)=>{setPassword(e.target.value)}} 
                                  />

                                 
                                  {/* <InputLabel 
                                      htmlFor="my-input" 
                                      style={{fontSize: "10px", marginTop: "4rem"}}>
                                          Confirm Password
                                  </InputLabel> */}
                                  <div style={{fontSize: "10px", marginTop: "20px"}}>Confirm Password</div>
                                  <Input 
                                  type="password" 
                                  id="my-input" 
                                  aria-describedby="my-helper-text" 
                                  style={{ marginTop: "10px"}} 
                                  onChange={(e)=>{setCPassword(e.target.value)}} 
                                  />
                                  
                                 
                                  <Button 
                                      style={{
                                          background: "orange", 
                                          color: "white", 
                                          fontWeight: "bold", 
                                          marginTop: "1rem",
                                        
                                      }}
                                      onClick={CreatePassword}
                                      >
                                      Set Password
                                  </Button>

                                  </FormControl>
                              </div>
                          </div>
                              }
                    </div> 
                    } 
                </div>  
            </div>
        </>

        );
}

export default Login;
