import Head from 'next/head';
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import BG from '../../Images/Projects/Drawing/BG.png'
import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height,
    }
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 0})

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        
        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    return windowDimensions
}

export default function Drawing(){

    const size = useWindowDimensions();
    let width = size.width; 

    return(

        <div>
             <Head>
            <title>Ethan Huang Design | Drawing</title>
            </Head>
            <div className = {styles.invisible}>
            </div>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            AR Drawing Tool
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Interaction Designer, Prototyper</p> 
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> September — December 2023 </p>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Unity (C#), Optitrack, Motive, ESP32</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            A spatial computing application that explores how to bring 2D tools built for the computer screen into spatial computing.
            </p>
         </div>
         </div>
        <div style = {{
            display: "flex", 
            justifyContent: "center", 
            marginTop: "50px",
        
        }}>
            {width > 500 && (
            <iframe className = "thumbnail" src="https://www.youtube.com/embed/Y57mo29ETNE?si=XD-G6duvHZ2PW2lY&autoplay=1&loop=1&mute=1&controls=0&playlist=Y57mo29ETNE"
                width = {1080} height ={600} frameBorder="0" alt = "cover image"/>
            )}

            {width <= 500 && (
            <iframe className = "thumbnail" src="https://www.youtube.com/embed/Y57mo29ETNE?si=XD-G6duvHZ2PW2lY&autoplay=1&loop=1&mute=1&controls=0&playlist=Y57mo29ETNE"
                width = {1080} height ={250} frameBorder="0" alt = "cover image"/>
            )}

        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Project Ideation
            </h1>
            <p className = {styles.text}>
            When thinking about the possibilities of spatial computing, something that interested me was the idea of exploring what combining physical and digital interactions would afford the user. Spatial computing allowed for a whole new set of interactions — for users to both physically and digitally interact with artifacts and move around the space — all things that I could explore. 
            <br/>
            <br/>
            With this, I wanted to experiment with how I could bring a 2-D interaction into the spatial computing space. The pen tool in many digital applications has a very defined paradigm for how users can use it—but how can bringing it into the spatial computing space add to the interaction?
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div>
                <h1 className = {styles.pTitle}> 
                    Background Research
                </h1>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Study of current applications
                </p>
            </div>
            <div>
                <Image src = {BG} alt = "Background Info"/>
            </div>
        </div>
        <div className = {styles.page}>
            <div></div>
            <div>
                <p className = {styles.text}>
                    To start the project, I explored how current applications allow for users to draw. It was interesting to think about how even though the final product exists on the digital screen, the interactions to create it are physical, and take inspiration from the physical act of drawing. 
                </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div>
                <h1 className = {styles.pTitle}> 
                    Main Features Explored
                </h1>
                <p className = {styles.text}>
                I wanted to explore how I could create a drawing application that fully explores the capabilities of Spatial Computing. I explore: 
                <br/>
                <br/>
                1. The interaction of users bringing their drawings out of the digital screen and into the physical space—and then back to the digital screen.
                <br/>
                <br/>
                2. Different ways the user can control colors, brush width/size when drawing in space. <strong>I wanted for the interactions to take advantage of the user&rsquo;s ability to move and interact in the physical space.</strong>
                <br/>
                <br/>
                3. How haptics can help aid the action of drawing if users are using an external device to draw.
                </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Prototyping
            </h1>
            <h1 className = {styles.bTitle}> 
                Drawing Interaction 
            </h1>
            <p className = {styles.text}>
            To start this project, I started with creating a simple drawing tool that draws a line on the wall of the studio. <strong>I wanted to make sure that the drawing interaction itself was user friendly</strong> before thinking about features such as changing color.

            I began by mocking up the interaction in Unity, and substituting the controller with a cylinder shape. I used a Raycast to see where the controller would be hitting the wall, and created a line from all of the points.
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Drawing Application in Unity
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/2quPeMbwExQ?si=RBAUxgu0gfXtPF-2&amp;loop=1&amp;mute=0&amp;controls=1&amp;" frameBorder = "0" modestBranding = "1"></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <p className = {styles.text}>
            After mocking up the interaction in unity, I used Optitrack and Motive to calculate where the location of the controller was in the room. 
            <br/>
            <br/>
            This way, I would be able to bring the interaction from unity in to the physical space.
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Initial Drawing Application Test
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/M25Myd5X1i4?si=QkHCD0pA3YOr7wP5&amp;loop=1&amp;mute=0&amp;controls=1&amp;" frameBorder = "0" modestBranding = "1"></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <p className = {styles.text}>
            It was good progress that I was able to bring the application into space, but the interaction seemed to be rough. Unity was having a hard time processing the position of the Raycast hit, and it seemed be very sensitive to how I rotate and move the controller. 
            <br/>
            <br/>
            To improve the interaction, it would be interesting to think about how I wanted to <strong>change the parameters that determine how sensitive the system is to better aid the action of drawing.</strong>
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Drawing Application after Recalibration 
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/U7Dsg2RzCeA?si=I54Pe1gBHdgTTRaW&amp;loop=1&amp;mute=0&amp;controls=1&amp;" frameBorder = "0" modestBranding = "1"></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Final Drawing Interaction
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/Y57mo29ETNE?si=XD-G6duvHZ2PW2lY&amp;loop=1&amp;mute=0&amp;controls=1&amp;" frameBorder = "0" modestBranding = "1"></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div>
            <h1 className = {styles.bTitle}> 
            Changing Color Interaction 
            </h1>
            <p className = {styles.text}>
               Next, I prototyped an interaction for how users can change colors. I wanted for users to feel as if there was a physical color palette in front of them, blending the use of both physcial and digital interactions. 
            </p>    
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Changing Color Interaction in Unity
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/W4tB8SHo-bk?si=OnA-AwaeqBj6msSw&amp;loop=1&amp;mute=0&amp;controls=1&amp;" frameBorder = "0" modestBranding = "1"></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Changing Color Interaction Iter01
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/Sn2jOkYIO_Q?si=i2fqx7xx4L4pMvPX&amp;loop=1&amp;mute=0&amp;controls=1&amp;" frameBorder = "0" modestBranding = "1"></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div>
            <p className = {styles.text}>
                Although this interaction was utilizing tracking,<strong> it did not feel like it was taking full advantage of the spatial computing space.</strong> The three blocks felt like they were limiting users to move around the space and simulating buttons in a digital interface. 
            </p>    
            <br/>
            <br/>
            <p className = {styles.text}>
                Thus, moving forward, I wanted to think more about how I could take advantage of the physical computing space to seamlessly mesh physical and digital interactions. To encourage more physicality into the interactions, I came up with the idea that to change colors, users would switch an attachment to the pen. 
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Drawing Interaction Iter02
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/tCSG15mESjc?si=4buWVsdAYjmYcMEJ&amp;loop=1&amp;mute=0&amp;controls=1&amp;" frameBorder = "0" modestBranding = "1"></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div>
                <h1 className = {styles.bTitle}> 
                More info soon!
                </h1>
            </div>
        </div>  
                </main>
            <Footer/>
        </div>
    )
}