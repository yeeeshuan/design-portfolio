import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from "next/head";
import Navbar from "../../components/navbar";
import W3 from '../../Images/Projects/TEDxCMU/2023.png'; 
import Build from '../../Images/Projects/TEDxCMU/Bear.png'; 
import W4 from '../../Images/Projects/TEDxCMU/2024.png'; 
import onHover from "../../Images/About/onHover.png"; 
import React, {useState, useEffect, useRef, Component } from 'react';

function PlayVideo(link) {
    const videoRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            videoRef.current.play();
          });
        },
        {
          rootMargin: '0px', // Margin around the root
        }
      );
  
      if (videoRef.current) {
        observer.observe(videoRef.current);
      }
  
      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    }, [videoRef]);
  
    return (
      <div className={styles.container}>
        <video
          ref={videoRef}
          width="100%"
          muted
          loop
          playsInline
          preload="none"
          className={styles.video}
        >
          <source src={link} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

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
                <div className="item-container">
                <a href = {props.link}>
                <div className = {styles.overLay}> <a href = {props.link}></a></div>
                <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
                    {PlayVideo(props.thumbnail)}
                    {/* <iframe className = "ytplayer" width = {"100%"} height ={temp} src={props.thumbnail}
                    frameBorder = "0" modestBranding = "1"></iframe> */}
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

class TED extends Component{
    constructor(props){
        super(props);
        this.state = {
            projects:[
                {type : "i", name : "2024 Event Website", description: "Full-Stack Development, 3D Modeling", image: W4, link: "../TED/2024"}, 
                {type : "i", name : "2023 Event Website", description: "Full-Stack Development", image: W3, link: "../TED/2023"}, 
                // {type : "i", name : "Build-A-Bear", description: "Interaction Design, Front-End Development", image: Build, link: "../TED/Bear"}, 
            ]
        }
    }
    render(){
    return(
        <div>
          <Head>
            <title>Ethan Huang Design | TEDxCMU</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            TEDxCMU Innovation Team
            </h1>
            <div className = {styles.intro}>
                <div className={styles.role}>
                    <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Developer, Designer</p> 
                    <br></br>
                    <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> October 2022 - Present </p>
                    <br></br>
                    <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Next.js, P5.js, MongoDB, Figma</p>
                </div>
            <div className = {styles.cont}> 
                <p className = {styles.text}>
                    I am a developer on the TEDxCMU Innovation team. Depending on the theme of the event, I work with the Innovation team to ideate and develop creative, interactive projects in the form of digital applications and immersive experiences.
                </p>
         </div>
         </div>
         </main>
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
    )
    }
}

export default TED