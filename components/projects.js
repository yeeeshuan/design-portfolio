import styled from 'styled-components'; 
import Link from 'next/link';
import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import P1 from '../Images/About/P1.png'; 
import P3 from '../Images/About/P3.png'; 
import P4 from '../Images/About/P4.png'; 
import P5 from '../Images/About/P5.jpg'; 

import React, {Component } from 'react';

function Video(props){
    return(
        <div className = {styles.imageWrap}>
                <div className="item-container">
                <a href = {props.link}>
                <div className = {styles.overLay}> <a href = {props.link}></a></div>
                <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
                    <iframe className = "ytplayer" width = "100%" height = "390px"src={props.thumbnail}
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
                <Image src = {props.image} alt = "Fruit Ninja"/> 
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
                {type : "v", name : "Teachable Grid", description: "Designing with ML", link: "/Teachable", 
                thumbnail: "https://www.youtube.com/embed/7lnMo1m1O3g?autoplay=1&loop=1&mute=1&controls=0&playlist=7lnMo1m1O3g" }, 
                {type : "v", name : "Virtual Tour", description: "Prototyping with AR", link: "/Tour", 
                thumbnail: "https://www.youtube.com/embed/topF8G5Y5ZY?start=98&end=104&autoplay=1&loop=1&mute=1&controls=0&playlist=topF8G5Y5ZY" }, 
                {type : "i", name : "Math2Shine Redesign", description: "Interaction Design, Front-End Development", image : P1, link: "/Math2Shine" }, 
                {type : "i", name : "Graphic Studies", description: "Illustration, typesetting, and animation", image : P3, link: "/Posters" }, 
                {type : "i", name : "Tangible Design", description: "Experiments with physical and rapid prototyping", image : P5, link: "/Tangible" }, 
                {type : "i", name : "PGH Water Quality", description: "Systems Mapping", image : P4, link: "/Systems" }, 
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