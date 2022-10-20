import styled from 'styled-components'; 
import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import Thumbnail from '../Images/About/P5.jpg'; 
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
            
        <Footer/>
        </div>
    )
}