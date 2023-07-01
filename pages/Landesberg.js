import styled from 'styled-components'; 
import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import P7 from "../Images/About/P7.jpg"
import React, {Component } from 'react';

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

class Landesberg extends Component{
    constructor(props){
        super(props);
        this.state = {
            projects:[
                //{type : "i", name : "Web/Mobile Designs", description: "UX Design, Figma Wireframing and Prototyping", image: P7, link: "/Landesberg/Websites"},
                //{type : "i", name : "Magazine Layouts", description: "Creating Design Languages", image: P7, link: "/Landesberg/Websites"}, 
                //{type : "i", name : "Motion Graphics", description: "Animations and Videos", image: P7, link: "/Landesberg/Websites"},
                //{type : "i", name : "Branded Packaging", description: "Stationary and Tickets", image: P7, link: "/Landesberg/Websites"}
            ]
        }
    }
    render(){
    return(
        <div>
             <Head>
            <title>Ethan Huang Design | Landesberg</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Landesberg Design Internship 
            </h1>
            <div className = {styles.intro}>
                <div className={styles.role}>
                    <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Design Intern</p> 
                    <br></br>
                    <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> June—August 2023 </p>
                    <br></br>
                    <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Adobe CC, Figma</p>
                </div>
            <div className = {styles.cont}> 
                <p className = {styles.text}>
                    In the summer of 2023, I interned as a brand designer at Landesberg Design, a creative studio in Pittsburgh. There, I helped design wireframes for websites, layouts for educational magazines, 
                and audits to deliver to clients. 
                </p>
         </div>
         </div>
         <div style = {{
                display: "flex", 
                justifyContent: "center", 
            }}>
               <Image src = {P7} width = {1080} height ={600} alt = "cover image"/>
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
    )
    }
}

export default Landesberg