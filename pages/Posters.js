import Link from 'next/link';
import styled from 'styled-components'; 
import React, {Component } from 'react';
import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Poster from '../Images/Projects/Posters/PosterMockup.png'; 
import Spread from '../Images/Projects/Posters/SpreadMockup.png'; 
import Animal from '../Images/Projects/Posters/Animal.png'

function Video(props){
    return(
        <div className = {styles.imageWrap}>
                <div className="item-container">
                <a href = {props.link}>
                <div className = {styles.overLay}> <a href = {props.link}></a></div>
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
                <Image src = {props.image} alt = "image"/> 
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
                {type : "v", name : "Typography Animation", description: "Animation", link:  "https://medium.com/@yixuanhu/project-3-time-and-motion-3b94c3d864d5", 
                thumbnail: "https://www.youtube.com/embed/6rxboMyFwDU?autoplay=1&loop=1&mute=1&controls=0" }, 
                {type : "i", name : "Hierarchy Poster", description: "Visual Hierarchy", image : Poster, link: "https://medium.com/@yixuanhu/project-1-hierarchy-9d65d2876137" }, 
                {type : "i", name : "Typography Spread", description: "Typesetting", image : Spread, link: "https://medium.com/@yixuanhu/project-2-typesetting-45f2577afba6"}, 
                {type : "i", name : "Endangered Animal Poster", description: "Illustration", image : Animal, link: "https://medium.com/@yixuanhu/project-1-animal-part-1-cd174683f68f" }
            ]
        }
    }
    render(){
    return(
        <div>
            <Navbar/>
            <div className = {styles.intro}>
            <div>
            <h1 className = {styles.mTitle}> 
            Graphic Studies 
            </h1>
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> August 2022 - October 2022 </p>
            <br></br>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Illustrator, Photoshop, AfterEffects</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            Studies in visual hierarchy, typesetting, and animation. Projects are done to experiment and understand the concepts to Communications Design; how can composition and color be used to 
            effectively communicate information? 
            </p>
            </div>
            </div>
        <br/>
        <br/>

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