import * as React from "react";
import {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "@material-ui/core/styles";
import Axios from "axios";
import swal from "sweetalert";
import {Nav} from "office-ui-fabric-react";
import Navbar from "../../../../layout";

import styl from "../Qualifications/Qualifications.module.scss";
import styles from "../Qualifications/Qualifications.module.scss";
import Header from "../../Header";
import Button from "@material-ui/core/Button";
import NavTab from "../../NavTab/NavTab";
import FileInput2 from "../FileInput/FileInput2";

const useStyles = makeStyles( theme => ({
    root: {
        height: "100vh",
        width: "100%",
    },

}));

const Certifications = () => {

    const classes = useStyles();
    const theme = useTheme();

    const [Certification, setCertification] = useState("");
    const [DateOfIssue, setDateOfIssue] = useState("");
    const [ExpiryDate, setExpiryDate] = useState("");

    const addCertification = (e) => {
        Axios.post("http://localhost:3001/post", {
            Certification: Certification,
            DateOfIssue: DateOfIssue,
            ExpiryDate: ExpiryDate, 
        })
        e.preventDefault();
        swal({
            title: "Saved",
            text: "User Updated",
            icon: "success",
            timer: 2000,
        })
    }; 

    return(
        <div className={styl.container}>
            <div className={styl.sideNav}>
              <Navbar info="active" />
            </div>
            <div className={styles.parentCont}>
                  <Header title="Profile" />
                <div className={styles.childCont}>
                    <div className={styles.main}>
                    <div className={styles.grid}>
                    <FileInput2 />
                    <div className={styles.thirdChildCont}>
                         <NavTab />
                     
                        <div className={styles.formCont}>
                        <form>
                             <div className={styles.formGroup}>
                             <label htmlFor="certification">Certification</label>
                             <input type="text" id="certification" name="Certification" onChange={(e)=>{setCertification(e.target.value)}}/>
                             </div>

                             <div className={styles.formGroupLeft}>
                             <label htmlFor="dateOfIssue">Date of Issue</label>
                             <input type="date" id="dateOfIssue" name="DateOfIssue" onChange={(e)=>{setDateOfIssue(e.target.value)}}  />
                             </div>

                             <div className={styles.formGroupRight}>
                             <label htmlFor="expirydate">Expiry Date</label>
                             <input type="date" id="expirydate" name="ExpiryDate" onChange={(e)=>{setExpiryDate(e.target.value)}} />
                             </div>

                             <Button onClick={addCertification} style={{background: "green", color: "white", fontWeight: "bold", marginTop: "0.5rem", width:"100%"}}>Add Certification</Button>
                        </form> 
                        </div> 
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certifications