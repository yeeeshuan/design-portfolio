import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Video from '../../components/video';

export default function Zenda(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | Waymo</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Waymo x Airbnb
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
                <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Product Designer</p> 
                <br></br>
                <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> November 2024 </p>
                </div>
            <div className = {styles.cont}> 
                <p className = {styles.text}>
                    As AI and autonomous driving technologies evolve, I envisioned a collaboration where Waymo seamlessly integrates with a service like Airbnb. In this concept, I explored how the collaboration between Airbnb and Waymo could deliver highly personalized travel experiences for users.
                </p>
                <br/>
                <br/>
                <p>More information coming soon!</p>

                <br/>
                <br/>
                <p className = {styles.text}>
            </p>
            </div>
         </div>
        <div>
            <Video
                thumbnail =  "./../../Waymo.mp4"
            />
        </div>
        </main>
        <Footer/>
        </div>
    )
}