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
            I currently work as an <span className={styles.CText}>Innovation Desginer</span> at <span className={styles.CText}>IBM</span>.
            <br/>
            <br/>
            I create meaningful experiences by exploring the intersection of design and technology.
            I studied <span className={styles.CText}>Interaction Design</span> and <span className={styles.CText}>Computer Science</span> at Carnegie Mellon University.
            {/* <br/>
            <br/>
            Starting this fall, I will be designing solutions with new technologies at
            <span className = {styles.CText}>
                <a href = "https://www.ibm.com/about/innovation-studio"> IBM&rsquo;s Innovation Studio. 
                </a>
            </span> */}
            <br/>
            <br/>
            When I am not designing, I can be seen taking photos, running, or curating the perfect 
            <span className = {styles.CText}>
                <a href = "https://open.spotify.com/user/ethanhuangpizza?si=2ee86a0814ba4650"> Spotify playlist. 
                </a>
            </span>
            <br></br>
            <br></br>

            Feel free to reach out at  <span className = {styles.CText}><a href = "mailto:yehuang2020@gmail.com">yehuang2020@gmail.com!</a></span>
        </p>
        </div>

        </div>
        <Footer/>

    </div>
    )
}

export default About; 