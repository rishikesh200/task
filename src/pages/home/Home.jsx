import React from 'react'
import Marquee from 'react-fast-marquee';
import styles from'./Home.module.css';
import { Banner } from './Banner';
import { Session } from './Session';
import { Why } from './Why';
import wel from './../../assets/welcome.jpg';
import eng from './../../assets/eng.jpg';
import dead from './../../assets/dead.jpg';

export const Home = () => {
  return (
    <div className={styles.home}>
        <Banner/>
        <div className={styles.welcome}>
          

            <h1>Welcome to ICSTEET 2026</h1>
            <p>The International Conference on Social Sciences, Teaching & Education, Engineering, and Technology (ICSTEET) is back for its second edition and we are excited to invite you to join us in this groundbreaking event! ICSTEET-2026 will bring together leading scholars, industry experts, academics and researchers from around the world to explore the latest advancements and tackle the challenges faced by interdisciplinary fields.</p>
        </div>
        <div className={styles.about}>
            <h1>About ICSTEET</h1>
            <p>ICSTEET unites top academic scientists, researchers, and scholars to exchange experiences and share groundbreaking research. This conference offers an interdisciplinary platform to present new advances in Education, Engineering & Technology, Social Sciences and Humanities. Join us to explore cutting-edge research, foster interdisciplinary collaborations and network with peers worldwide.</p>
        </div>
        <div className={styles.theme}>
            <h1>Conference Theme</h1>
            <div className={styles.themecon}>
                <img src={eng} alt=""/>
                <div>
                    <h2>"Bridging the Gap: Innovations and Challenges in Social Sciences, Teaching & Education, Engineering and Technology"</h2>
                    <p>ICSTEET-2026 aims to bring together scholars, researchers, and industry experts to explore how innovations in social sciences, teaching and education and engineering and technology can bridge gaps in knowledge, industry practices and global challenges. This conference will emphasize interdisciplinary approaches that address contemporary challenges, inspire future research and encourage collaboration for global sustainability.</p>
                    <p>The conference is dedicated to the dissemination of cutting-edge knowledge, groundbreaking discoveries and innovative practices in areas such as emerging educational technologies, innovative teaching methods, industry-academia collaboration and advancements in sociology, psychology, humanities, engineering and technology. It offers a platform for expert researchers to showcase their work, connect with peers and publish their findings in Scopus-indexed journals. Attendees will gain inspiration from the experiences and insights shared by distinguished keynote speakers, industry leaders and session presenters.</p>
                </div>
            </div>

        </div>
        <div className={styles.key}>
            <h1>Key Highlights</h1>
            <div className={styles.maincon}>
                <div className={styles.con}>
                    <h3>Interdisciplinary Sessions: </h3>
                    <p>Engage in thought-provoking sessions that bridge various disciplines and explore their interconnectedness.</p>
                </div>
                <div className={styles.con}>
                    <h3>Interdisciplinary Sessions: </h3>
                    <p>Engage in thought-provoking sessions that bridge various disciplines and explore their interconnectedness.</p>
                </div>
                <div className={styles.con}>
                    <h3>Interdisciplinary Sessions: </h3>
                    <p>Engage in thought-provoking sessions that bridge various disciplines and explore their interconnectedness.</p>
                </div>
                <div className={styles.con}>
                    <h3>Interdisciplinary Sessions: </h3>
                    <p>Engage in thought-provoking sessions that bridge various disciplines and explore their interconnectedness.</p>
                </div>
                <div className={styles.con}>
                    <h3>Interdisciplinary Sessions: </h3>
                    <p>Engage in thought-provoking sessions that bridge various disciplines and explore their interconnectedness.</p>
                </div>
                <div className={styles.con}>
                    <h3>Interdisciplinary Sessions: </h3>
                    <p>Engage in thought-provoking sessions that bridge various disciplines and explore their interconnectedness.</p>
                </div>
            </div>
        </div>
        <Session/>
        <div className={styles.sub}>
            <h1>submission deadlines</h1>
            <div className={styles.subcon}>
                <img src={dead} alt="" />
                <h4>Early bird rigistration</h4>
            </div>
        </div>
        <Why/>
        
    </div>
  )
}
