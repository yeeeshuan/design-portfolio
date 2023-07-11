import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Web from "../../Images/Projects/Landesberg/PGH/PGH.png"

export default function PGH(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | PGH Foundation</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            The Pittsburgh Foundation Website Redesign
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Interaction designer </p> 
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> June 2023 </p>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Figma</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
                The Pittsburgh Foundation wanted to refresh of their website. I worked with a team to update the styling and layout of the website, focusing on interactions to the people and events pages. 
            </p>
         </div>
         </div>
            <div style = {{
                display: "flex", 
                justifyContent: "center", 
            
            }}>
                <Image src = {Web} width = {1080} height ={600} alt = "cover image"/>
            </div>
            <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.pTitle}> 
                    Project Description
                    </h1>
                    <p className = {styles.text}>
                    For this project, the team was tasked to update and freshen the look and feel of The Pittsburgh Foundation (TPF) website, adding new layouts and functionality. Additionally,, 
                    the website will retain the basic global structure (menus, headers, footers). 
      
                    </p>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}