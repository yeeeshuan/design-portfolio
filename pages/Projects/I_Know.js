import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Video from '../../components/video';
import Card from "../../Images/Projects/I_Know/Cards.png"
import IK from "../../Images/Projects/I_Know/I_Know.png"

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
                <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> January 2025 - March 2025 </p>
                </div>
            <div className = {styles.cont}> 
                <p className = {styles.text}>
                    <strong>I Know a Place</strong> is an interactive map that highlights how a single location can hold countless unique stories and experiences for different people.
                    <br/>
                    <br/>
                    This project was built for the 2025 TEDxCMU main event. 
                    <br/>
                    <br/>
                    <br/>
                    <a className = {styles.links} href = "https://lego-font.vercel.app/" rel="noopener noreferrer" target="_blank"> Project Website </a> 
                    <a className = {styles.links} href = "https://github.com/TEDxCMU/2025-I-Know-A-Place" rel="noopener noreferrer" target="_blank"> Github </a> 
                </p>
            </div>
         </div>
         <div>
            <Video
                 thumbnail =  "./../../I_Know.mp4"
            />
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Map Features
            </h1>
            <p className={styles.text}>
            The implemented map features include Zoom In and Zoom Out functionality. When selecting a library to build the map, we carefully considered how information would be displayed at different zoom levels to avoid overwhelming the screen. Ultimately, we chose Leaflet.js for its flexibility and control over zoom behavior.
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Webpage on First Load
                </p>
            </div>
            <div>
                <Image src = {IK}/>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Zooming In
                </p>
            </div>
            <div>
            <Video
                 thumbnail =  "./../../IK_Zoom_In.mp4"
            />
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Zooming Out
                </p>
            </div>
            <div>
            <Video
                 thumbnail =  "./../../IK_Zoom_Out.mp4"
            />
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Story Checking and Generating Tags
            </h1>
            <p className={styles.text}>
            Since the team was busy and overwhelmed during the event, I wanted to avoid assigning someone to manually review the stories uploaded to the map. To address this, I integrated a call to the OpenAI API upon upload to automatically check if a story is appropriate for the event.  
            <br/><br/>
            I also used the OpenAI API to generate tags for each story, helping categorize them. During user testing with the team, we found that the auto-generated tags added an element of joy and playfulness to the story submission process.
            </p>

            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Generating tags to a story
                </p>
            </div>
            <div>
            <Video
                 thumbnail =  "./../../I_Know.mp4"
            />
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Checking for appropriate story
                </p>
            </div>
            <div>
            <Video
                 thumbnail =  "./../../IK_Check.mov"
            />
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Submitting Stories
            </h1>
            <p className={styles.text}>
                To store the stories, the team used a Google Sheets as our database. Completely free of charge, easy to add and remove from, and if anything went wrong we could just create a new Google Sheets. 
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Writing/Reading to/from Google Sheets Database
                </p>
            </div>
            <div>
            <Video
                 thumbnail =  "./../../IK_Submit.mp4"
            />
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Design Components
            </h1>
            <p className={styles.text}>
            Apart from the map interactions, the main component that required designing was the modal that popped up for users to input stories. 
            <br/>
            <br/>
            The modal consists of an input and final submitted state. 
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Design Components
                </p>
            </div>
            <div>
                <Image src = {Card}/>
            </div>
        </div> 
        </main>
        <Footer/>
        </div>
    )
}