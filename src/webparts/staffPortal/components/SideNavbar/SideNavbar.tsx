/* import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "@material-ui/core/styles";
import styles from "../Dashboard/Dashboard.module.scss";
import Header from "../Header";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";

const useStyles = makeStyles( theme => ({
    root: {
        height: "100vh",
        width: "100%",
    },

}));
const SideNavbar = () => {
    const classes = useStyles();
    const theme = useTheme(); 

    return (
        
            <>
               <div className={styles.sideNav}>
                <img src="" alt="" />

                <ul>
                 <li><Link to="/dashboard">Dashboard</Link></li>
                 <li><Link to="/info">Profile</Link></li>
               
                </ul>
              </div>

               <div className={styles.parentCont}>
                <Header />  
               
               </div>
            </>
    );
}

export default SideNavbar; */