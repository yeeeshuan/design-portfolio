import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import P7 from '../Images/About/P7.jpg'; 
import DH from '../Images/About/DH.jpg'
import TEDxCMU from '../Images/Projects/TEDxCMU/2024.png'
import Repl from "../Images/Projects/Replit/Replit.png"
import Gmail from "../Images/About/Gmail.png";
import Deceptive from "../Images/About/Deceptive.png";
import onHover from "../Images/About/onHover.png";
import React, {useState, useEffect, useRef, Component } from 'react';

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
    const videoRef = useRef(null);
    const size = useWindowDimensions();
    let width = size.width; 
    let temp = size.width; 

    // useEffect(() => {
    //     if (videoRef.current) {
    //       if (videoRef.current.paused) {
    //         videoRef.current.play();
    //       }
    //     }
    //   }, [videoRef]);

    if (width <= 600){
        temp = 250; 
    }
    else if (width > 600 && width <= 700){
        temp = 100; 
    }
    else if (width > 700 && width <= 800){
        temp = 175; 
    }
    else if (width > 800 && width <= 900){
        temp = 200; 
    }
    else if (width > 900 && width <= 1100){
        temp = 250; 
    }
    else
    {
        temp = 350; 
    }

    return(
        <div className = {styles.imageWrap}>
                <div>
                    <a href = {props.link}>
                    <div className = {styles.overLay}> <a href = {props.link}></a></div>
                    <div>
                        <div className={styles.container}>
                            <video
                                ref={videoRef}
                                width="100%"
                                muted
                                loop
                                playsInline
                                autoPlay
                                onLoadedData={(e) => {
                                    if (e.target.paused) {
                                        e.target.play();
                                    }
                                }}
                            >
                                <source src={props.thumbnail} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
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
            <div className="item-container">
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
                {type : "i", name : "Replit Community Page", description: "UX Research, Prototyping", image: Repl, link: "Projects/Replit"},
                {type : "i", name : "Gmail Filtering System Redesign", description: "Interaction Design, Front-End Development", image : Gmail, link: "Projects/Gmail" }, 
                {type : "v", name : "Lil' Garden", description: "XR Nurturing Experience", link: "Projects/Garden", 
                thumbnail: "./Garden.mp4" },  
                {type : "v", name : "Interactive Grid", description: "Designing with ML", link: "Projects/Teachable", 
                thumbnail: "./Teachable.mp4" }, 
                {type : "i", name : "Landesberg Design Internship", description: "Web and Print Design", image: P7, link: "Projects/Landesberg"}, 
                //{type : "i", name : "Math2Shine Redesign", description: "Interaction Design, Front-End Development", image : P1, link: "Projects/Math2Shine" }, 
                {type : "i", name : "Design Hero: Wolfgang Weingart", description: "Multi-media series for typographer Wolfgang Weingart", image: DH, link: "Projects/Dh"},
                {type : "v", name : "TEDxCMU Innovation", description: "Interactive Projects", link: "Projects/TED", thumbnail: "./TEDxCMU.mp4"}, 
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