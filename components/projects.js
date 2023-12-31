import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import UCRE from '../Images/About/UCRE.png'; 
import P7 from '../Images/About/P7.jpg'; 
import DH from '../Images/About/DH.jpg'
import TEDxCMU from '../Images/About/TEDxCMU.png'
import Gmail from "../Images/About/Gmail.png";
import Deceptive from "../Images/About/Deceptive.png";
import onHover from "../Images/About/onHover.png"

import React, {useState, useEffect, Component } from 'react';

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

function Video(props){
    const size = useWindowDimensions();
    let height = size.height; 
    if (height >= 700 && height <= 800){
        height = (size.height/ 3.5); 
    }
    if (height >= 800){
        height = (size.height / 2.5); 
    }
    return(
        <div className = {styles.imageWrap}>
                <div className="item-container">
                <a href = {props.link}>
                <div className = {styles.overLay}> <a href = {props.link}></a></div>
                <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
                    <iframe className = "ytplayer" width = "100%" height ={height} src={props.thumbnail}
                    frameBorder = "0" modestBranding = "1"></iframe>
                </div>
                <div className={styles.cardDes}>
                <div className={styles.cardLeft}>
                    <h1 className = {styles.title}> {props.name}</h1>
                    <p className = {styles.words}> {props.description} </p>
                </div>
                <div className={styles.cardRight}>
                    <Image width = {50} height = {50} src = {onHover} alt = "image"/> 
                </div>
            </div>
                </a> 
                </div>
        </div>
    )

}

function Img(props){
    return(
         <div className = {styles.imageWrap}>
            <div className="item-container">
            <a href = {props.link}>
            <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
                <Image src = {props.image} alt = "image"/> 
            </div>
            <div className={styles.cardDes}>
                <div className={styles.cardLeft}>
                    <h1 className = {styles.title}> {props.name}</h1>
                    <p className = {styles.words}> {props.description} </p>
                </div>
                <div className={styles.cardRight}>
                    <Image width = {50} height = {50} src = {onHover} alt = "image"/> 
                </div>
            </div>
            </a> 
            </div>
         </div>
    )
}

class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {
            projects:[
                {type : "i", name : "Landesberg Design Internship", description: "Web and Print Design", image: P7, link: "Projects/Landesberg"}, 
                {type : "i", name : "Gmail Filtering System Redesign", description: "Interaction Design, Front-End Development", image : Gmail, link: "Projects/Gmail" },  
                {type : "v", name : "Interactive Grid", description: "Designing with ML", link: "Projects/Teachable", 
                thumbnail: "https://www.youtube.com/embed/7TSUz23Ogxs?start=0&end=14&autoplay=1&loop=1&mute=1&controls=0&playlist=7TSUz23Ogxs" }, 
                //{type : "i", name : "Math2Shine Redesign", description: "Interaction Design, Front-End Development", image : P1, link: "Projects/Math2Shine" }, 
                {type : "i", name : "Deceptive UI Study", description: "UX Research, Prototyping", image: Deceptive, link: "https://bold-milkshake-c2a.notion.site/Deceptive-UI-Study-2862f1bc4f834ae6af4ae73f5eed2867?pvs=4"}, 
                {type : "i", name : "Design Hero: Wolfgang Weingart", description: "Multi-media series for typographer Wolfgang Weingart", image: DH, link: "Projects/Dh"},
                {type : "i", name : "TEDxCMU Innovation", description: "Interactive Projects", image: TEDxCMU, link: "Projects/TEDxCMU"}, 
                //{type : "i", name : "Graphic Studies", description: "Illustration, typesetting, and animation", image : P3, link: "/Posters" }, 
                //{type : "i", name : "PGH Water Quality", description: "Systems Mapping", image : P4, link: "/Systems" }, 
            ]
        }
    }
    render(){
    return(
        <div className = {styles.projectRow}>
            {this.state.projects.map((project, idx) => {
                if (project.type == "v"){
                    return <Video
                    key={idx}
                    name = {project.name}
                    description = {project.description}
                    image = {project.image}
                    link = {project.link}
                    thumbnail = {project.thumbnail}
                            />
                } else if (project.type == "i"){
                    return <Img
                    key={idx}
                    name = {project.name}
                    description = {project.description}
                    image = {project.image}
                    link = {project.link}
                    />
                }
            }
            
            )}

      </div>
    )
    }
}

export default Projects