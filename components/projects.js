import styled from 'styled-components'; 
import Link from 'next/link';
import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import P1 from '../Images/About/P1.png'; 
import P2 from '../Images/About/P2.gif';
import P3 from '../Images/About/P3.png'; 
import P4 from '../Images/About/P4.gif'; 
import P5 from '../Images/About/P5.png'; 
import P6 from '../Images/About/P6.png'; 


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
            <Link href = "/Teachable">
            <span className = {styles.imageWrap}>
            <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>

                <iframe width = "100%" height = "390px"src="https://www.youtube.com/embed/7lnMo1m1O3g?autoplay=1&loop=1&mute=1&controls=0&playlist=7lnMo1m1O3g"
                 frameborder = "0" modestbranding = "1"></iframe>

                    <h1 className = {styles.title}> Teachable Grid</h1>
                <p className = {styles.words}> Designing with ML </p>
                </div>
                </span>
                </Link>
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
                <iframe width = "100%" height = "390px"src="https://www.youtube.com/embed/hkSLkaNLPu8?autoplay=1&loop=1&mute=1&controls=0&playlist=hkSLkaNLPu8"
                 frameborder = "0" modestbranding = "1"></iframe>
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
                <div className="item-container">
                    <Image className = "P6" src = {P6}  alt = "Fruit Ninja"/> 
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