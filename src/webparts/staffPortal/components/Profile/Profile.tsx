import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "@material-ui/core/styles";
import styles from "../Profile/Profile.module.scss";
import Header from "../Header";

const useStyles = makeStyles( theme => ({
    root: {
        height: "100vh",
        width: "100%",
    },

}));

const Profile = () => {

    const classes = useStyles();
    const theme = useTheme();

    return(

        <div className={classes.root}>
            <div className={styles.sideNav}>
                <img src="" alt="" />
            </div>

            <div className={styles.parentCont}>
              <Header />

                <div className={styles.childCont}>
                 <div className={styles.secondChildCont}>
                    <p>camera caption/icon</p>
                 </div>

                 <div className={styles.thirdChildCont}>

                 </div>
                </div>
            </div>

        </div>
    )
}

export default Profile