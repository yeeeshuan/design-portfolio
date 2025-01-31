import React, { useState} from 'react';
import styles from "../styles/About.module.css"; 
import invis from "../styles/Home.module.css";
import Navbar from '../components/navbar';
import Image from "next/image";
import Head from 'next/head';
import Footer from '../components/footer'; 
import Me from '../Images/About/About_1.jpg'; 

const About = () => {

return(
    <div className = {styles.page}>
        <Head>
            <title>Ethan Huang Design | About</title>
        </Head> 
        <div className = {invis.invisible}>
            <Image src = {Me} alt = "photo rotation"/>
        </div>
        <Navbar/>
        <div className={styles.imageWrap_1}>
        <div className={styles.left}>
            <span>
                <Image style = {{borderRadius: '10px', overflow: 'hidden'}} className = "Photo" src = {Me} alt = "Photo"/>
            </span>
        </div> 
        <div className={styles.right}>
        <h1 className={styles.title}>
            Hey! My name is Ethan Huang. 
        </h1>
        <p className={styles.text}>

            I am a senior at Carnegie Mellon studying <span className = {styles.CText}>Interaction Design</span> and <span className = {styles.CText}> Human-Computer-Interaction </span>
            with a minor in <span className = {styles.CText}>Computer Science</span>. I am interested in interaction design 
            and creating digital experiences — I strive to create meaningful interactions through exploring the intersection of design and technology. 

            <br/>
            <br/>

            When I am not designing, I can be seen taking photos, sketching, or curating the perfect 
                
            <span className = {styles.CText}>
                <a href = "https://open.spotify.com/user/ethanhuangpizza?si=2ee86a0814ba4650"> Spotify playlist. 
                </a>
            </span>
            <br></br>
            <br></br>

            Feel free to reach out at  <span className = {styles.CText}><a href = "mailto:ethanhuang@cmu.edu">ethanhuang@cmu.edu!</a></span>
        </p>
        </div>

        </div>
        <Footer/>

    </div>
    )
}

export default About; 