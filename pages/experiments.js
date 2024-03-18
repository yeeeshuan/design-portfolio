import Head from 'next/head';
import { useState, useEffect, useRef } from 'react'
import React, {Component } from 'react';
import styles from "../styles/Projects.module.css"; 
import home from "../styles/Home.module.css"; 
import Image from "next/image";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import P6 from '../Images/About/P6.png'; 
import Expo from "../Images/Projects/Expo/Thumbnail.png"; 
import onHover from "../Images/About/onHover.png"

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
                <div style = {{borderRadius: '10px', overflow: 'hidden'}}>
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
                {type : "i", name : "China Expo Pavilion 2025", description: "Designing Immersive Experiences", image: Expo, link: "../Experiments/Expo"},
                {type : "v", name : "AR Drawing Tool", description: "Bringing drawing tools into spatial computing", link: "../Experiments/Drawing", 
                thumbnail: "./Drawing.mp4" }, 
                {type : "v", name : "Augmented Body", description: "Augmenting perception with sound", link: "../Experiments/Augmented", 
                thumbnail: "./Augmented.mp4" }, 
                {type : "i", name : "Immersive Pop-up Exhibit", description: "Designing Intelligent Environments", image: P6, link: "Experiments/Exhibit"}, 
                //{type : "v", name : "Virtual Tour", description: "Prototyping with AR", link: "Experiments/Tour", 
                //thumbnail: "https://www.youtube.com/embed/topF8G5Y5ZY?start=98&end=104&autoplay=1&loop=1&mute=1&controls=0&playlist=topF8G5Y5ZY" }, 
                //{type : "i", name : "Graphic Studies", description: "Illustration, typesetting, and animation", image : P3, link: "/Posters" }, 
                //{type : "i", name : "Tangible Design", description: "Experiments with Physical and Rapid Prototyping", image : P5, link: "Experiments/Tangible" }, 
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