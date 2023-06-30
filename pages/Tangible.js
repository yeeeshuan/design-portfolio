import Link from 'next/link';
import styled from 'styled-components'; 
import React, {Component } from 'react';
import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Radio from '../Images/Projects/Tangible/Radio.jpeg'; 
import Lighting from '../Images/Projects/Tangible/Lighting.jpeg'; 
import Special from '../Images/Projects/Tangible/Special.jpg'; 


function Video(props){
    return(
        <div className = {styles.imageWrap}>
            <div className="item-container">
            <a href = {props.link}>
            <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
                <iframe className = "ytplayer" width = "100%" height = "390px"src={props.thumbnail}
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
    console.log(props.image)
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

class Graphics extends Component{
    constructor(props){
        super(props);
        this.state = {
            projects:[
                {type : "i", name : "Smart Radio", description: "Rapid Prototyping, Physical computing", image: Radio, link:  "/Radio"}, 
                {type : "i", name : "Lighting Engines", description: "Form Study", image: Lighting, link: "https://medium.com/@yixuanhu/project-4-lighting-engines-714ca3dd0cf6" }, 
                {type : "i", name : "Special Carriers", description: "Physical Interaction Study", image: Special, link: "https://medium.com/@yixuanhu/project-2-dace6957f382" }, 
            ]
        }
    }
    render(){
    return(
        <div>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Tangible Design Experiments
            </h1>
            <div className = {styles.intro}>
            <div>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Solidworks, 3D Printing, Raspberry Pi, Sketching</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            Studies and experiments done to learn about physical form, rapid prototyping, and design interactions. 
            </p>
            </div>
            </div>
            </main>
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
        <Footer/>

        </div>

    )}
}

export default Graphics