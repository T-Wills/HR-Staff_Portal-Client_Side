import * as React from "react";
import {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "@material-ui/core/styles";
import { Grid} from '@material-ui/core'
import PieChartIcon from '@material-ui/icons/PieChart';
import Button from '@material-ui/core/Button';

import StepperWithoutButtons from "../Stepper/StepperWithoutButtons";
import styles from "../Profile/Qualifications/Qualifications.module.scss";
import Header from "../Header";


const useStyles = makeStyles( theme => ({
    root: {
        height: "100vh", 
        width: "100%",
    },

    text:{
        marginBottom:"0.7em",
    },

    /* step:{
        marginTop:"2rem",
    } */

}));

const Appraisal=()=>{
    const classes = useStyles();
    const theme = useTheme();

    

    return(
        <div className={styles.parentCont}>
              <Header title="Appraisal Questions" /> 
                <div className={styles.childCont}>
                    <div className={styles.secondChildCont}>
                       <p>camera caption/icon</p>
                    </div>

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
                            <p style={{marginLeft:"2rem", fontSize:"12px"}}>This form is used to evaluate supervisory, professional and contract employees.
                                Assign a number for each rating within the scale and write that number in the
                                corresponding box. Points will be totalled and averaged for overall performance
                                score.
                            </p>
                        </div>

                        <p style={{fontWeight:"bolder", fontSize:"10px", marginLeft:"2rem"}}>PERFORMANCE RATING</p>
                        <StepperWithoutButtons />

                        
                    </div>
                </div>
            </div>
    )
}

export default Appraisal;