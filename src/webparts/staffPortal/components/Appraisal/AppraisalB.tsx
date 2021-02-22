import * as React from "react";
import {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "@material-ui/core/styles";
import PieChartIcon from '@material-ui/icons/PieChart';
import Button from '@material-ui/core/Button';
import axios from "axios";
import swal from "sweetalert";
import StepperWithoutButtons from "../Stepper/StepperWithoutButtons";
import styles from "../Profile/Qualifications/Qualifications.module.scss";

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

const AppraisalB=()=>{

    useEffect(() => {
        axios.get("http://localhost:3001/user", {
            headers: {
                "x-access-token" : localStorage.getItem("token"),
            },
        })
        .then((response)=>{
            setUser(response.data);
            setDepartment(response.data[0].Department)
        });
        axios.get(`http://localhost:3001/getNumOfQuestB`,{
            headers: {
                "dept" : localStorage.getItem("department"),
            },
        }).then((res)=>{
            setNumOfQuestB(res.data[0].count);
            console.log(res.data[0].count);
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
    const [department, setDepartment] = useState("");
    const [strCount, setstrCount] = useState("");
    const [value, setValue] = useState("");
    const [user, setUser] = useState([]);
    const [count, setCount] = useState(2);
    const [NumOfQuestB, setNumOfQuestB] = useState("");
    const [showQ, setshowQ] = useState(true);
    
    const submitB = event => {
        event.preventDefault();
        
            axios.post(`http://localhost:3001/nextquestionsB/`, {
            sn: sn,
            dept: department,
        })
        .then((res)=>{
            setQuest(res.data);
            setSn(res.data[0].sn);
           console.log(res.data);
           console.log(res.data[0].sn);
            setshowQ(false)
        }); 
        
    } 

    const handleNextB = event => {
        event.preventDefault();
        if(!value){
            swal({
                title: "Note",
                text: "No option selected",
                icon: "warning",
                timer: 2000,
            })
        }
        else{
           
            setCount(count + 1);
            setstrCount(JSON.stringify(count));
            axios.post(`http://localhost:3001/nextquestionsB/`, {
            sn: sn,
            dept: department,
            user: localStorage.getItem("id"),
            section: 'B',
            quarter: 'First Quarter',
            questionN: sn,
            value: value,  
            })
            .then((res)=>{
            setQuest(res.data);
            setSn(res.data[0].sn);
            console.log(NumOfQuestB);
            console.log(strCount);
           console.log(count)
        }); 
        setValue('');
        }
    }  

    const handlePreviousB = event => {
        
        // setCount(count - 1);
        event.preventDefault();
        axios.post(`http://localhost:3001/prevquestionsB/`, {
            sn: sn,
        })
       .then((res)=>{
        setQuest(res.data);
        setSn(res.data[0].sn);
        console.log(res.data);
        
       });
    } 
 const handleSubmitB = (e) =>{
     e.preventDefault();
    axios.post(`http://localhost:3001/nextquestionsB/`, {
        sn: sn,
        dept: department,
        user: localStorage.getItem("id"),
        section: 'B',
        quarter: 'First Quarter',
        questionN: sn,
        value: value, 
        } ).then((res)=>{
            if(res.data){
                swal({
                    title: "Success",
                    text: "Appraisal Section B Submitted",
                    icon: "success",
                    timer: 2000,
                })
            }

        });

        axios.post("http://localhost:3001/submitAppraisal/",{
            user: localStorage.getItem("id"), 
        })
 }
 
    return(
        <>
            {department}
                <div className={classes.step}>
                    <p style={{fontWeight:"bolder", fontSize:"10px", marginLeft:"2rem"}}>PERFORMANCE RATING</p>
                    <StepperWithoutButtons />
                </div>

                <form>
                    <div style={{marginTop:"-1.5rem"}}>
                        {
                            quest.map((val)=>{
                            return <div key={val.sn}>    
                                    <p style={{fontSize:"13px", fontWeight:"bolder", marginLeft:"2rem"}}>{val.perspectives}</p>
                                    <p style={{marginLeft:"2rem",fontSize:"13px"}}>{val.measures}</p> 
                                    <p style={{marginLeft:"2rem",fontSize:"13px"}}>{val.objectives}</p>
                                    <p style={{marginLeft:"2rem",fontSize:"13px"}}>{val.targets}</p>         
                                </div>
                            })
                        }
                    { showQ ? 
                        null
                        :
                        <div style={{marginLeft:"2rem", fontSize:"12px"}}>
                            {option.map((val)=>{
                                return <div key={val.value}>
                                <input name= "option" type="radio" key={val.value} value={val.value} onChange={(e) => {setValue(e.target.value);}}/> {val.answer}
                                </div>
                                })
                            }
                        </div>
                    }
                    
                    </div>
                        
                    <div className={styles.btn}>
                        {showQ ? 
                            <Button
                            variant="contained"
                            style={{background:"green", color:"white", fontSize:"10px", width:"19%"}}
                            startIcon={<PieChartIcon />}
                            onClick={submitB}
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
                                        onClick= {handleNextB}
                                        >
                                        Next 
                                        </Button> 
                                    :
                                    <>
                                        {(strCount == NumOfQuestB) ? 
                                        <>
                                            <Button
                                            variant="contained"
                                            style={{background:"green", color:"white", fontSize:"10px", width:"19%"}}
                                            startIcon={<PieChartIcon />}
                                            onClick={handlePreviousB}
                                            >
                                            Previous
                                            </Button>
                                            <Button
                                            variant="contained"
                                            style={{background:"green", color:"white", fontSize:"10px", width:"30%"}}
                                            startIcon={<PieChartIcon />}
                                            onClick={handleSubmitB}
                                            >
                                            Finish
                                            </Button>
                                        </>
                                        :
                                        <>
                                            <Button
                                            variant="contained"
                                            style={{background:"green", color:"white", fontSize:"10px", width:"19%"}}
                                            startIcon={<PieChartIcon />}
                                            onClick={handlePreviousB}
                                            >
                                            Previous
                                            </Button>

                                            <Button 
                                            variant="contained"
                                            style={{background:"green", color:"white", fontSize:"10px", width:"17%", marginLeft:"1rem"}}
                                            startIcon={<PieChartIcon />}
                                            onClick= {handleNextB}
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
                   
    )
}

export default AppraisalB;