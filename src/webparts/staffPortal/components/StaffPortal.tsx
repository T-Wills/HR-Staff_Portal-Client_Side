import * as React from 'react';
import styles from './StaffPortal.module.scss';
import { IStaffPortalProps } from './IStaffPortalProps';
import { escape } from '@microsoft/sp-lodash-subset';
import jQuery from "jquery";
import Login from "./Login/Login";
import PasswordLogin from "./Login/PasswordLogin";
import Dashboard from "./Dashboard/Dashboard";
import ProfileInfo from "./Profile/ProfileInfo/ProfileInfo";
import {ThemeProvider} from "@material-ui/styles";
import theme from "../components/Theme";
import  {BrowserRouter as Router, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import PieChartIcon from '@material-ui/icons/PieChart';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import AnnouncementIcon from '@material-ui/icons/Announcement';

import UpdateProfile from './Profile/UpdateProfile/UpdateProfile';
import Certifications from './Profile/Certifications/Certifications';
import Qualifications from './Profile/Qualifications/Qualifications';
import style from "../components/Profile/Qualifications/Qualifications.module.scss";
import Header from "../components/Header";
import Appraisal from './Appraisal/Appraisal';
import AppraisalQuestions from "./Appraisal/AppraisalQuestions";
import LeaveRequest from './LeaveRequest/LeaveRequest';

import {HashRouter, Route} from 'react-router-dom';
import {Stack, IStackTokens} from 'office-ui-fabric-react/lib/Stack';
import StartAppraisal from './Appraisal/StartAppraisal';

const stackTokens: IStackTokens = {childrenGap: 40};
export default class StaffPortal extends React.Component<IStaffPortalProps, {}> {
  public render(): React.ReactElement<IStaffPortalProps> {
    jQuery("#workbenchPageContent").prop("style", "max-width: none"); jQuery(".SPCanvas-canvas").prop("style", "max-width: none"); 
    jQuery(".CanvasZone").prop("style", "max-width: none");
    return (

      <Stack>
        <HashRouter>
          <Route path="/" exact component={Login} />
          <Route path="/createpassword" exact component={PasswordLogin} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/info" component={ProfileInfo} />
          <Route path="/update" component={UpdateProfile} />
          <Route path="/qualification" component={Qualifications} />
          <Route path="/certification" component={Certifications} />
          <Route path="/start" component={StartAppraisal} />
          <Route path="/appraisal" component={Appraisal} />
          <Route path="/get/questions/:sn" component={Appraisal} />
          <Route path="/request" component={LeaveRequest} />
          
        </HashRouter>
      </Stack> 

       
    // <ThemeProvider theme={theme}>
    //   <Router>
    //   <div className={style.container}>
    //         <div className={style.sideNav}>
    //         <img src="" alt="" />

    //         <ul>
    //           <li>
    //             <Link to="/dashboard">
    //               <DashboardIcon />
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="/info">
    //               <PersonIcon />
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="/appraisal">
    //               <PieChartIcon />
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="/request">
    //               <TouchAppIcon />
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="/announcements">
    //               <AnnouncementIcon />
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="/login">
    //               <PersonIcon/>
    //             </Link>
    //           </li>
    //         </ul>
    //         </div>
            
           
    // {/*   <Login /> */}
    //  {/*  <ProfileInfo /> */}
    //     <Switch>
          // <Route path="/login" exact component={Login} />
          // <Route path="/createpassword" exact component={PasswordLogin} />
          // <Route path="/dashboard" component={Dashboard} />
          // <Route path="/info" component={ProfileInfo} />
          // <Route path="/update" component={UpdateProfile} />
          // <Route path="/qualification" component={Qualifications} />
          // <Route path="/certification" component={Certifications} />
          // <Route path="/appraisal" component={Appraisal} />
          // <Route path="/get/questions/:sn" component={Appraisal} />
          // <Route path="/request" component={LeaveRequest} />
    //     </Switch>
    //     </div> 
    //   </Router>
    // </ThemeProvider>

    );
  }
}
