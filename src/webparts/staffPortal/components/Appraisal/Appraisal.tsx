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

import styl from "../../components/Profile/Qualifications/Qualifications.module.scss";
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

    step:{
        marginTop:" 1rem"
    }

}));

const Appraisal=()=>{
    const classes = useStyles();
    const theme = useTheme();

    useEffect(() => {
        axios.get("http://localhost:3001/user", {
            headers: {
                "x-access-token" : localStorage.getItem("token"),
            },
        })
        .then((response)=>{
            console.log(response.data)
            setUsername(response.data);
        });
    }, [])

    const [quest, setQuest] = useState([]);
    const [sn, setsn] = useState("");
    const [option, setOption] = useState("")
    const [Username, setUsername] = useState("")
    

    const handleNext = event => {
        event.preventDefault();
        axios.post(`http://localhost:3001/get/nextquestions/`)
       .then((res)=>{
        setQuest(res.data);
        console.log(res.data);
       });

    //    axios.post("http://localhost:3001/KPI", {
    //     sn: sn, 
    //     staffEmail: Username,
    //     answer: option,
    //   })
         
    }  

    const handlePrevious = event => {
        event.preventDefault();
        //let questNo = sn ;
        //let nextQuestNo = questNo - 1;
        //setsn(nextQuestNo);

        axios.post(`http://localhost:3001/get/prevquestions/`)
       .then((res)=>{
        setQuest(res.data);
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
                <form>
                        <div style={{marginTop:"-1.5rem"}}>
                            {quest.map((val)=>{
                            return<div key={val.SN}>
                                    
                            <p style={{fontSize:"10px", fontWeight:"bolder", marginLeft:"2rem"}}>{val.Title}</p>
                            <p style={{marginLeft:"2rem",fontSize:"13px"}}>{val.Description}</p>
                                    
                        </div>
                        })}

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
                             <input type="hidden" name="sn" value="0" onChange={(e)=>{setsn(e.target.value)}} /> 
                            </div>
                            
                        <div className={styles.btn}>
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
                        </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Appraisal;