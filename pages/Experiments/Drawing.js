import Head from 'next/head';
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function Drawing(){
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
            A spatial computing application that explores how to bring 2D tools build for the computer screen in to a digital/physical space.
            </p>
         </div>
         </div>
        <div style = {{
            display: "flex", 
            justifyContent: "center", 
            marginTop: "50px",
        
        }}>
            <iframe className = "thumbnail" src = "https://www.youtube.com/embed/U7Dsg2RzCeA?&autoplay=1&loop=1&mute=1&controls=0&playlist=U7Dsg2RzCeA"
                width = {1080} height ={600} frameBorder="0" alt = "cover image"/>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Project Ideation
            </h1>
            <p className = {styles.text}>
            When thinking about Spatial Computing, something that interested me was the idea of exploring what combining physical and digital interactions would afford the user. Interactions in Spatial Computing are not limited to the 2-D computer screen and keyboard and mouse—allowing me to completely rethink how I want users to interact with an interface.
            <br/>
            <br/>
            With this, I wanted to explore how I could bring a 2-D interaction into the spatial computing space: a drawing tool. The pen tool in many digital applications has a very defined paradigm for how users can (and should) use it—but how can bringing it into the spatial computing space help improve the interaction?
            <br/>
            <br/>
            <h1 className = {styles.pTitle}> 
                Main Features Explored
            </h1>
            For this project, I wanted to explore how I could create a drawing application that fully explores the capabilities of Spatial Computing. I explore: 
            <br/>
            <br/>
            1. The interaction of users bringing their drawings out of the digital screen and into the physical space—and then back to the digital screen.
            <br/>
            <br/>
            2. Different ways the user can control colors, brush width/size when drawing in space.
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
                Research
            </h1>
            <p className = {styles.text}>
            Since I wanted to see what a drawing application in a spatial computing space would look like, I first did a bit of research understanding some of the shortcomings to drawing tools on the digital screen. 
            <br/>
            <br/>
            - <strong>Limitations to interactions</strong>: Users are limited to dragging a mouse to create extremely accurate lines and curves—it is difficult to draw freeform using the trackpad without an external tool.
            <br/>
            <br/>
            - <strong>Mode errors:</strong> When wanting to change the color or mode, there is a need for the user to stop what they are doing, toggle a different mode, and continue working.
            <br/>
            <br/>
            - <strong>Accessibility Issues:</strong> When coloring or drawing, it is difficult for users with hand problems to utilize the trackpad and keyboard.
            <br/>
            <br/>
            With this, I wanted to explore how I could bring a 2-D interaction into the spatial computing space: a drawing tool. Drawing tools in many digital applications have a very defined paradigm for how users can (and should) use it—but how can bringing it into the spatial computing space help improve the interaction?
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Drawing Interaction Prototype
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
            <br/>
            <br/>
            Another thought that occurred to me was that maybe the calibration of the object in motive was inaccurate. Thus, I tried recalibrating the object; it worked a lot better, but the application was still very sensitive to small movements and inaccuracies.
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