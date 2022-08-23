import styled from 'styled-components'; 
import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import P1 from "../Images/About/P2.gif"

export default function Teachable(){
    return(

        <div>
            <Navbar/>
            <div className = {styles.page}>
            <div>
            <h1 className = {styles.pTitle}> 
            Teachable Grid   
            </h1>
            <br></br>
            Role: <p className = {styles.d}>Creative Coding </p> 
            <br></br>
            <br></br>
            Duration: <p className = {styles.d}> July 2022 </p>
            <br></br>
            <br></br>
            Tools:  <p className = {styles.d}>HTML, P5.js, Google Teachable Machine, Web Speech API</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            This project is a collection of interaction design experiments presented through the form of a game. Using the Google Teachable Machine 
            and the Web Speech API, I was able to gain a deeper understanding of how to incorporate interactions into my designs — cases where they are helpful 
            vs. cases where they become convoluted and confusing. 
            </p>
         </div>
         </div>
            <div style = {{
                display: "flex", 
                justifyContent: "center", 
            
            }}>
                <Image src = {P1} width = {1080} height ={600} alt = "cover image"/>
            </div>
            <div className = {styles.page}>
                <div>
                <h1 className = {styles.pTitle}> 
                    Problem Space 
                </h1>
                </div>
                <div>
                    <p className = {styles.text}>
                        Most technology today is limited in the number of ways one can navigate through it --- typing on a keyboard or mouse, or tapping on a screen. 
                        With this project, I wanted to move away from the typing and tapping to interact with technology and utilize other interactions 
                        as well, such as speaking or making signs with our hands to understand when to best incorporate such interactions. 
                    </p>

                </div>
            </div>
            <Footer/>
        </div>
    )
}