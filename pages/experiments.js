import Link from 'next/link';
import styled from 'styled-components'; 
import Head from 'next/head';
import { useState, useEffect } from 'react'
import React, {Component } from 'react';
import styles from "../styles/Projects.module.css"; 
import home from "../styles/Home.module.css"; 
import Image from "next/image";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import P5 from '../Images/About/P5.png'; 
import P6 from '../Images/About/P6.png'; 

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
    let height = 0; 
    height = (size.height / 2.4); 

    return(
        <div className = {styles.imageWrap}>
            <div className="item-container">
            <a href = {props.link}>
            <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
                <iframe className = "ytplayer" width = "100%" height = {height} src={props.thumbnail}
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
                {type : "v", name : "Virtual Tour", description: "Prototyping with AR", link: "Experiments/Tour", 
                thumbnail: "https://www.youtube.com/embed/topF8G5Y5ZY?start=98&end=104&autoplay=1&loop=1&mute=1&controls=0&playlist=topF8G5Y5ZY" }, 
                {type : "i", name : "Immersive Pop-up Exhibit", description: "Designing Intelligent Environments", image: P6, link: "Experiments/Exhibit"}, 
                //{type : "i", name : "Graphic Studies", description: "Illustration, typesetting, and animation", image : P3, link: "/Posters" }, 
                {type : "i", name : "Tangible Design", description: "Experiments with Physical and Rapid Prototyping", image : P5, link: "Experiments/Tangible" }, 
            ]
        }
    }
    render(){
    return(
        <div className = {home.page}>
        <Head>
        <title>Ethan Huang Design | Experiments</title>
        </Head>
            <Navbar/>
        <div className = {home.introWrap}>
        <div className = {home.des}>
        <h2 className = {home.intro}>
            These projects are more experimental. They help me explore questions I have about how people can interact with things. 
        </h2>
        </div>
        </div>
        <div className={styles.space}>
        </div>
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
        <Footer/>
        </div>

    )}
}

export default Graphics