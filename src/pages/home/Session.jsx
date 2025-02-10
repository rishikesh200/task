import React from 'react'
import styles from './Sesstion.module.css';
export const Session = () => {
  return (
    <div className={styles.ses}>
        <h1>Session and Tracks/Call for Papers Topics </h1>
        <div className={styles.sestext}>
          <p>Dive into the future with ICSTEET 2026. </p>
          <p className={styles.sesunder}>Our diverse sessions and tracks are designed to spark insightful discussions, foster collaboration, and drive transformative advancements across social sciences, teaching, education, engineering and technology. </p>
        </div>
        <div className={styles.ses1}>
            <h1>We invite researchers, academicians and professionals to submit their papers. Topics of interest include, but are not limited to:</h1>
            <div className={styles.ses1con}>
                <div className={styles.ses1item}>
                Emerging Technologies & Education 
                </div>
                <div className={styles.ses1item}>
                New Trends & Modern approaches
                </div>
                <div className={styles.ses1item}>
                Education & Industry Co-operation
                </div>
                <div className={styles.ses1item}>
                Education & International Cooperation  
                </div>
                <div className={styles.ses1item}>
                Teaching - Learning Relationship
                </div>
                <div className={styles.ses1item}>
                Sociology and Anthropology
                </div>
                <div className={styles.ses1item}>
                Psychology
                </div>
                <div className={styles.ses1item}>
                Social science & Humanities
                </div>
                <div className={styles.ses1item}>
                Engineering & Technology
                </div>
            </div>
        </div>
    </div>
  )
}
