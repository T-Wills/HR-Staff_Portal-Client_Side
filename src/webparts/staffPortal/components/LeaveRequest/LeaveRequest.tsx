import * as React from "react";
import {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import {Nav} from "office-ui-fabric-react";
import {navStyles, navLinkGroups} from "../../../layout";

import styl from "../../components/Profile/Qualifications/Qualifications.module.scss";
import styles from "../Profile/Qualifications/Qualifications.module.scss";
import Header from "../Header";
import FileInput2 from "../Profile/FileInput/FileInput2";


const useStyles = makeStyles( theme => ({
    root: {
        height: "100vh",
        width: "100%",
    },

    text:{
        marginBottom:"0.7em",
    },

    step:{
        marginTop:"2rem"
    }

}));

const LeaveRequest=()=>{
    const classes = useStyles();
    const theme = useTheme();

    return(
        <div className={styl.container}>
        <div className={styl.sideNav}>
            <Nav styles = {navStyles} groups={navLinkGroups}/>
        </div>
        <div className={styles.parentCont}>
              <Header title="Appraisal Questions" /> 
                <div className={styles.childCont}>
                   <div className={styles.main}>
                   <div className={styles.grid}>
                     <FileInput2 />
                    <div className={styles.thirdChildCont}>
                        <table style={{marginLeft:"2rem", marginTop:"3rem"}}>
                           <tbody>
                               <tr>
                                   <td style={{width:"45%", fontWeight:"bold"}}>TeeWills</td>
                                   <td style={{width:"45%"}}>Business App</td>
                                   <td style={{width:"45%"}}>Intern</td>
                               </tr>
                           </tbody>
                        </table>

                        <div style={{marginTop:"2rem"}}>
                            <p style={{marginLeft:"2rem", fontSize:"12px"}}>
                                In line with the company's policy relating to annual leave, All employees must submit a formal
                                request for annual leave. A seperate form must be submited for each block of leave requested.

                                All requests are considered based on existing leave requests received by all employees, work
                                commitments and minimum staffing levels required.

                                I wish to request leave from my annual entitlements as follows:
                            </p>
                        </div>

                        <div className={styles.formCont1}>
                            <form>
                               <div className={styles.formGroupLeft}>
                               <label htmlFor="nameOfInstitution">My proposed leave dates</label>
                               <input type="text" id="nameOfInstitution" name="NameOfInstitution"  />
                               </div>

                               <div className={styles.formGroupRight}>
                               <label htmlFor="courseofstudy">Total number of working days</label>
                               <input type="text" id="courseofstudy" name="CourseOfStudy" />
                               </div>

                               <div className={styles.formGroupLeft}>
                               <label htmlFor="year">Date of request</label>
                               <input type="text" id="year" name="Year"  />
                               </div>

                               <div className={styles.formGroupRight}>
                                <Button 
                                   style={{background: "green", color: "white", fontWeight: "bold", marginTop: "0.5rem", width:"100%", height:"2rem"}}>
                                   submit
                                </Button>
                                </div>
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

export default LeaveRequest;