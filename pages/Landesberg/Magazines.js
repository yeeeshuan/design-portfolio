import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Mag from "../../Images/Projects/Landesberg/Mag.png"

export default function Magazine(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | LD Magazines</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Lawrentian Magazine Layouts
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}>Graphic Designer</p> 
            <br></br>
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> June 2023 </p>
            <br></br>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Adobe InDesign, Adobe Illustrator, Adobe Photoshop</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            The Lawrenceville School wanted a redesign of their magazine, The Lawrentian. I helped redesign the design languages of the magazine, thinking about graphics, typography, and layout styles. 
            </p>
         </div>
         </div>
            <div style = {{
                display: "flex", 
                justifyContent: "center", 
            
            }}>
                <Image src = {Mag} width = {1080} height ={600} alt = "cover image"/>
            </div>
            </main>
            <Footer/>
        </div>
    )
}