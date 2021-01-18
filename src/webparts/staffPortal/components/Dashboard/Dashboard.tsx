import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "@material-ui/core/styles";
import {useState, useEffect} from "react";
import Axios from "axios";
import styl from "../../components/Profile/Qualifications/Qualifications.module.scss";
import {Nav} from 'office-ui-fabric-react/lib/Nav';
import {navLinkGroups, navStyles} from '../../../layout'
 
import styles from "../Dashboard/Dashboard.module.scss";
import Header from "../Header";
import Chart from "../Chart/Chart";
import Calendar from "../Calendar/Calendar";
import { Link } from "react-router-dom";


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

    useEffect(() => {
        Axios.get("http://localhost:3001/user", {
            headers: {
                "x-access-token" : localStorage.getItem("token"),
            },
        })
        .then((response)=>{
            console.log(response.data)
            setUsername(response.data);
        });
    }, [])

    return (
    <div className={styl.container}>
    <div className={styl.sideNav}>
        <Nav styles = {navStyles} groups={navLinkGroups}/>
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
                       

                       <div className={styles.extra}>
                           <div className={styles.firstDiv}>
                               <p>Manager's appraisal ratings</p>
                           </div>
                           <div className={styles.secondDiv}>
                               <p>My appraisal ratings score</p>
                           </div>
                           <div className={styles.thirdDiv}>
                              <p>HR appraisal ratings</p>
                           </div>
                       </div>

                       <div className={styles.extraCont}>
                          <Chart />
                       </div>
                   </div>

                   <div className={styles.secondChildCont}>
                       <div className={styles.calendarCont}>
                           <div className={styles.tipDiv}>
                               {/* <p className={styles.pptext}> */}Monday Nugget{/* </p> */}
                           </div>
                           <div className={styles.nuggetDiv}>
                                <p className={styles.ptext}>
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                   Aliquam tincidunt tristique nunc, id pellentesque lacus 
                                   hendrerit aliquet. Aliquam id felis dictum, porta eros 
                                   accumsan, efficitur metus. Fusce sagittis faucibus lorem, 
                                   a porta nulla semper quis. Nullam enim mi, elementum eget 
                                   felis sit amet, venenatis lacinia leo. Mauris sollicitudin 
                                   diam sed elit pellentesque dignissim.
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