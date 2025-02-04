import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Video from '../../components/video';

export default function iKnow(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | I Know a Place</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            I Know a Place
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
                <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Product Designer, Frontend Developer </p> 
                <br></br>
                <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> January 2025 - Present </p>
                </div>
            <div className = {styles.cont}> 
                <p className = {styles.text}>
                    <strong>I Know a Place</strong> is an interactive map that highlights how a single location can hold countless unique stories and experiences for different people.
                    <br/>
                    <br/>
                    This is an ongoing project, check again soon for more details!</p>

                <br/>
                <br/>
            </div>
         </div>
         <div>
            <Video
                 thumbnail =  "./../../I_Know.mov"
            />
        </div>
        </main>
        <Footer/>
        </div>
    )
}