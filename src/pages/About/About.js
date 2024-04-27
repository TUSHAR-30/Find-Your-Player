import React from 'react'
import styles from './About.module.css';
function About() {
    return (
        // <div className={styles.gallery}>
        //     <div className={styles.clipped_border}>
        //         <img src="https://imgeng.jagran.com/images/2020/aug/SureshR11596368139234.jpg" id="clipped" />
        //     </div>
        //     <div className={styles.clipped_border}>
        //         <img src="https://qph.cf2.quoracdn.net/main-qimg-a6b6d5314e536393cc758b8e0deeb081.webp" id="clipped" />
        //     </div>
        //     <div className={styles.clipped_border}>
        //         <img src="https://images.mid-day.com/images/images/2021/nov/Trent-Boult-caps_d.jpg" id="clipped" />
        //     </div>
        //     <div className={styles.clipped_border}>
        //        <img src="https://images.indianexpress.com/2022/08/virat-kohli-rohit-sharma.jpg" id="clipped"
        //     </div>
        //     <div className={styles.clipped_border}>
        //         <img src="https://images.indianexpress.com/2022/08/virat-kohli-rohit-sharma.jpg" id="clipped" />
        //     </div>
        //     <div className={styles.shadow}></div>
        // </div>

        <section className={styles.aboutUs}>
            <img src="https://images.indianexpress.com/2022/08/virat-kohli-rohit-sharma.jpg" alt="computer user" />
            <div className={styles.content}>
                <h2>About Us</h2>
                <h4> Find Your Player </h4>
                <p className={styles.description}>
                Find Your Player  is a sports news website exclusively for the game of cricket. The site features  a database of historical matches and players from the 19th century to the present. As of  2024, Tushar Chawla was the editor.
                </p>
                <button className={styles.btn}>Explore</button>
            </div>
        </section>
    )
}

export default About