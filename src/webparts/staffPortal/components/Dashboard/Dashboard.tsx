import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "@material-ui/core/styles";
import styles from "../Dashboard/Dashboard.module.scss";
import Header from "../Header";
import Chart from "../Chart/Chart";
import Calendar from "../Calendar/Calendar";

const useStyles = makeStyles( theme => ({
    root: {
        height: "100vh",
        width: "100%",
    },

    /* secondDiv:{
        backgroundColor: theme.palette.common.black,
        width:"25%",
        height: "18%"
    },

    thirdDiv: {
        backgroundColor: theme.palette.common.white,
        width:"25%",
        height: "18%"
    } */

}));

const Dashboard = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        
        <div className={classes.root}>
            <div className={styles.sideNav}>
                <img src="" alt="" />
            </div>

            <div className={styles.parentCont}>
                <Header />

                <div className={styles.childCont}>
                   <div className={styles.innerChildCont}>
                       <div className={styles.welcomeCont}></div>

                       <div className={styles.extra}>
                           <div className={styles.firstDiv}></div>
                           <div className={styles.secondDiv}></div>
                           <div className={styles.thirdDiv}></div>
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