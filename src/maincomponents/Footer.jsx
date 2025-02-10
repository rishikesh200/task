import React from 'react'
import styles from './Footer.module.css';
import logo from './../assets/creda.png';

export const Footer = () => {
  return (
    <div className={styles.foot}>
        <div className={styles.f1}>
            <img src={logo} alt="" />
            <p>'International Conference on Social Sciences, Teaching & Education, Engineering and Technology (ICSTEET)'</p>
        </div>
        <div className={styles.f2}>
            <h1>Navigation links</h1>
            <p>Home</p>
            <p>Call for papers</p>
            <p>Submission</p>
            <p>Registration</p>
            <p>Venue</p>
            <p>ContactUs</p>
        </div>
        <div className={styles.f2}>
            <h1>Social Media</h1>
            <p>Home</p>
            <p>Call for papers</p>
            <p>Submission</p>
            <p>Registration</p>
            <p>Venue</p>
            <p>ContactUs</p>
        </div>

    </div>
  )
}
