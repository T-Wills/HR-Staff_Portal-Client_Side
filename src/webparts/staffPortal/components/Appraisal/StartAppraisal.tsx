import * as React from "react";
import {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "@material-ui/core/styles";
import { Grid} from '@material-ui/core'
import PieChartIcon from '@material-ui/icons/PieChart';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import axios from "axios";
import {Nav} from "office-ui-fabric-react";
import {navStyles, navLinkGroups} from "../../../layout";
import {useHistory} from "react-router-dom";
import styl from "../Profile/Qualifications/Qualifications.module.scss";
import StepperWithoutButtons from "../Stepper/StepperWithoutButtons";
import styles from "../Profile/Qualifications/Qualifications.module.scss"
import Header from "../Header";


const useStyles = makeStyles( theme => ({
    root: {
        height: "100vh",
        width: "100%",
    },

    text:{
        marginBottom:"0.7em",
    },

    step:{
        marginTop:" 1rem"
    }

}));

const StartAppraisal=()=>{
    const history = useHistory();
    const classes = useStyles();
    const theme = useTheme();

    const [quest, setQuest] = useState([]);
    const [user, setUser] = useState([]);
    const [sn, setsn] = useState('');

    //mount component
    // const handleSubmit = event => {
    //     event.preventDefault();
    //     axios.get(`http://localhost:3001/get/questions/`)
    //    .then((res)=>{
    //     setQuest(res.data);
    //     console.log(res.data);
    //     //setsn(2)
    //     localStorage.setItem("response", res.data)
    //     history.push("/appraisal/0")
    //    });
    // } 

    useEffect(() => {
        axios.get("http://localhost:3001/user", {
            headers: {
                "x-access-token" : localStorage.getItem("token"),
            },
        })
        .then((response)=>{
            setUser(response.data);
        });
    }, [])

    return(
        <div className={styl.container}>
        <div className={styl.sideNav}>
            <Nav styles = {navStyles} groups={navLinkGroups}/>
        </div>
        <div className={styles.parentCont}>
              <Header title="Appraisal" /> 
                <div className={styles.childCont}>

                    <div className={styles.thirdChildCont}>
                        <table style={{marginLeft:"2rem", marginTop:"3rem"}}>
                           <tbody>
                               <tr>
                                   {user.map((val)=>{
                                       return <div key={val.id}>
                                        <td style={{width:"200px", fontWeight:"bold"}}>{val.FirstName}</td>
                                        <td style={{width:"200px"}}>{val.Department}</td>
                                        <td style={{width:"30%"}}>{val.JobRole}</td>
                                        </div>
                                   })}
                                   
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

                        <div className={classes.step}>
                            <p style={{fontWeight:"bolder", fontSize:"10px", marginLeft:"2rem"}}>PERFORMANCE RATING</p>
                          <StepperWithoutButtons   />
                        </div>

                       {/* <form onSubmit={handleSubmit}>
                           <input type="hidden" name="sn" value="0" onChange={(e)=>{setsn(e.target.value);}}/>
                            
                            <Button 
                            variant="contained"
                            style={{background:"green", color:"white", width:"30%", marginLeft:"12rem", marginTop: "0.5rem"}}
                            type="submit"
                            startIcon={<PieChartIcon />}>
                                START
                            </Button>
                       </form> */}
                       <Link to="/appraisal/0" style={{background:"green", color:"white", width:"30%", marginLeft:"12rem", marginTop: "0.5rem"}}>{<PieChartIcon />} START</Link>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default StartAppraisal;