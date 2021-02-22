import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "@material-ui/core/styles";
import {useState, useEffect} from "react";
import Axios from "axios";
import styl from "../../components/Profile/Qualifications/Qualifications.module.scss";

// import {navLinkGroups, navStyles} from '../../../layout'
 
import styles from "../Dashboard/Dashboard.module.scss";
import Header from "../Header";
import Chart from "../Chart/Chart";
import Calendar from "../Calendar/Calendar";
import { Link } from "react-router-dom";
import Navbar from "../../../layout";



const Avatar = require("../../../../Images/Group 3.png")

const useStyles = makeStyles( theme => ({
    root: {
        height: "100vh",
        width: "100%",
    },

}));

const Dashboard = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [username, setUsername] = useState([]);
    const [score, setScore] = useState([]);
    const [kpiscore, setkpiScore] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:3001/user", {
            headers: {
                "x-access-token" : localStorage.getItem("token"),
            },
        })
        .then((response)=>{
            // console.log(response.data)
            setUsername(response.data);
        });

        Axios.get("http://localhost:3001/getScore", {
            headers: {
                "id" : localStorage.getItem("id"),
            },
        })
        .then((response)=>{
            setScore(response.data)
            setkpiScore([response.data[0].staff, response.data[0].hr, response.data[0].overall])
            console.log(response.data)
        });

        Axios.get("http://localhost:3001/dailynugget")
        .then((response)=>{
            setTitle(response.data[0].heading)
            setContent(response.data[0].content)
        })
    }, [])


    return (
    <div className={styl.container}>
    <div className={styl.sideNav}>
       <Navbar dashboard="active" />
    </div>
            
         <div className={styles.parentCont}>
               <Header title="Dashboard"/>  
                <div className={styles.childCont}>
                   <div className={styles.innerChildCont}>
                       {username.map((data)=>{
                        return <div key={data.id}>
                          <div className={styles.welcomeCont}>
                              <div className={styles.imgcont}>
                                <img src={String(Avatar)}/>
                              </div>
                              <div className={styles.welcomeText}>Hello {data.FirstName} {data.MiddleName}!</div>
                              <div className={styles.welcomeText1}>Good to see you again.</div>
                            </div>       
                        </div>
                       })}
                 {/*    <div  className={styles.extra}> */}
                        {score.map((scores)=>{ 
                              return <div key={scores.sn} className={styles.extra}>
                               <div className={styles.firstDiv}>
                               <p>{scores.staff}</p>
                                   <p>My appraisal ratings score</p>
                               </div>
                               <div className={styles.secondDiv}>
                               <p>{scores.hr}</p>
                                   <p>HR appraisal ratings</p>
                               </div>
                               <div className={styles.thirdDiv}>
                               <p>{scores.overall}</p>
                                  <p>Overall appraisal ratings</p>
                               </div> 
                               </div>
                          })    
                        }
                {/*     </div> */}

                       <div className={styles.extraCont}>
                          <Chart 
                          dataValue = {kpiscore} 
                          />
                       </div>
                   </div>

                   <div className={styles.secondChildCont}>
                       <div className={styles.calendarCont}>
                           <div className={styles.tipDiv}>
                               {/* <p className={styles.pptext}> */}Daily Nugget{/* </p> */}
                           </div>
                           <div className={styles.nuggetDiv}>
                                <p className={styles.ptext}>
                                   <div style={{fontWeight: 'bolder'}}>{title}</div>
                                   <div>{content}</div>                                   
                                </p>
                           </div>
                           <div className={styles.calendarDiv}>
                               <Calendar />
                           </div>
                       </div>
                   </div>
                </div>
            </div>
         </div>
    );
}

export default Dashboard;