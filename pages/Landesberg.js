import styled from 'styled-components'; 
import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import GTM from "../Images/Projects/Teachable/GTM.png"; 
import Figma from "..//Images/Projects/Teachable/Figma.png"
import P7 from "../Images/About/P7.jpg"

export default function Landesberg(){
    return(
        <div>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Landesberg Design Internship 
            </h1>
            <div className = {styles.intro}>
            <div>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Design Intern</p> 
            <br></br>
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> June—August 2023 </p>
            <br></br>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Adobe CC, Figma</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            This summer, I will be a Design Intern at Landesberg Design working on brand design and learning how to design for the common good. 
            More info to come!
            </p>
            <br/>
         </div>
         </div>
            <div style = {{
                display: "flex", 
                justifyContent: "center", 
            
            }}>
                <Image src = {P7} width = {1080} height ={600} alt = "cover image"/>
            </div>
            </main>
            <Footer/>
        </div>
    )
}