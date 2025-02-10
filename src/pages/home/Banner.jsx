import React from 'react'
import styles from'./Banner.module.css';
import ban from './../../assets/banner.jpg';


export const Banner = () => {
  return (
    <div className={styles.nav2con}>
        <div className={styles.main}>
            <h1>'International Conference on Social Sciences, Teaching & Education, Engineering and Technology (ICSTEET)'</h1>
            <h4>THEME - "<span>Bridging the Gap</span> : Innovations and Challenges in Social Sciences, Teaching & Education, Engineering and Technology"</h4>
            <h4><span>Hybrid conference</span> (In person + Virtual)</h4>
            <h4><span>Organized by</span> : World Citi Colleges, Quezon City, Philippines and Confworld Educational Research and Development Association</h4>
            <p>ISBN: 978-72-549604-5-8</p>
            <div className={styles.detcon}>
                <div className={styles.date}>

                   <span><b>Date:</b> 29-30 January, 2026</span>
                </div>
                <div className={styles.venue}>
                   <span><b>confrense venue :</b>Manila, Philippines</span>
                </div>
            </div>
        </div>
        <div className={styles.ban}>
          <img src={ban} alt="" />
        </div>
    </div>
  )
}
