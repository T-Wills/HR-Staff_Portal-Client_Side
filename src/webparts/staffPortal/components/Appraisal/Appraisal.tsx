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
import swal from "sweetalert";

import styl from "../../components/Profile/Qualifications/Qualifications.module.scss";
import StepperWithoutButtons from "../Stepper/StepperWithoutButtons";
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
        marginTop:" 1rem"
    }

}));

const Appraisal=()=>{
    const classes = useStyles();
    const theme = useTheme();

    const [quest, setQuest] = useState([]);
    const [sn, setSn] = useState('0');
    const [option, setOption] = useState("")
   /*  const [Username, setUsername] = useState("") */
    const [user, setUser] = useState([]);
    const [showQ, setshowQ] = useState(true);
    

    const handleNext = event => {
        event.preventDefault();
        if(!option){
            swal({
                title: "Note",
                text: "No option selected",
                icon: "warning",
                timer: 2000,
            })
        }
        else{
            axios.post(`http://localhost:3001/nextquestions/`, {
            sn: sn,
            } )
        .then((res)=>{
            setQuest(res.data);
            setSn(res.data[0].SN);
            console.log(res.data);
            setOption("");

        }); 
        }
    }  

    const submit = event => {
        event.preventDefault();
        
            axios.post(`http://localhost:3001/nextquestions/`, {
            sn: sn,
            } )
        .then((res)=>{
            setQuest(res.data);
            setSn(res.data[0].SN);
            console.log(res.data);
            setshowQ(false)
        }); 
        
    }  
    useEffect(() => {
        axios.get("http://localhost:3001/user", {
            headers: {
                "x-access-token" : localStorage.getItem("token"),
            },
        })
        .then((response)=>{
            console.log(response.data)
            setUser(response.data);
        });
    }, [])

    const handlePrevious = event => {
        event.preventDefault();
        axios.post(`http://localhost:3001/prevquestions/`, {
            sn: sn,
        })
       .then((res)=>{
        setQuest(res.data);
        setSn(res.data[0].SN);
        console.log(res.data);
        
       });
    } 

    return(
    <div className={styl.container}>
        <div className={styl.sideNav}>
            <Nav styles = {navStyles} groups={navLinkGroups}/>
        </div>
        <div className={styles.parentCont}>
            <Header title="Appraisal" /> 
            <div className={styles.childCont}>
            <div className={styles.main}>
            <div className={styles.grid}>
                <FileInput2 />
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

                    <form>
                        <div style={{marginTop:"-1.5rem"}}>
                            {quest.map((val)=>{
                            return<div key={val.SN}>    
                            <p style={{fontSize:"13px", fontWeight:"bolder", marginLeft:"2rem"}}>{val.Title}</p>
                            <p style={{marginLeft:"2rem",fontSize:"13px"}}>{val.Description}</p>        
                        </div>
                        })}
                        {showQ ? 
                        null
                        :
                        <div style={{marginLeft:"2rem", fontSize:"12px"}}>
                            <input type="radio" value="5" name="group2" onChange={(e)=>{setOption(e.target.value)}} /> Outstanding
                            <br/>
                            <input type="radio" value="4" name="group2" onChange={(e)=>{setOption(e.target.value)}} /> Superior
                            <br/>
                            <input type="radio" value="3" name="group2" onChange={(e)=>{setOption(e.target.value)}} /> Fully Acceptable
                            <br/>
                            <input type="radio" value="2" name="group2" onChange={(e)=>{setOption(e.target.value)}} /> Conditional
                            <br/>
                            <input type="radio" value="1" name="group2" onChange={(e)=>{setOption(e.target.value)}} /> Unsatisfactory
                        </div>
                        }
                        
                        </div>
                            
                        <div className={styles.btn}>
                            {showQ ? 
                            <Button
                            variant="contained"
                            style={{background:"green", color:"white", fontSize:"10px", width:"19%"}}
                            startIcon={<PieChartIcon />}
                            onClick={submit}
                            >
                            Begin
                            </Button>
                            :
                            <>
                            <Button
                            variant="contained"
                            style={{background:"green", color:"white", fontSize:"10px", width:"19%"}}
                            startIcon={<PieChartIcon />}
                            onClick={handlePrevious}
                            >
                            Previous
                            </Button>
                            <Button 
                            variant="contained"
                            style={{background:"green", color:"white", fontSize:"10px", width:"17%", marginLeft:"1rem"}}
                            startIcon={<PieChartIcon />}
                            onClick= {handleNext}
                            >
                                Next 
                            </Button>
                            </>
                            }
                            

                            
                            
                        </div>
                    </form>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Appraisal;