import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Web from "../../Images/Projects/Landesberg/Web.png"

export default function Websites(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | LD Websites</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Valparaiso Univeristy Online Magazine
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Interaction designer </p> 
            <br></br>
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> June 2023 </p>
            <br></br>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Figma</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            Valparaiso University wanted their print magazine to move online. As a result, I designed a website that explored how magazine elements such as feature pages and sidebars could translate into a 
            digital form. 
            </p>
         </div>
         </div>
            <div style = {{
                display: "flex", 
                justifyContent: "center", 
            
            }}>
                <Image src = {Web} width = {1080} height ={600} alt = "cover image"/>
            </div>
            </main>
            <Footer/>
        </div>
    )
}