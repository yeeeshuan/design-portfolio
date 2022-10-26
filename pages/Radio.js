import styled from 'styled-components'; 
import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import Thumbnail from '../Images/About/P5.jpg'; 
import Sketch1 from '../Images/Projects/Speaker/1.jpg'
import Sketch2 from '../Images/Projects/Speaker/2.jpeg'
import Sketch3 from '../Images/Projects/Speaker/3.jpeg'
import Sketch4 from '../Images/Projects/Speaker/4.jpg'
import Sketch5 from '../Images/Projects/Speaker/5.jpg'
import Sketch6 from '../Images/Projects/Speaker/6.jpeg'
import Sketch7 from '../Images/Projects/Speaker/7.jpeg'
import Sketch8 from '../Images/Projects/Speaker/8.jpeg'
import Sketch9 from '../Images/Projects/Speaker/9.jpeg'
import Sketch10 from '../Images/Projects/Speaker/10.jpeg'
import Sketch11 from '../Images/Projects/Speaker/11.jpeg'
import Sketch12 from '../Images/Projects/Speaker/12.jpeg'
import Navbar from '../components/navbar';
import Footer from '../components/footer';


export default function Systems(){
    return(

        <div>
            <Navbar/>
            <div className = {styles.intro}>
            <div>
            <h1 className = {styles.mTitle}> 
            Smart Radio 
            </h1>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Rapid Prototyping, Physical Computing, User Testing</p> 
            <br></br>
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> October 2022 </p>
            <br></br>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Solidworks, Raspberry Pi, Stratasys 3D Printer, Sketching</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
                A physical computing project that aims to experiment with physical form and different methods of physical hardware interactions. I used a Raspberry Pi and Speaker Part to explore different 
                interactions to control the speaker, and 3-D printed an enclosure to look at how form can help amplify sound. 
           
            </p>
            </div>
            </div>
            <div style = {{
                display: "flex", 
                justifyContent: "center", 
            
            }}>
                <Image src = {Thumbnail} width = {1080} height ={720} alt = "cover image"/>
            </div>

            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Project description
                </h1>
                    <p className = {styles.text}>
                    This fully-functional smart radio is an exploration of form language in physical products, as well as how 
                    hardware can be used to guide physical interactions—moving past the typical use of a button to control a speaker
                    and experimenting with a new standard for interactions. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Initial Sketches      
                </h1>
                <h1 className = {styles.bTitle}> 
                    Form Study      
                </h1>
                    <p className = {styles.text}>
                       Since I was creating a speaker that was meant to be portable, I wanted the speaker to be easy to grab. 
                       Thus, I decided to move forward with exploring a spherical shape that felt pleasant to hold.         
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                    Form Study 
                    </p>
                </div>
                <div>
                    <div className = {styles.image_2}>
                        <Image src = {Sketch11}  alt = "cover image"/>
                        <Image src = {Sketch12}  alt = "cover image"/>
                    </div>
                    <div className = {styles.image_2}>
                        <Image src = {Sketch1}  alt = "cover image"/>
                        <Image src = {Sketch10}  alt = "cover image"/>
                    </div>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                    <h1 className = {styles.bTitle}> 
                        Iteration 1    
                    </h1>
                    <p className = {styles.text}>
                        I explored different spherical forms and shapes that inform users that the speaker is meant to 
                        be portable and interactive through orthographic drawings. 

                        The speaker part would be enclosed by the speaker encloser, helping to amplify the sound and to direct the sound at the user.    
                    </p>
                </div>
            </div>   
            <div className = {styles.page}>
                <p className = {styles.d}> 
                   Speaker Ideation 
                </p>
                <div className = {styles.image_2}>
                    <Image src = {Sketch2}  alt = "cover image"/>
                    <Image src = {Sketch3}  alt = "cover image"/>
                </div>
            </div> 
            <div className = {styles.page}>
                <div>
                <p className = {styles.d}>
                    3-D Print 
                </p>
                </div>
                <div className = {styles.image_2}>
                <Image src = {Sketch6}  alt = "cover image"/>  
                <Image src = {Sketch7}  alt = "cover image"/>  
                </div>
            </div>          
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                    <div>
                    <h1 className = {styles.pTitle}> 
                        Finger Hold Ideation   
                    </h1>
                    <h1 className = {styles.bTitle}> 
                        Iteration 2    
                    </h1>
                    </div>
                    <p className = {styles.text}>
                        Moving forward, I explored different spherical forms and shapes that inform users that the speaker is meant to 
                        be portable and interactive through orthographic drawings. 

                        The speaker part would be enclosed by the speaker enclosure, helping to amplify the sound and to direct the sound at the user.    
                    </p>
                </div>
            </div>
   
            <div className = {styles.page}>
                <p className = {styles.d}>
                    Finger Hold Ideation 
                </p>
                <div className = {styles.image_2}>
                    <Image src = {Sketch4}  alt = "cover image"/>
                    <Image src = {Sketch5}  alt = "cover image"/>  
                </div>
                
            </div>
   
            <div className = {styles.page}>
               <div>
                    <p className = {styles.d}>
                        3-D Print 
                    </p>
               </div>
                <div className = {styles.image_2}>
                    <Image src = {Sketch8}  alt = "cover image"/>
                    <Image src = {Sketch9}  alt = "cover image"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div></div>
                <h1 className = {styles.bTitle}>
                    More info soon 
                </h1>
            </div>
        <Footer/>
        </div>
    )
}