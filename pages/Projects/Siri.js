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
import T1 from "../../Images/Projects/Siri/Tiles.png"
import T2 from "../../Images/Projects/Siri/Tile_Pattern.png"

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
                <p className={styles.text}>This is an ongoing project, check again soon for more details!</p>

                <p className = {styles.text}>
                <br/>
            </p>
            </div>
         </div>
            <div>
            <Video
                 thumbnail =  "./../../Siri_Cake.mp4"
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
                Interactive Dashboard
            </h1>
            <p className = {styles.text}>
            I wanted users to interact dynamically with the generated content, enabling actions like regenerating, editing, and rearranging it to refine responses.
            </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Tiles For Different Apps
                </p>
            </div>
            <div>
                <Image src = {T1}/>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Tile Layout
                </p>
            </div>
            <div>
                <Image src = {T2}/>
            </div>
        </div> 
        {/* <div className = {styles.page}>
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
        </div> */}
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Prototyping
            </h1>
            <p className = {styles.text}>
                To start the project, I began by exploring the capabilities of generative AI, experimenting with various prompts to generate the most detailed responses.
                I developed the following prototypes to understand how to integrate a generative AI tool with the fronten using Next.js and the OpenAI API. 
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.bTitle}> 
                01: Event Generation
            </h1>
            <p className = {styles.text}>
                I started by experimenting with how well the OpenAI API could generate steps and action items. 
            </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Event Generation Prototypes
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
            <h1 className = {styles.bTitle}> 
                02: Grouping and Organizing Content
            </h1>
            <p className = {styles.text}>
                I then moved to exploring how the OpenAI API can help with organizing and grouping the generated information into a left, middle, and right column. 
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Tiling prototype when asked to bake a cake
                </p>
            </div>
            <div>
                <div>
                    <Video
                        thumbnail =  "./../../Siri_Cake.mp4"
                    />
                </div>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.bTitle}> 
                03: Regeneration
            </h1>
            <p className = {styles.text}>
                When prototyping for regeneration, I thought about how users currently interact with Generative AI tools. I played around with cases where users would want to: <br/><br/>
                1. Completely change the generated content <br/>
                2. Add/Remove from the generated content <br/><br/>
                With a bit of prompt engineering here is the end result: 
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Regeration protype when asked to change directions and add 
                </p>
            </div>
            <div style={{display:"flex"}}>
                <div style={{width:"49.5%"}}>
                    <Video
                        thumbnail =  "./../../Siri_Notes_Regen.mov"
                    />
                </div>
                <div style={{width:"49.5%"}}>
                    <Video
                        thumbnail =  "./../../Siri_Reminders_Regen.mov"
                    />
                </div>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div>
                <p className={styles.text}>More to come soon!</p>
            </div>
        </div> 
        </main>
        <Footer/>
        </div>
    )
}