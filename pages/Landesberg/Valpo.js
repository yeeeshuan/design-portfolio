import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Web from "../../Images/Projects/Landesberg/Valpo/Valpo.png"
import Type from "../../Images/Projects/Landesberg/Valpo/Styles.png"
import Buttons from "../../Images/Projects/Landesberg/Valpo/Buttons.png"
import Footers from "../../Images/Projects/Landesberg/Valpo/Footers.png"
import Sidebars from "../../Images/Projects/Landesberg/Valpo/Sidebars.png"
import HP from "../../Images/Projects/Landesberg/Valpo/HP.png"
import F1 from "../../Images/Projects/Landesberg/Valpo/F1.png"
import F2 from "../../Images/Projects/Landesberg/Valpo/F2.png"

export default function Websites(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | Valpo</title>
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
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> June 2023 </p>
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
            <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.pTitle}> 
                        Project Description
                    </h1>
                    <p className = {styles.text}>
                        Valpo Magazine is re-launching its publication in a new digital-only format. The outgoing print magazine will serve as a foundation to build upon as we work to craft a new website that captures a familiar but unique presentation and capitalizes on the opportunities that the digital format provides.
                       
                    </p>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.pTitle}> 
                        Design System
                    </h1>
                    <p className = {styles.text}>
                        Through our design system, we wanted to retain recognizable look, feel, and typographic palette of Valpo print magazine where practical, remaining an “exceptional” case outside of Valparaiso University branding.
                        <br/>
                        <br/>
                        We also wanted to retain storytelling variety, with less dense, and more up-to-date content.
                    </p>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Typography
                    </p>
                    </div>
                    <Image src = {Type} alt = "Type"/>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Buttons
                    </p>
                    </div>
                    <Image src = {Buttons} alt = "Buttons"/>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Different Footers Tested
                    </p>
                    </div>
                    <Image src = {Footers} alt = "Buttons"/>
                </div>
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.pTitle}> 
                        Sidebars
                    </h1>
                    <p className = {styles.text}>
                        Seeing how sidebars, interesting secondary information to the main article, could be translated into a digital format provided an interesting opportunity to prototype. 
                    </p>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Sidebars Tested
                    </p>
                    </div>
                    <Image src = {Sidebars} alt = "Buttons"/>
                </div>          
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.pTitle}> 
                        Desktop 
                    </h1>
                    <p className = {styles.text}>
                        I worked on mocking up how some of the feature articles would be translated to a desktop view. 
                        <br/>
                        <br/>
                        Focusing on how the articles could be made customizable from a developer perspective, I experimented with drop caps, borders, quotes, and colors to seperate paragraphs. 
                    </p>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Desktop Feature Mock-Ups
                    </p>
                    </div>
                    <div>
                        <div className = {styles.image_2}>
                        <Image src = {F1} alt = "Buttons"/>
                        <Image src = {F2} alt = "Buttons"/>
                        </div>
                    </div>
                </div> 
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.pTitle}> 
                        Mobile
                    </h1>
                    <p className = {styles.text}>
                        Our team first started by Walking the Wall. After we did some research with some of the current issues with AI used in social media platforms, we were able to determine that: 
                    <br/>
                    <br/>
                        1. Some platforms make the process of reporting ads extremely difficult with the use of misleading UI. 
                    <br/>
                    <br/>
                        2. Much of the bias from current platforms correspond to current societal biases—much of the bias from AI-algorithms stem demonstrate gender biases and socioeconomic biases.                  
                    </p>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}