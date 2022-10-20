import styled from 'styled-components'; 
import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Thumbnail from "../Images/Projects/Teachable/Thumbnail.gif"
import GTM from "../Images/Projects/Teachable/GTM.png"

export default function Teachable(){
    return(

        <div>
            <Navbar/>
            <div className = {styles.intro}>
            <div>
            <h1 className = {styles.mTitle}> 
            Teachable Grid   
            </h1>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Creative Coding, Interaction Design </p> 
            <br></br>
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> July 2022 </p>
            <br></br>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> HTML, P5.js, Google Teachable Machine, Web Speech API</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            This project is a collection of interaction design experiments presented through the form of a game. Using the Google Teachable Machine 
            and the Web Speech API, I was able to gain a deeper understanding of how to incorporate interactions into my designs—cases where they are helpful 
            vs. cases where they become convoluted and confusing. 
            </p>
         </div>
         </div>
            <div style = {{
                display: "flex", 
                justifyContent: "center", 
            
            }}>
                <Image src = {Thumbnail} width = {1080} height ={600} alt = "cover image"/>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Problem Space 
                </h1>
                    <p className = {styles.text}>
                        Most technology today is limited in the number of ways one can navigate through it—typing on a keyboard or mouse, or tapping on a screen. 
                        With this project, I wanted to move away from typing and tapping and experiment with other forms of interactions by prompting users to 
                        move around and color a 10x10 grid. I explored with a variety of methods to: 
                        <br></br>
                        <br></br>1. Determine a color for the grid
                        <br></br>
                        <br></br>2. Move across the grid. 
                    </p>
                </div>
                </div>
                <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Interactions 
                </h1>
                    <p className = {styles.text}>
                    Shifting away from using the keyboard and mouse, I wanted to utilize sounds and hand signals to interact with the computer—thus, the main forms of interaction 
                    were webcam, speakerphone, and audio. These experiment look at how other modes of interaction can heighten—or complicate—a user&rsquo;s experience navigation through an interface. 
                    </p>
                </div>
                </div>
                <div>
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.bTitle}> 
                    Google Teachable Machine Visual Detection
                    </h1>
                    <p className = {styles.text}>
                    When the user moves to a block, they have the option of coloring the block blue, purple, or pink using different hand gestures. 
                    I trained the Google Teachable Machine to be able to detect three different hand gestures and connect them with different colors they would represent. 
                    </p>    
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                   Training Google Teachable Machine to recognize different hand gestures
                    </p>
                    </div>
                    <div>
                   <Image width = "1920px" height = "1080px" src = {GTM} alt = "gtm"></Image>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Model in action 
                    </p>
                    </div>
                    <div>
                    <iframe width = "100%" height = "500px"src="https://www.youtube.com/embed/ocN-7d36Ujc?autoplay=1&loop=1&mute=1&controls=0&playlist=ocN-7d36Ujc"
                 frameBorder = "0" modestbranding = "1"></iframe>

                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.bTitle}> 
                    Speech Recognition 
                    </h1>
                    <p className = {styles.text}>
                    With the help of the Web Speech API, when the user communicates whether they want to go up, down, left, or right, the interface detects the 
                    sound and moves on the grid accordingly. Due to the Web Speech API&rsquo;s long run times, using audio takes a longer time to move around the grid than typing on a keyboard would. 
                    </p>
                    </div>
                </div>
            </div>
            <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.bTitle}> 
                    Facial Recognition
                    </h1>
                    <p className = {styles.text}>
                    Thinking about different ways that you can go about controlling the directions, I wanted to think about other ways that 
                    I came up with the idea where I would use my face as controller, using the ML5 faceMesh API I was able to track when my face was turning 
                    left, right, up, and down. 
                    </p>
                    </div>
            </div>
            <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Face mesh for opening mouth, turning head left and right, and moving head up and down. 
                    </p>
                    </div>
                    <div>
                    <iframe width = "100%" height = "500px"src= "https://player.vimeo.com/video/743139368?autoplay=1&loop=1&mute=1&controls=0"
                 frameBorder = "0" modestbranding = "1"></iframe>

                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Demonstration of how a face may be used to control movement throughout the grid 
                    </p>
                    </div>
                    <div>
                    <p className = {styles.text}>
                        To detect when a user turned their head right, left, up, and down, I found the points in the API that corresponded to the left and right of the
                        cheeks, the forehead, and the mouth and found the distance of those points to the nose—when the distance passes or goes under a certain value, the grid would move. 
                    </p>
                    <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/hzHO7XYRJdw?autoplay=1&loop=1&mute=1&controls=0&playlist=hzHO7XYRJdw"
                 frameBorder = "0" modestbranding = "1"></iframe>

                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Demonstration of opening of mouth being used as a camera button
                    </p>
                    </div>
                    <div>
                    <p className = {styles.text}>
                       To add a function that could detect when to assign a spot on the grid a color without using the keyboard, I decided for the interface to assign a color 
                       whenever the user opened their mouth. The mouse in a way almost acts like a camera button. 
                    </p>
                    <iframe width = "100%" height = "500px"src="https://player.vimeo.com/video/743183207?autoplay=1&loop=1&mute=1&controls=0"
                 frameBorder = "0" modestbranding = "1"></iframe>

                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <p className = {styles.text}>
                      Overall, the interaction provided users with a way to navigate an interface relatively precisely, as long as the interface
                      can find the distance between points on the user&rsquo;s face. This interaction 
                      could be used in an environment where using a keyboard is not ideal, such as unhygenic public touchpads. 

                    </p>

                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.pTitle}> 
                   Project Reflection 
                    </h1>
                    <p className = {styles.text}>
                    These different experiments allowed me to understand how I could implement different interactions into an interface, and how
                    they could make my interaction design both more intuitive or convoluted. Some of these errors may stem from issues with the API, and 
                    discomfort when interacting with the project may come from the habits that users have developed when using technology. 
                    <br></br>
                    <br></br>
                    Moving forward, I would like to move past relying on the camera to be the primary hardware that detects interactions and explore how
                    physical objects can be used in interaction design. 


                    </p>    
                    </div>
                </div>
            <Footer/>
        </div>
    )
}