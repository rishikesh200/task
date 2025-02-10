import React from 'react'
import Marquee from 'react-fast-marquee';

import styles from './Why.module.css';
export const Why = () => {
  return (
    <div className={styles.why}>
       <h1>Why Join Us at ICSTEET-2026?</h1>  
       <div className={styles.main}>
            <Marquee>
                <div className={styles.con}>
                    <h1>Explore Cutting-Edge Research and Innovations</h1>
                    <p>At ICSTEET-2026, you’ll have the opportunity to engage with the latest research and technological innovations across social sciences, education, engineering, and technology. Our carefully curated sessions and keynote addresses will showcase groundbreaking work that is shaping the future of these diverse fields.</p>
                </div>
                <div className={styles.con}>
                    <h1>Explore Cutting-Edge Research and Innovations</h1>
                    <p>At ICSTEET-2026, you’ll have the opportunity to engage with the latest research and technological innovations across social sciences, education, engineering, and technology. Our carefully curated sessions and keynote addresses will showcase groundbreaking work that is shaping the future of these diverse fields.</p>
                </div>
                <div className={styles.con}>
                    <h1>Explore Cutting-Edge Research and Innovations</h1>
                    <p>At ICSTEET-2026, you’ll have the opportunity to engage with the latest research and technological innovations across social sciences, education, engineering, and technology. Our carefully curated sessions and keynote addresses will showcase groundbreaking work that is shaping the future of these diverse fields.</p>
                </div>
            </Marquee>
        </div>  
        <p>Note: ICETMRS - 2025 Proceedings will be submitted to the Web of science Book citation index (BkCI) and Scopus for evaluation and indexing purposes (T&C)* apply.</p>
    </div>
  )
}
