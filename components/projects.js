import styled from 'styled-components'; 
import Link from 'next/link';
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import UCRE from '../Images/About/UCRE.png'; 
import P1 from '../Images/About/P1.jpeg'; 
import P7 from '../Images/About/P7.jpg'; 
import DH from '../Images/About/DH.jpg'
import TEDxCMU from '../Images/About/TEDxCMU.jpg'

import React, {useState, useEffect, Component } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height,
    }
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 0}) // <-- don't invoke here

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }

        handleResize() // <-- invoke this on component mount
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
                    <h1 className = {styles.title}> {props.name}</h1>
                <p className = {styles.words}> {props.description}</p>
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
                <h1 className = {styles.title}> {props.name}</h1>
            <p className = {styles.words}> {props.description} </p>
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
                {type : "i", name : "Design Hero: Wolfgang Weingart", description: "Poster, Booklet, Animation, App, and Website for typographer Wolfgang Weingart", image: DH, link: "Projects/Dh"}, 
                {type : "i", name : "Math2Shine Redesign", description: "Interaction Design, Front-End Development", image : P1, link: "Projects/Math2Shine" }, 
                {type : "i", name : "Ad Recomendation System Redesign", description: "UX Research/Design, User Testing ", image : UCRE, link: "Projects/UCRE" }, 
                {type : "v", name : "Interactive Grid", description: "Designing with ML", link: "Projects/Teachable", 
                thumbnail: "https://www.youtube.com/embed/7TSUz23Ogxs?start=6&end=14&autoplay=1&loop=1&mute=1&controls=0&playlist=7TSUz23Ogxs"}, 
                {type : "i", name : "TEDxCMU: Diffraction", description: "TEDxCMU 2023 Event Website", image: TEDxCMU, link: "Projects/TEDxCMU"}, 
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