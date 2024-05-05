import React,{useEffect} from 'react'
import styles from './About.module.css';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'

function About() {
    useEffect(()=>{
        Aos.init()
      },[])
    return (
        <div style={{backgroundColor:'black'}}>
        <section className={styles.aboutUs}>
            <img src="https://images.indianexpress.com/2022/08/virat-kohli-rohit-sharma.jpg" alt="computer user" 
                 data-aos="fade-right"
            />
            <div className={styles.content}>
                <h2>About Us</h2>
                <h4> Find Your Player </h4>
                <p className={styles.description}>
                    Find Your Player  is a sports  website exclusively for the game of cricket. The site features  a database of players from the 19th century to the present. As of  2024, Tushar Chawla was the editor.
                </p>
                <NavLink to="/allplayers" className={styles.btn}>Explore</NavLink>
            </div>
        </section>

        </div>
    )
}

export default About