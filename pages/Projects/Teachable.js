import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Thumbnail from "../../Images/About/P2.png"
import GTM from "../../Images/Projects/Teachable/GTM.png"; 
import Figma from "../..//Images/Projects/Teachable/Figma.png"

export default function Teachable(){
    return(
        <div>
             <Head>
            <title>Ethan Huang Design | Interactive Grid</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Interactive Grid   
            </h1>
            <div className = {styles.intro}>
                <div className = {styles.role}>
                    <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Web Development, Creative Coding, Interaction Design </p> 
                    <br></br>
                    <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> November 2022 </p>
                    <br></br>
                    <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> React.js, P5.js, Google Teachable Machine, ML5.js</p>
                </div>
                <div className = {styles.cont}> 
                    <p className = {styles.text}>
                    This project is a collection of interaction design experiments presented through the form of a game. Using the Google Teachable Machine 
                    and the ML5.js libraries, I was able to gain a deeper understanding of how to incorporate interactions into designs—if there is a better method to design 
                    interactions for the Human-Processing-Model. 
                    </p>
                    <br/>
                    <br/>
                    <p>
                        <a className = {styles.links} href = "https://yeeeshuan.github.io/interactive_grid/" rel="noopener noreferrer" target="_blank"> Live Website </a> 
                        <a className = {styles.links} href = "https://github.com/yeeeshuan/interactive_grid" rel="noopener noreferrer" target="_blank">Github</a>
                    </p>
                </div>
         </div>
            <div style = {{
                display: "flex", 
                justifyContent: "center", 
            
            }}>
                <Image src = {Thumbnail} width = {1080} height ={600} alt = "cover image"/>
            </div>
            <br/>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Problem Space 
                </h1>
                    <p className = {styles.text}>
                    The purpose of this website is to educate designers on machine learning libraries and methods to design for accessible interactions
                    —a keyboard is often hard to use for those with disabilities that affect mobility, and hardware designed for accessibility is often 
                    expensive and uncomfortable. The information I am conveying on this website is a variety of experimental interactions that users can 
                    activate using their hands, faces, random objects around them, and sound. Users are encouraged to experiment with how to use the interactions 
                    to: 
                        <br></br>
                        <br></br>1. Set a color to a module. 
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
                    <h1 className = {styles.pTitle}> 
                    Color Assignment 
                     </h1>
                    <h1 className = {styles.bTitle}> 
                    Visual Detection
                    </h1>
                    <p className = {styles.text}>
                    When the user moves to a block, they have the option of coloring the block blue, purple, or pink using different hand gestures.
                    I used the ML5.js handpose library to be able to detect the number of fingers being held up and connect them with different colors 
                     they would represent.
                    </p>    
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                        <p className = {styles.d}> 
                        Model in action 
                        </p>
                    </div>
                    <div>
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/7TSUz23Ogxs?autoplay=1&loop=1&mute=1&controls=0&playlist=7TSUz23Ogxs" title="Handpose Demonstration" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                        <h1 className = {styles.bTitle}> 
                        Audio Detection
                        </h1>
                        <p className = {styles.text}>
                        I used the Google Teachable Machine to incorporate auditory interactions in my website, training the models to be able to detect knocks, 
                        crinkling of paper, and claps. 
                        </p>    
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                        <p className = {styles.d}> 
                        Training Google Teachable Machine to recognize sounds
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
                    <iframe width = "100%" height = "500px"src="https://www.youtube.com/embed/myro03md-mc?autoplay=0&loop=0&mute=0&controls=1&playlist=myro03md-mc"
                    frameBorder = "0" modestBranding = "1"></iframe>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                        <h1 className = {styles.bTitle}> 
                        Object Recognition
                        </h1>
                        <p className = {styles.text}>
                        Thinking about different ways users can use a webcam to assign interactions, I decided to have the ML5.js objectDetection library 
                        </p>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                        <p className = {styles.d}> 
                            Demonstration of how object detection interaction functions. First assign objects to color, then use objects to color modules. 
                        </p>
                    </div>
                    <div>
                        <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/O1qUn1EHfTQ?autoplay=1&loop=1&mute=1&controls=0&playlist=O1qUn1EHfTQ"
                        frameBorder = "0" modestBranding = "1"></iframe>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.pTitle}> 
                    Movement
                     </h1>
                    <h1 className = {styles.bTitle}> 
                    Speech Recognition 
                    </h1>
                    <p className = {styles.text}>
                    With the help of the Ml5.js library, when the user communicates whether they want to go up, down, left, or right, the interface detects the 
                    sound and moves on the grid accordingly. 
                    </p>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Audio interaction in action 
                    </p>
                    </div>
                    <div>
                    <iframe width = "100%" height = "500px"src="https://www.youtube.com/embed/183t1zx_YNQ?autoplay=0&loop=0&mute=0&controls=1&playlist=183t1zx_YNQ"
                    frameBorder = "0" modestBranding = "1"></iframe>
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
                    I came up with the idea where I would use my face as controller, using the ML5.js faceMesh library I was able to track when my face was turning 
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
                    <iframe width = "100%" height = "500px"src= "https://player.vimeo.com/video/743139368" frameBorder = "0" modestBranding = "1"></iframe>

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
                        To detect when a user turned their head right, left, up, and opened their mouth to move down, I found the points in the Facemesh library that corresponded to the left and right of the
                        cheeks, the forehead, and the mouth and found the distance of those points to the nose—when the distance passes or goes under a certain value, the grid would move. 
                    </p>
                    <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/hzHO7XYRJdw?autoplay=1&loop=1&mute=1&controls=0&playlist=hzHO7XYRJdw"
                 frameBorder = "0" modestBranding = "1"></iframe>

                    </div>
                </div>
                <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Interface Design 
                </h1>
                     <p className = {styles.text}>
                        Since many of the modes to interact with the interface of experimental, a big part of designing the interface was aimed at 
                        educating users on the purpose of the interactions and the process of onboarding users.  
                    </p>
                    <br/>
                    <br/>
                    <p className = {styles.text}>
                       With the addition of a home page, individual descriptions to describe the interaction and libraries used, and pop-ups to 
                       onboard users, users will understand the purposes of each interaction and how it can be used to design for accessibility. 
                    </p>
                    
                </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                   Original Figma mockups 
                    </p>
                    </div>
                    <div>
                   <Image src = {Figma} alt = "gtm"></Image>
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
                    they could make my interaction design both more intuitive and usable for the user. The process of onboarding was especially hard to design for, since many of these interactions are experimental, 
                    and users are not expected to know how to interact with the interface on first use. 
                    <br></br>
                    <br></br>
                    Moving forward, I would like to move past relying on the camera and speaker to be the primary hardware that detects interactions and explore how
                    physical objects can be used in interaction design. 
                    </p>    
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}