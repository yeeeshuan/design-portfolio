import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Video from '../../components/video';

import Issues from "../../Images/Projects/Siri/Issues.png"
import UC1 from "../../Images/Projects/Siri/UC1.png"
import T1 from "../../Images/Projects/Siri/Tiles.png"
import T2 from "../../Images/Projects/Siri/Tile_Pattern.png"
import Prompt from "../../Images/Projects/Siri/Siri_Prompt.png"
import Input from "../../Images/Projects/Siri/Siri_Input.png"

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
                    In this project, I look at how generative AI can improve CUI (Conversational User Interface) interactions, specifically Siri. The experience was designed in Figma and developed using Next.js for the frontend, with generative capabilities powered by the OpenAI API.
                </p>
                <br/>
                <br/>
                <p className={styles.text}>This is an ongoing project, check again soon for more details!</p>
                <br/>
                <br/>
                <p>
                    <a className = {styles.links} href = "https://github.com/yeeeshuan/Siri_AI" rel="noopener noreferrer" target="_blank"> Github </a> 
                    <br/>
                </p>
            </div>
         </div>
            <div>
            <Video
                 thumbnail =  "./../../Siri_AI.mp4"
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
            <h1 className = {styles.pTitle}> 
                Design
            </h1>
            <p className = {styles.text}>
            I wanted users to interact dynamically with the generated content, enabling actions like regenerating, editing, and rearranging it to refine responses.
            </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Tiles, Prompt Box, and Input Box Components
                </p>
            </div>
            <div className={styles.siriImg}>
                <div className={styles.siriImg1}>
                    <Image src = {T1}/>
                </div>
                <div className={styles.siriImg2}>
                    <Image src = {Input}/>
                    <Image src = {Prompt}/>
                </div>
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
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div style={{width:"33%"}}>
                    <Video
                        thumbnail =  "./../../Siri_P1.mov"
                    />
                </div>
                <div style={{width:"33%"}}>
                    <Video
                        thumbnail =  "./../../Siri_P2.mov"
                    />
                </div>
                <div style={{width:"33%"}}>
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
                02: Regeneration
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
            <div style={{display:"flex", justifyContent:"space-between"}}>
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
            <h1 className = {styles.bTitle}> 
                03: Grouping and Organizing Content
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
            <h1 className = {styles.pTitle}> 
                Dashboard UX
            </h1>
            <p className = {styles.text}>
                After generating the tiled app views, I recognized that the interface was naturally evolving into a dynamic dashboard. This realization prompted me to explore how tile resizing and the addition of new columns could enhance the layout and overall user experience.
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.bTitle}> 
                01: App Tiles
            </h1>
            <p className = {styles.text}>
            The variety of apps presented an opportunity to make each tile distinct and tailored to its functionality. 
            <br/>
            <br/>
            For example, I designed the Notes tile to be editable, allowing users to modify content directly within the tile. Regenerating results would then pull from the updated input, creating a more dynamic and personalized experience.
            </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Notes Tile
                </p>
            </div>
            <div>
                <Video
                    thumbnail =  "./../../Siri_Notes_Tile.mov"
                />
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.bTitle}> 
                02: Tile Resizing
            </h1>
            <p className = {styles.text}>
                To enhance interactivity, I introduced an active state for individual tiles. When a user engages with a specific tile, it highlights with a distinct border color and expands vertically. This helps users see their edits in context, emphasizing how their input contributes to the broader dashboard experience.
            </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Tile Resizing
                </p>
            </div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <div style={{width:"49.5%"}}>
                    <Video
                        thumbnail =  "./../../Siri_Resize.mov"
                    />
                </div>
                <div style={{width:"49.5%"}}>
                    <Video
                        thumbnail =  "./../../Siri_Resize_1.mov"
                    />
                </div>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.bTitle}> 
                03: Adding Columns
            </h1>
            <p className = {styles.text}>
                To accommodate growth, users can add an additional column of apps to their dashboard—a scaled-down implementation of future functionality. This sets the foundation for a more customizable experience, where users will eventually be able to generate and specify the types of apps they want to include.
            </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Adding Column to Dashboard
                </p>
            </div>
            <div>
                <div>
                    <Video
                        thumbnail =  "./../../Siri_Add_Col.mp4"
                    />
                </div>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.bTitle}> 
                04: Loading Screen
            </h1>
            <p className = {styles.text}>
                To provide users with clear feedback during result generation, I designed a loading experience inspired by Apple&rsquo;s AI design system. 
            </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Loading 
                </p>
            </div>
            <div>
                <div>
                    <Video
                        thumbnail =  "./../../Siri_Loading.mp4"
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