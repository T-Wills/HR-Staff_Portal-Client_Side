import * as React from "react";
import {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "@material-ui/core/styles";
import PieChartIcon from '@material-ui/icons/PieChart';
import Button from '@material-ui/core/Button';
import axios from "axios";
import {Nav, values} from "office-ui-fabric-react";
import Navbar from "../../../layout";
import swal from "sweetalert";

import styl from "../../components/Profile/Qualifications/Qualifications.module.scss";
import StepperWithoutButtons from "../Stepper/StepperWithoutButtons";
import styles from "../Profile/Qualifications/Qualifications.module.scss";
import Header from "../Header";
import AppraisalB from "./AppraisalB"
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

    useEffect(() => {
        axios.get("http://localhost:3001/user", {
            headers: {
                "x-access-token" : localStorage.getItem("token"),
            },
        })
        .then((response)=>{
            setUser(response.data);
            localStorage.setItem('department', response.data[0].Department)
        });
        axios.get("http://localhost:3001/getNumOfQuestA").then((res)=>{
            setNumOfQuestA(res.data[0].count);
        })
        axios.get("http://localhost:3001/options").then((res)=>{
            setOption(res.data);
            //console.log(res.data)
        })
    }, [])

    const classes = useStyles();
    const theme = useTheme();

    const [quest, setQuest] = useState([]);
    const [sn, setSn] = useState('0');
    const [option, setOption] = useState([]);
    const [answer, setAnswer] = useState("");
    const [value, setValue] = useState("");
    const [user, setUser] = useState([]);
    const [NumOfQuestA, setNumOfQuestA] = useState("");
    const [showQ, setshowQ] = useState(true);
    const [showStartB, setshowStartB] = useState(false);
    const [startSectionB, setStartSectionB] = useState(false);
    const [hideB, sethideB] = useState(false);
    
    const submit = event => {
        event.preventDefault();
        
        axios.post(`http://localhost:3001/nextquestions/`, {
        sn: sn,
        }).then((res)=>{
            setQuest(res.data);
            setSn(res.data[0].SN);
           // console.log(res.data);
            setshowQ(false)
        });   
    } 

    const handleNext = event => {
        event.preventDefault();
        if(!value){
            swal({
                title: "Note",
                text: "No option selected",
                icon: "warning",
                timer: 2000,
            })
        }else{
            axios.post(`http://localhost:3001/nextquestions/`, {
            sn: sn,
            user: localStorage.getItem("id"),
            section: 'A',
            quarter: 'First Quarter',
            questionN: sn,
            value: value,  
            }).then((res)=>{
            setQuest(res.data);
            setSn(res.data[0].SN);
            console.log(res.data);
        }); 
        setValue('');
        }
    }  
   
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

    const startB = (e) =>{
    e.preventDefault();
    setStartSectionB(true);
    sethideB(true);
    }

    const handleSubmitA = (e) =>{
    e.preventDefault();
        axios.post(`http://localhost:3001/nextquestions/`, {
        sn: sn,
        user: localStorage.getItem("id"),
        section: 'A',
        quarter: 'First Quarter',
        questionN: sn,
        value: value,  
        }).then((res)=>{
            if(res.data){
                swal({
                    title: "Success",
                    text: "Appraisal Section A Submitted",
                    icon: "success",
                    timer: 2000,
                })
            setshowStartB(!showStartB)
            }
        })
    }

    return(
    <div className={styl.container}>
        <div className={styl.sideNav}>
            <Navbar />
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
                    {showStartB ? 
                        hideB ? null :
                        <Button
                        variant="contained"
                        style={{background:"green", color:"white", fontSize:"10px", width:"25%", margin: "0 auto"}}
                        startIcon={<PieChartIcon />}
                        onClick = {startB}
                        >
                        Start Section B
                        </Button>

                        : 

                        <>
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
                                            {option.map((val)=>{
                                                return <div key={val.value} >
                                                <input name= "option" type="radio" key={val.value} value={val.value} onChange={(e) => {setValue(e.target.value);}}/> {val.answer}
                                                </div>
                                            })}
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
                                    {
                                        (sn == "1") ?
                                            <Button 
                                            variant="contained"
                                            style={{background:"green", color:"white", fontSize:"10px", width:"17%", marginLeft:"1rem"}}
                                            startIcon={<PieChartIcon />}
                                            onClick= {handleNext}
                                            >
                                            Next 
                                            </Button> 
                                            :
                                            <>
                                                {
                                                    (NumOfQuestA === sn) ? 
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
                                                        style={{background:"green", color:"white", fontSize:"10px", width:"30%"}}
                                                        startIcon={<PieChartIcon />}
                                                        onClick={handleSubmitA}
                                                        >
                                                        Submit Section A
                                                        </Button>
                                                    </>
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
                                            </>
                                    }
                                    </>
                                }  
                                </div>
                            </form>
                        </>
                    }
                    {
                        startSectionB ?
                        <>
                            
                            <AppraisalB/>
                        </>
                        :
                        null
                    }
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Appraisal;