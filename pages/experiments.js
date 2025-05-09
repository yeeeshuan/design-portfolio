import Head from 'next/head';
import { useState, useEffect, useRef } from 'react'
import React, {Component } from 'react';
import styles from "../styles/Projects.module.css"; 
import home from "../styles/Home.module.css"; 
import Image from "next/image";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import DH from '../Images/About/DH.jpg';
import onHover from "../Images/About/onHover.png";

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
    const videoRef = useRef(null);
    const size = useWindowDimensions();
    let width = size.width; 
    let temp = size.width; 

    useEffect(() => {
        if (videoRef.current) {
          if (videoRef.current.paused) {
            videoRef.current.play();
          }
        }
      }, [videoRef]);

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
                <div style = {{borderRadius: '10px', overflow: 'hidden'}}>
                    <div className={styles.container}>
                        <video
                            ref={videoRef}
                            width="100%"
                            muted  // Mute the video
                            loop
                            playsInline
                            autoPlay // Add the autoplay attribute
                            // preload="auto" // Try adding preload attribute
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
            <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
                <Image src = {props.image} alt = "Fruit Ninja"/> 
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

class Graphics extends Component{
    constructor(props){
        super(props);
        this.state = {
            projects:[
                {type : "v", category:"C", name : "Lego Type", description: "Variable Type, Frontend Development", link: "Projects/LF", thumbnail: "./LF_Frog.mov" }, 
                {type : "v", name : "AR Drawing Tool", description: "Bringing drawing tools into spatial computing", link: "../Experiments/Drawing", 
                thumbnail: "./Drawing.mp4" }, 
                {type : "v", category:"C", name : "TEDxCMU Innovation", description: "Interactive Projects", link: "Projects/TED", thumbnail: "./TEDxCMU.mp4"}, 
                {type : "i", category:"P", name : "Design Hero: Wolfgang Weingart", description: "Multi-media series for typographer Wolfgang Weingart", image: DH, link: "Projects/Dh"}
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
        <div className = {home.introWrap} style={{height:"fit-content"}}>
        <div className = {home.des}>
        <h2 className = {home.intro}>
            These projects are more <span style={{color: "#2897FF"}}>experimental</span>. 
            <br/>
            They help me understand how people <span style={{color: "#2897FF"}}>interact with things</span>.
        </h2>
        </div>
        </div>
        <div className={home.projects}>
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
        </div>
        <Footer/>
        </div>

    )}
}

export default Graphics