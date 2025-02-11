import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Video from '../../components/video';

import Issues from "../../Images/Projects/Siri/Issues.png"
import UC1 from "../../Images/Projects/Siri/UC1.png"
import UC2 from "../../Images/Projects/Siri/UC2.png"

export default function Siri(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | Siri AI</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Siri AI
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
                <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Product Designer, Frontend Developer </p> 
                <br></br>
                <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> Jan 2025 - Present </p>
                </div>
            <div className = {styles.cont}> 
                <p className = {styles.text}>
                    In this project, I look at how generative AI can improve CUI (Conversational User Interface) interactions, specifically Siri. 
                </p>
                <br/>
                <br/>
                <p>This is an ongoing project, check again soon for more details!</p>

                <p className = {styles.text}>
                <br/>
            </p>
            </div>
         </div>
            <div>
            <Video
                 thumbnail =  "./../../Siri.mp4"
            />
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Problem Space
            </h1>
            <p className = {styles.text}>
            Currently, CUIs struggle with handling non-command user requests. When faced with such inputs, their responses are often no more advanced than a standard online search, providing results similar to what a human could find independently.
            <br/>
            <br/>
            This presents an opportunity for generative AI to offer users actionable insights and tailored responses beyond simple search results.
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Command prompts for Siri
                </p>
            </div>
            <div>
                <Image src = {Issues}/>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Use Cases
            </h1>
            <p className = {styles.text}>
                With this, there are three use cases that I want to explore:
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.bTitle}> 
                01: Multi-App Experiences
            </h1>
            <p className = {styles.text}>
                Generating tailored advice, which populates the appropriate apps. 
                <br/>
                <br/>
                For example, when learning to bake a cake, Siri places a recipe in the Notes App, a series of timers for scheduling in the Timer App, and a cooking playlist in Spotify.  
            </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Mini-App Journey
                </p>
            </div>
            <div>
                <Image src = {UC1}/>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.bTitle}> 
                02: Sendable Mini-Experiences
            </h1>
            <p className = {styles.text}>
                Generating mini-experiences that can be sent through iMessage. I aim to explore how to capture the essence of the recipient in the generated experience. 
                <br/>
                <br/>
                For example, sending grandma a walkthrough of how to use iMessage. How can she feel that it is her grandchild walking her through the experience, and not Siri? 
            </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Multi-App Journey
                </p>
            </div>
            <div>
                <Image src = {UC2}/>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Prototyping
            </h1>
            <p className = {styles.text}>
                To start the project, I began by exploring the capabilities of generative AI, experimenting with various prompts to generate the most detailed responses.
                I developed the following prototypes to understand how to integrate a generative AI tool with the frontend.
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Prototyping with Next.js and the OpenAI API
                </p>
            </div>
            <div style={{display:"flex"}}>
                <div style={{width:"33.33%"}}>
                    <Video
                        thumbnail =  "./../../Siri_P1.mov"
                    />
                </div>
                <div style={{width:"33.33%"}}>
                    <Video
                        thumbnail =  "./../../Siri_P2.mov"
                    />
                </div>
                <div style={{width:"33.33%"}}>
                    <Video
                        thumbnail =  "./../../Siri_P3.mov"
                    />
                </div>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div>
                <p>More to come soon!</p>
            </div>
        </div> 
        </main>
        <Footer/>
        </div>
    )
}