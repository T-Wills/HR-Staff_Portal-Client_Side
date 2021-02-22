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
//import { Link } from "../../NavTab/node_modules/react-router-dom";
import FileInput2 from "../FileInput/FileInput2";

const useStyles = makeStyles( theme => ({
    root: {
        height: "100vh",
        width: "100%",
    },

}));

const Qualifications = () => {

    const classes = useStyles();
    const theme = useTheme();

    const [NameOfInstitution, setNameOfInstitution] = useState("");
    const [CourseOfStudy, setCourseOfStudy] = useState("");
    const [Year, setYear] = useState("");
    const [Certification, setCertification] = useState("");

    const addQualification = (e) => {
        Axios.post("http://localhost:3001/add", {
            NameOfInstitution: NameOfInstitution,
            CourseOfStudy: CourseOfStudy,
            Year: Year, 
            Certification: Certification, 
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
                         <div className={styles.tblProfile}>
                        <div className={styles.formCont}>
                           <form>
                            <div className={styles.formGroupLeft}>
                            <label htmlFor="nameOfInstitution">Name of Institution</label>
                            <input type="text" id="nameOfInstitution" name="NameOfInstitution" onChange={(e)=>{setNameOfInstitution(e.target.value)}} />
                            </div>

                            <div className={styles.formGroupRight}>
                            <label htmlFor="courseofstudy">Course Of Study</label>
                            <input type="text" id="courseofstudy" name="CourseOfStudy" onChange={(e)=>{setCourseOfStudy(e.target.value)}} />
                            </div>

                            <div className={styles.formGroupLeft}>
                            <label htmlFor="year">Year</label>
                            <input type="text" id="year" name="Year" onChange={(e)=>{setYear(e.target.value)}} />
                            </div>

                            <div className={styles.formGroupRight}>
                            <label htmlFor="certification">Certification</label>
                            <select name="Certification" id="certification" onChange={(e)=>{setCertification(e.target.value)}} >
                                <option value="">BSC</option>
                                <option value="">MSC</option>
                                <option value="">OND</option>
                                <option value="">HND</option>
                            </select>
                            </div>

                            <Button onClick={addQualification} style={{background: "green", color: "white", fontWeight: "bold", marginTop: "0.5rem", width:"100%"}}>Add Qualifications</Button>
                            </form> 
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

export default Qualifications