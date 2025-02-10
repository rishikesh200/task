import React from 'react'
import styles from './Header.module.css';
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
import reg from './../assets/register.png';
import call from './../assets/call.png';
import partner from './../assets/partner.png';
import mail from './../assets/mail.png';
import logo from './../assets/logo.png';

export const Header = () => {
  return (
    <div className={styles.navmaincontainer}>
        <div className={styles.rollingtextcon}>
        <Marquee>
        HYBRID EVENT - You can participate in person in the Philippines or Virtually from your home or office.
        </Marquee>
    </div>
    <div className={styles.navbar2}>
        <div className={styles.nav2con}>
            <img src={reg} alt="" />
            <span>Register now</span>
        </div>
        <div className={styles.nav2con}>
            <img src={call} alt="" />
            <span>+91 8072381719</span>
        </div>
        <div className={styles.nav2con}>
            <img src={mail} alt="" />
            <span>info@icsteet.com </span>
        </div>
        <div className={styles.nav2con}>
            <img src={partner} alt="" />
            <span>Apply for Academic Partner</span>
        </div>
        <div className={styles.nav2con}>
            
            <span className={styles.loginbtn}>Login</span>
        </div>
        
    </div>
    <div className={styles.navbarmain}>
        <NavLink  to="/" className={styles.logocon}>
            <img src={logo} alt="" />
        </NavLink>
        <ul className={styles.navcon}>
          
            <li>
                <NavLink>
                Home
                </NavLink>
            </li>
            <li>
                <NavLink>
                Call for Papers
                </NavLink>
            </li>
            <li>
                <NavLink>
                Submission
                </NavLink>
            </li>
            <li>
                <NavLink>
                Publication
                </NavLink>
            </li>
            <li>
                <NavLink>
                Registration
                </NavLink>
            </li>
            <li>
                <NavLink>
                Venue
                </NavLink>
            </li>
            <li>
                <NavLink>
                Contact Us
                </NavLink>
            </li>
        </ul>
    </div>
    
    </div>

  )
}
   