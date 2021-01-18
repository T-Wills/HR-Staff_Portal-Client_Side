import * as React from "react";
import {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {useTheme} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "react-router-dom";
import styles from "../Navbar/Navbar.module.scss";

const useStyles = makeStyles( theme => ({
   tabContainer:{
       marginLeft:"auto"
   },

   tab:{
       ...theme.typography,
    minWidth: 5,
    marginLeft: "11px",
}

}));

const Navbar = () => {

    const classes = useStyles();
    const theme = useTheme();

    const [selectedTab, setSelectedTab] = useState(0);
    const handleChange = (e, newValue) =>{
        setSelectedTab(newValue);
    }

    return(
           <>
               <div>
                <Tabs className={classes.tabContainer} value={selectedTab} onChange={handleChange}>
                    <Tab style={{textTransform:"none"}} className={classes.tab} component={Link} to="/info" label="Profile Information" />
                    <Tab style={{textTransform:"none"}} className={classes.tab} component={Link} to="/update" label="Update Profile" />
                    <Tab style={{textTransform:"none"}} className={classes.tab} component={Link} to="/qualification" label="Qualifications" />
                    <Tab style={{textTransform:"none"}} className={classes.tab} component={Link} to="/certification" label="Certifications" />
                </Tabs> 
               </div>
           </>
       
    );
}

export default Navbar;