import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import P7 from '../Images/About/P7.jpg'; 
import Zenda from "../Images/About/Zenda.png"
import Repl from "../Images/Projects/Replit/Replit.png"
import Gmail from "../Images/About/Gmail.png";
import Cookie from "../Images/About/Cookie.png"
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
                {type : "v", category:"P", name : "Siri AI", description: "AI Productivity Tool", thumbnail: "./Siri_AI.mp4", link: "Projects/Siri" }, 
                {type : "v", category:"P", name : "Waymo x Airbnb", description: "Waymo x Airbnb collaboration", link: "Projects/Waymo", thumbnail: "./Waymo.mp4" },  
                {type : "v", category:"C", name : "I Know a Place", description: "Interactive mapping platform for telling stories", thumbnail: "./I_Know.mp4", link: "Projects/I_Know" }, 
                {type : "i", category:"P", name : "Replit Community Page", description: "Redesigning the Replit community page", image: Repl, link: "Projects/Replit"},
                {type : "i", category:"P", name : "Gmail Filtering System Redesign", description: "Redesigning Gmail filtering functionalities", image : Gmail, link: "Projects/Gmail" }, 
                {type : "i", category:"C", name : "Cookie Monster Cooking", description: "Creating transparent data collection methods with GenAI", image: Cookie, link: "Projects/Cookie"},
                {type : "v", category:"C", name : "Lil' Garden", description: "XR Nurturing Experience", link: "Projects/Garden", thumbnail: "./Garden.mp4" },  
                {type : "v", category:"C", name : "Interactive Grid", description: "Experimenting with ML", link: "Projects/Teachable", thumbnail: "./Teachable.mp4" }, 
                {type : "i", category:"P", name : "Zenda Platform", description: "Building product features with GenAI", image: Zenda, link: "Projects/Zenda" }, 
            ],
        }
    }

    
    render(){
    return(
        <div className = {styles.projectRow}>
            {this.state.projects.map((project, idx) => {
                if ((this.props.all)){
                    if (project.type == "v"){
                        return <Video
                        key={idx}
                        name = {project.name}
                        description = {project.description}
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
                if ((this.props.product && project.category=="P") || (this.props.tech && project.category=="C")){
                    if (project.type == "v"){
                        return <Video
                        key={idx}
                        name = {project.name}
                        description = {project.description}
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
            }
            
            )}
      </div>
    )
    }
}

export default Projects