import styled from 'styled-components'; 
import styles from "../styles/Home.module.css"; 
import Image from "next/image";
import P1 from '../Images/P1.png'; 
import P2 from '../Images/P2.png'; 
import P3 from '../Images/P3.png'; 


const Projects_1 = () => 
{
    return(
        <div className = {styles.gallery}>
            <span className = {styles.imageWrap}>
            <div className="item-container">
                <Image className = "P1" src = {P1}  alt = "Math2Shine"/> 
                <h1 className = {styles.title}> Math2Shine Redesign</h1>
                <p className = {styles.words}> Interaction Design, Web Development </p>
            </div>
            </span>
            <span className = {styles.imageWrap}>
            <div className="item-container">
                <a href = "https://medium.com/@yixuanhu/animals-part-3-5d3e83581c80">
                <div style={{ overflow: 'hidden'}}>
                    <Image className = "P2" src = {P2}  alt = "Animals"/> 
                </div>
                    <h1 className = {styles.title}> Teachable Grid</h1>
                <p className = {styles.words}> P5.js, Google Teachable Machine, ml5.js </p>
                </a>
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
                    <Image className = "P1" src = {P3}  alt = "Math2Shine"/> 
                    <h1 className = {styles.title}> Math2Shine Redesign</h1>
                    <p className = {styles.words}> Interaction Design, Web Development </p>
                </div>
                </span>
                <span className = {styles.imageWrap}>
                <div className="item-container">
                    <a href = "https://medium.com/@yixuanhu/animals-part-3-5d3e83581c80">
                    <div style={{ overflow: 'hidden'}}>
                        <Image className = "P2" src = {P2}  alt = "Animals"/> 
                    </div>
                        <h1 className = {styles.title}> Teachable Grid</h1>
                    <p className = {styles.words}> P5.js, Google Teachable Machine, ml5.js </p>
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
        </div>
    )
}