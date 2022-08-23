import styled from 'styled-components'; 
import Link from 'next/link';
import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import P1 from '../Images/About/P1.png'; 
import P2 from '../Images/About/P2.gif';
import P3 from '../Images/About/P3.png'; 
import P4 from '../Images/About/P4.gif'; 
import P5 from '../Images/About/P5.gif'; 
import P6 from '../Images/About/P6.jpg'; 


const Projects_1 = () => {

    return(
        <div className = {styles.gallery}>
            <span className = {styles.imageWrap}>
            <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
                <Link href = "/Math2Shine">
                    <Image className = "P1" src = {P1}  alt = "Math2Shine"/> 
                </Link>
                <h1 className = {styles.title}> Math2Shine Redesign</h1>
                <p className = {styles.words}> Interaction Design, Web Development </p>

            </div>
            </span>
            <span className = {styles.imageWrap}>
            <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
                <Link href = "/Teachable">
                    <Image className = "P2" src = {P2}  alt = "Teachable"/> 
                </Link>
                    <h1 className = {styles.title}> Teachable Grid</h1>
                <p className = {styles.words}> Designing with ML </p>
                </div>
                </span>
        </div>
    )
}

const Projects_2 = () => 
{
        return(
            <div className = {styles.gallery}>
                <span className = {styles.imageWrap}>
                <div className="item-container">
                <a href = "https://medium.com/@yixuanhu/project-4-lighting-engines-714ca3dd0cf6">
                <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image className = "P3" src = {P3}  alt = "Lighting Engines"/> 
                </div>
                    <h1 className = {styles.title}> Lighting Engines</h1>
                    <p className = {styles.words}> Product Design </p>
                </a>
                </div>
                </span>
                <span className = {styles.imageWrap}>
            <div className="item-container">
                <a href = "https://medium.com/@yixuanhu/animals-part-3-5d3e83581c80">
                <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image className = "Turtle" src = {P4}  alt = "Endangered Animals"/> 
                </div>
                    <h1 className = {styles.title}> Endangered Animals Animation</h1>
                <p className = {styles.words}> Illustration, Animation</p>
                </a> 
                </div>
                </span>
            </div>
        )
}

const Projects_3 = () => 
{
        return(
            <div className = {styles.gallery}>
                <span className = {styles.imageWrap}>
                <div className="item-container">
                <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image className = "P5" src = {P5}  alt = "Fruit Ninja"/> 
                </div>
                    <h1 className = {styles.title}> Interactive Fruit Ninja</h1>
                    <p className = {styles.words}> Python, OpenCV, Mediapipe</p>
                </div>
                </span>
                <span className = {styles.imageWrap}>
            <div className="item-container">
                <a href = "https://medium.com/@yixuanhu/project-2-dace6957f382">
                <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
                    <Image className = "Turtle" src = {P6}  alt = "Endangered Animals"/> 
                </div>
                    <h1 className = {styles.title}> Special Carriers</h1>
                <p className = {styles.words}> Product Design</p>
                </a> 
                </div>
                </span>
            </div>
        )
}

export default function Projects(){
    return(
        <div>
            <Projects_1/>
            <Projects_2/>
            <Projects_3/>
        </div>
    )
}