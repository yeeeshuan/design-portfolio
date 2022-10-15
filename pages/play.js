import styled from 'styled-components'; 
import styles from "../styles/Play.module.css"; 
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';
import S1 from "../Images/Play/Sketches/1.jpg"
import S2 from "../Images/Play/Sketches/2.jpg"
import S3 from "../Images/Play/Sketches/3.jpg"
import S4 from "../Images/Play/Sketches/4.jpg"
import S5 from "../Images/Play/Sketches/5.jpg"
import S6 from "../Images/Play/Sketches/6.jpg"
import S7 from "../Images/Play/Sketches/7.jpg"
import P1 from "../Images/Play/Photos/1.jpg"
import P2 from "../Images/Play/Photos/2.jpg"
import P3 from "../Images/Play/Photos/3.jpg"
import P4 from "../Images/Play/Photos/4.jpg"
import P5 from "../Images/Play/Photos/5.jpg"
import P6 from "../Images/Play/Photos/6.jpg"
import P7 from "../Images/Play/Photos/7.jpg"
import P8 from "../Images/Play/Photos/8.jpg"
import P9 from "../Images/Play/Photos/9.jpg"

export default function Play(){
return(
    <div className = {styles.play}>
        <Navbar/>
        <br></br>
        <h1 className = {styles.title}>
            A collection of personal projects and explorations to help me gain new skills. 
        </h1>
        <hr className = {styles.temp}></hr>
        <p className = {styles.intro}>
            Photos
        </p>
        <p className = {styles.description}>
            Snapshots of my everyday life
        </p>
        <div className = {styles.photoGallery}>
            <div>
                <div className = {styles.sep}>
                    <Image className = "P1" src = {P1}  alt = "P1"/> 
                </div>
                <div className = {styles.sep}>
                    <Image className = "P1" src = {P2}  alt = "P1"/> 
                </div>
                <div className = {styles.sep}>
                    <Image className = "P1" src = {P3}  alt = "P1"/> 
                </div>
            </div>
            <div>
                <div className = {styles.sep}>
                    <Image className = "P1" src = {P4}  alt = "P1"/> 
                </div>
                <div className = {styles.sep}>
                    <Image className = "P1" src = {P5}  alt = "P1"/> 
                </div>
                <div className = {styles.sep}>
                    <Image className = "P1" src = {P6}  alt = "P1"/> 
                </div>
            </div>
            <div>
                <div className = {styles.sep}>
                    <Image className = "P1" src = {P7}  alt = "P1"/> 
                </div>
                <div className = {styles.sep}>
                    <Image className = "P1" src = {P8}  alt = "P1"/> 
                </div>
                <div className = {styles.sep}>
                    <Image className = "P1" src = {P9}  alt = "P1"/> 
                </div>
            </div>
        </div>
        <br></br>
        <hr className = {styles.temp}></hr>
        <p className = {styles.intro}>
            Sketches
        </p>
        <p className = {styles.description}>
            A few sketches from my current sketchbook 
        </p>
        <div className = {styles.photoGallery}>
            <div>
                <div className = {styles.sep}>
                    <Image className = "P1" src = {S1}  alt = "P1"/> 
                </div>
                <div className = {styles.sep}>
                    <Image className = "P1" src = {S4}  alt = "P1"/> 
                </div>
            </div>
            <div>
                <div className = {styles.sep}>
                    <Image className = "P1" src = {S2}  alt = "P1"/> 
                </div>
                <div className = {styles.sep}>
                    <Image className = "P1" src = {S5}  alt = "P1"/> 
                </div>
            </div>
            <div>
                <div className = {styles.sep}>
                    <Image className = "P1" src = {S6}  alt = "P1"/> 
                </div>
                <div className = {styles.sep}>
                    <Image className = "P1" src = {S3}  alt = "P1"/> 
                </div>
            </div>
        </div>
        <div className = {styles.singlePhoto}>
            <Image className = "P1" src = {S7}  alt = "P1"/> 
        </div>
        <br></br>
        <br></br>
        <Footer/>
    </div>
    )
 
}