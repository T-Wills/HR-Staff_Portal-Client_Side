import * as React from "react";
import {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "@material-ui/core/styles";
import Axios from "axios";
import {Nav} from "office-ui-fabric-react";
import {navStyles, navLinkGroups} from "../../../../layout";

import styl from "../Qualifications/Qualifications.module.scss";
import styles from "../Qualifications/Qualifications.module.scss";
import Header from "../../Header";
import Navbar from "../../Navbar/Navbar";
import FileInput from "../FileInput/FileInput";

const useStyles = makeStyles( theme => ({
    root: {
        height: "100vh",
        width: "100%"
    },

}));

const ProfileInfo = () =>{
    const classes = useStyles();
    const theme = useTheme();

    const [profileInfoList, setprofileInfoList] = useState([]);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/user", {
            headers: {
                "x-access-token" : localStorage.getItem("token"),
            },
        })
        .then((response)=>{
            setUserData(response.data);
        });
    }, 
    [])
        return(
        <div className={styl.container}>
            <div className={styl.sideNav}>
                <Nav styles = {navStyles} groups={navLinkGroups}/>
            </div>
            <div className={styles.parentCont}>
                <Header title="Profile" />  
                <div className={styles.childCont}>
                    {/* <div className={styles.secondChildCont}></div> */}
                    <div className={styles.main}>
                        <div className={styles.grid}>
                           <FileInput />
                            <div className={styles.thirdChildCont}>
                               <Navbar /> 
                               {userData.map((details)=>{
                               return <div key={details.StaffID}>
                               <table style={{marginLeft:"1rem"}}>
                                   <tbody>  
                                       <tr>
                                           <td style={{width:"45%", fontWeight:"bold"}}>{details.FirstName}</td>
                                           <td style={{width:"45%"}}>{details.Department}</td>
                                           <td style={{width:"45%"}}>{details.JobRole}</td>
                                       </tr>
                                   </tbody>
                               </table>
                       
                               <div className={styles.tblProfile}>
                               <p style={{fontWeight:"bold", fontSize:"13px", marginBottom:"0"}}>PERSONAL INFO</p>
                       
                                <table className="table table-bordered table-responsive">
                                    <thead>
                                    </thead>
                                    <tbody>
                                    <tr>
                                    
                                        <tr style={{lineHeight:"1.5rem"}}>
                                        <td>Gender: </td>{details.Gender}
                                        </tr>

                                        <tr style={{lineHeight:"1.5rem"}}>
                                        <td>Date Of Birth: </td>{details.DateOfBirth}
                                        </tr>

                                        <tr style={{lineHeight:"1.5rem"}}>
                                        <td>Marital Status: </td>{details.MaritalStatus}
                                        </tr>

                                        <tr style={{lineHeight:"1.5rem"}}>
                                        <td>Mobile Number: </td>{details.MobileNumber}
                                        </tr>
                                        <tr></tr>

                                        <tr style={{lineHeight:"1.5rem"}}>
                                        <td>CUG Number: </td>{details.CUGNumber}
                                        </tr>
                                        <tr></tr>

                                        <tr style={{lineHeight:"1.5rem"}}>
                                        <td>Personal Email: </td>{details.PersonalEmail}
                                        </tr>
                                        <tr></tr>

                                        <tr style={{lineHeight:"1.5rem"}}>
                                        <td>Official Email: </td>{details.OfficialEmail}
                                        </tr>
                                        <tr></tr>

                                        <tr style={{lineHeight:"1.5rem"}}>
                                        <td>Home Address: </td>{details.HomeAddress}
                                        </tr>
                                        <tr></tr>

                                        <p style={{fontWeight:"bold", fontSize:"13px", marginBottom:"0"}}>EMERGENCY CONTACT</p>

                                        <tr style={{lineHeight:"1.5rem"}}>
                                        <td>Name: </td>{details.EmergencyContact_Name}
                                        </tr>
                                        <tr></tr>

                                        <tr style={{lineHeight:"1.5rem"}}>
                                        <td>Mobile Number: </td> {details.EmergencyContact_MobileNumber}
                                        </tr>
                                        <tr></tr>

                                        <tr style={{lineHeight:"1.5rem"}}>
                                        <td>Relationship: </td>{details.Relationship}
                                        </tr>
                                        <tr></tr>

                                        <tr style={{lineHeight:"1.5rem"}}>
                                        <td>Home Address: </td>{details.EmergencyContact_HomeAddress}
                                        </tr>
                                        <tr></tr>
                                    </tr>
                                    </tbody>
                                </table>
                           </div>
                       </div>
                       })}
                    </div>
                    </div>
                    </div> 
                </div>
            </div>
        </div>
   
    )
}
export default ProfileInfo