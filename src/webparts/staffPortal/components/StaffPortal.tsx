import * as React from 'react';
import styles from './StaffPortal.module.scss';
import { IStaffPortalProps } from './IStaffPortalProps';
import { escape } from '@microsoft/sp-lodash-subset';
import jQuery from "jquery";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Profile/Profile";
import {ThemeProvider} from "@material-ui/styles";
import theme from "../components/Theme";
import  {BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class StaffPortal extends React.Component<IStaffPortalProps, {}> {
  public render(): React.ReactElement<IStaffPortalProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); 
    jQuery(".CanvasZone").prop("style", "max-width: none");
    return (
     <>
     <Router>
      {/*  <Login /> */}
        <Switch>
        {/*  <Route path="/" exact component={Login} /> */}
         <Route path="/login" component={Dashboard} />
        </Switch>
        
      <ThemeProvider theme={theme}>
        {/*   <Dashboard /> */}
        <Profile />
     </ThemeProvider>
     </Router>
     </>
    );
  }
}
