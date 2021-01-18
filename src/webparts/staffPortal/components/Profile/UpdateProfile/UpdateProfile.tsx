import * as React from "react";
import {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "@material-ui/core/styles";
import Axios from "axios";
import swal from "sweetalert";
import {Nav} from "office-ui-fabric-react";
import {navStyles, navLinkGroups} from "../../../../layout";

import styl from "../Qualifications/Qualifications.module.scss";
import styles from "../Qualifications/Qualifications.module.scss";
import Header from "../../Header";
import Button from "@material-ui/core/Button";
import Navbar from "../../Navbar/Navbar";
import FileInput from "../FileInput/FileInput";

const useStyles = makeStyles( theme => ({
    root: {
        height: "100vh",
        width: "100%",
    },

}));

const UpdateProfile = () => {

    const classes = useStyles();
    const theme = useTheme();

    
    const [DateOfBirth, setDateOfBirth] = useState("");
    const [MaritalStatus, setMaritalStatus] = useState("");
    const [MobileNumber, setMobileNumber] = useState("");
    const [CUGNumber, setCUGNumber] = useState("");
    const [PersonalEmail, setPersonalEmail] = useState("");
    const [HomeAddress, setHomeAddress] = useState("");
    const [EmergencyContact_Name, setEmergencyContact_Name] = useState("");
    const [EmergencyContact_MobileNumber, setEmergencyContact_MobileNumber] = useState("");
    const [Relationship, setRelationship] = useState("");
    const [EmergencyContact_HomeAddress, setEmergencyContact_HomeAddress] = useState("");
    const [IMG, setIMG] = useState({});
    
    const StaffID = 10001;
    const submitProfile = (e) => {
        Axios.put("http://localhost:3001/employee/update", {
            StaffID : StaffID,
            DateOfBirth: DateOfBirth, 
            MobileNumber: MobileNumber,  
            CUGNumber: CUGNumber,
            PersonalEmail: PersonalEmail,
            HomeAddress: HomeAddress, 
            MaritalStatus: MaritalStatus,
            EmergencyContact_Name: EmergencyContact_Name, 
            EmergencyContact_MobileNumber: EmergencyContact_MobileNumber, 
            Relationship: Relationship, 
            EmergencyContact_HomeAddress: EmergencyContact_HomeAddress,
           /*  image: IMG, */
        }); 
    
        e.preventDefault();
        swal({
            title: "Saved",
            text: "User Updated",
            icon: "success",
            timer: 2000,
        })
    }; 

    const [userDataEdit, setUserDataEdit] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/user", {
            headers: {
                "x-access-token" : localStorage.getItem("token"),
            },
        })
         .then((response)=>{
            setUserDataEdit(response.data);
         })
    }, [])

    return(
    <div className={styl.container}>
        <div className={styl.sideNav}>
            <Nav styles = {navStyles} groups={navLinkGroups}/>
        </div>

        <div className={styles.parentCont}>
            <Header title="Profile" />  
            <div className={styles.childCont}>
                <div className={styles.main}>
                    <div className={styles.grid}> 
                        <FileInput />
                        <div className={styles.thirdChildCont}>
                            <Navbar />

                            <div className={styles.formCont}>
                                <div className={styles.tblProfile}>
                                    {userDataEdit.map((details)=>{
                                    return <div key={details.StaffID}>
                                    <form>
                                        <p style={{fontWeight:"bold", fontSize:"13px", marginTop:"0"}}>PERSONAL INFO</p>

                                    <div className={styles.formGroupLeft}>
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" value={details.FirstName} readOnly id="firstName" name="FirstName"  />
                                    </div>

                                    <div className={styles.formGroupRight}>
                                    <label htmlFor="middleName">Middle Name</label>
                                    <input type="text" value={details.MiddleName} readOnly id="middleName" name="MiddleName"  />
                                    </div>
      
                                    <div className={styles.formGroupLeft}>
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" value={details.LastName} readOnly id="lastName" name="LastName"  />
                                    </div>
      
                                    <div className={styles.formGroupRight}>
                                    <label htmlFor="dateOfBirth">Date of Birth</label>
                                    <input type="date" id="dateOfBirth" name="DateOfBirth" onChange={(e)=>{setDateOfBirth(e.target.value)}} />
                                    </div>

                                    <div className={styles.formGroupLeft}>
                                    <label htmlFor="maritalStatus">Marital Status</label>
                                    <select name="MaritalStatus" id="MaritalStatus" onChange={(e)=>{setMaritalStatus(e.target.value)}}>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                    </select>
                                    </div>
      
                                    <div className={styles.formGroupRight}>
                                    <label htmlFor="mobileNumber">Mobile Number</label>
                                    <input type="text" id="mobileNumber" name="MobileNumber" onChange={(e)=>{setMobileNumber(e.target.value)}} />
                                    </div>

                                    <div className={styles.formGroupLeft}>
                                    <label htmlFor="cugNumber">CUG Number</label>
                                    <input type="text" id="cugNumber" name="CUGNumber" onChange={(e)=>{setCUGNumber(e.target.value)}} />
                                    </div>
      
                                    <div className={styles.formGroupRight}>
                                    <label htmlFor="personalEmail">Personal Email</label>
                                    <input type="email" id="personalEmail" name="PersonalEmail" onChange={(e)=>{setPersonalEmail(e.target.value)}} />
                                    </div>
    
                                    <div className={styles.formGroupLeft}>
                                    <label htmlFor="officialEmail"> Official Email</label>
                                    <input type="email" value={details.OfficialEmail} readOnly id="officialEmail" name="OfficialEmail"  />
                                    </div>

                                    <div className={styles.formGroupRight}>
                                    <label htmlFor="homeAddress">Home Address</label>
                                    <input type="text" id="homeAddress" name="HomeAddress" onChange={(e)=>{setHomeAddress(e.target.value)}} />
                                    </div>
                         
                                        <p style={{fontWeight:"bold", fontSize:"13px", marginBottom:"0"}}>EMERGENCY CONTACT</p>
                              
                                    <div className={styles.formGroupLeft}>
                                    <label htmlFor="emergencyContact_Name">Name</label>
                                    <input type="text" id="emergencyContact_Name" name="EmergencyContact_Name" onChange={(e)=>{setEmergencyContact_Name(e.target.value)}} />
                                    </div>
                              
                                    <div className={styles.formGroupRight}>
                                    <label htmlFor="emergencyContact_MobileNumber">Mobile Number</label>
                                    <input type="text" id="emergencyContact_MobileNumber" name="EmergencyContact_MobileNumber" onChange={(e)=>{setEmergencyContact_MobileNumber(e.target.value)}} />
                                    </div>

                                    <div className={styles.formGroupLeft}>
                                    <label htmlFor="relationship">Relationship</label>
                                    <input type="text" id="relationship" name="Relationship" onChange={(e)=>{setRelationship(e.target.value)}} />
                                    </div>
      
                                    <div className={styles.formGroupRight}>
                                    <label htmlFor="emergencyContact_HomeAddress">Home Address</label>
                                    <input type="text" id="emergencyContact_HomeAddress" name="EmergencyContact_HomeAddress" onChange={(e)=>{setEmergencyContact_HomeAddress(e.target.value)}} />
                                    </div>

                                    <Button onClick={submitProfile}  style={{background: "green", color: "white", fontWeight: "bold", marginTop: "0.5rem", width:"100%"}}>Update Profile</Button>
                                    </form>
                                    </div>
                                    })}
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateProfile

       