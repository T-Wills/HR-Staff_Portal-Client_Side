import * as React from 'react';
import styles from './styles.module.scss';
import {FaPowerOff, FaTh, FaUser, FaChartPie, FaHandHolding, FaBullhorn } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
      <div className={styles.navbar}>
          <div className={styles.nlogo}>

          </div>
          <div className={styles.navLinks}>
              <ul>
              <Link to={'/dashboard'}><li><FaTh /></li></Link>
              <Link to={'/info'}><li><FaUser /></li></Link>
              <Link to={'/start'}><li><FaChartPie /></li></Link>
              <Link to={'/request'}><li><FaHandHolding /></li></Link>
              <Link to={'/request'}><li><FaBullhorn /></li></Link>
              <Link to={'/'}><li><FaPowerOff /></li></Link>
              </ul>
               
          </div>
      </div>
    );
}

export default Navbar
