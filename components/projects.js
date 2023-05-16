import styled from 'styled-components'; 
import Link from 'next/link';
import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import UCRE from '../Images/About/UCRE.png'; 
import P1 from '../Images/About/P1.jpeg'; 
import P5 from '../Images/About/P5.png'; 
import P6 from '../Images/About/P6.png'; 
import P7 from '../Images/About/P7.jpg'; 
import DH from '../Images/About/DH.jpg'
import TEDxCMU from '../Images/About/TEDxCMU.jpg'

import React, {Component } from 'react';

function Video(props){
    return(
        <div className = {styles.imageWrap}>
                <div className="item-container">
                <a href = {props.link}>
                <div className = {styles.overLay}> <a href = {props.link}></a></div>
                <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
                    <iframe className = "ytplayer" width = "100%" height = "350px"src={props.thumbnail}
                    frameBorder = "0" modestbranding = "1"></iframe>
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
                {type : "i", name : "Landesberg Design Internship", description: "Print and Digital Communications Design", image: P7, link: "/Landesberg"}, 
                {type : "i", name : "Design Hero: Wolfgang Weingart", description: "Poster, Booklet, Animation, App, and Website for typographer Wolfgang Weingart", image: DH, link: "/Dh"}, 
                {type : "i", name : "Math2Shine Redesign", description: "Interaction Design, Front-End Development", image : P1, link: "/Math2Shine" }, 
                {type : "i", name : "Ad Recomendation System Redesign", description: "UX Research/Design, User Testing ", image : UCRE, link: "/UCRE" }, 
                {type : "v", name : "Interactive Grid", description: "Designing with ML", link: "/Teachable", 
                thumbnail: "https://www.youtube.com/embed/7TSUz23Ogxs?start=6&end=14&autoplay=1&loop=1&mute=1&controls=0&playlist=7TSUz23Ogxs"}, 
                {type : "i", name : "TEDxCMU: Diffraction", description: "TEDxCMU 2023 Event Website", image: TEDxCMU, link: "/TEDxCMU"}, 
                //{type : "i", name : "Graphic Studies", description: "Illustration, typesetting, and animation", image : P3, link: "/Posters" }, 
                //{type : "i", name : "PGH Water Quality", description: "Systems Mapping", image : P4, link: "/Systems" }, 
            ]
        }
    }
    render(){
    return(
        <div className = "projectRow">
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