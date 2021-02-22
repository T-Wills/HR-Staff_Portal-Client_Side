import * as React from 'react';
import styles from './styles.module.scss';
import './styles.scss';
import {FaPowerOff, FaTh, FaUser, FaChartPie, FaHandHolding, FaBullhorn } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = (props) => {
    return (
      <div className={styles.navbar}>
          <div className={styles.nlogo}>
                <img src="https://lotusbetaanalytics.com/img/white.png" alt="Logo" />
          </div>
          <div className={styles.navLinks}>
              <ul>
              <Link to={'/dashboard'}><li className={props.dashboard}><FaTh /></li></Link>
              <Link to={'/info'}><li className={props.info}><FaUser /></li></Link>
              <Link to={'/start'}><li className={props.start}><FaChartPie /></li></Link>
              
              </ul>
               
          </div>
          <div className={styles.navLinks}>
          <ul>
          <Link to={'/'}><li className={props.off}><FaPowerOff /></li></Link>
          </ul>
          </div>
      </div>
    );
}

export default Navbar
