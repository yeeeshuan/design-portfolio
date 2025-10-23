// import styles from "../../styles/Projects.module.css"; 
// import Image from "next/image";
// import Head from 'next/head';
// import Navbar from '../../components/navbar';
// import Footer from '../../components/footer';
// import Web from "../../Images/Projects/Landesberg/Valpo/Valpo.png";
// import PGH from "../../Images/Projects/Landesberg/PGH/PGH.png";
// import Mag from "../../Images/Projects/Landesberg/Mag.png";
// import Th from "../../Images/Projects/Landesberg/Th.gif";
// import onHover from "../../Images/About/onHover.png";
// import React, {Component } from 'react';

// function Video(props){
//     return(
//         <div className = {styles.imageWrap}>
//             <div className="item-container">
//             <a href = {props.link}>
//             <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
//                 <iframe className = "ytplayer" width = "100%" height = "390px"src={props.thumbnail}
//                 frameBorder = "0" modestBranding = "1"></iframe>
//             </div>
//             <div className={styles.cardDes}>
//                 <div className={styles.cardLeft}>
//                     <h1 className = {styles.title}> {props.name}</h1>
//                     <p className = {styles.words}> {props.description} </p>
//                 </div>
//                 <div className={styles.cardRight}>
//                     <Image width = {50} height = {50} src = {onHover} alt = "image"/> 
//                 </div>
//             </div>
//             </a> 
//             </div>
//         </div>
//     )

// }

// function Img(props){
//     return(
//          <div className = {styles.imageWrap}>
//             <div className="item-container">
//             <a href = {props.link}>
//             <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
//                 <Image src = {props.image} alt = "Fruit Ninja"/> 
//             </div>
//             <div className={styles.cardDes}>
//                 <div className={styles.cardLeft}>
//                     <h1 className = {styles.title}> {props.name}</h1>
//                     <p className = {styles.words}> {props.description} </p>
//                 </div>
//                 <div className={styles.cardRight}>
//                     <Image width = {50} height = {50} src = {onHover} alt = "image"/> 
//                 </div>
//             </div>
//             </a> 
//             </div>
//          </div>
//     )
// }

// class Landesberg extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             projects:[
//                 {type : "i", name : "Valpo Alumni Magazine Website", description: "Wireframing and Prototyping", image: Web, link: "/Landesberg/Valpo"},
//                 {type : "i", name : "Pittsburgh Foundation Website", description: "Prototyping and Development", image: PGH, link: "/Landesberg/Pgh"},
//                 {type : "i", name : "Magazine Layouts", description: "Creating Design Systems", image: Mag, link: "/Landesberg/Magazines"}, 
//                 {type : "i", name : "Motion Graphics", description: "Animations and Videos", image: Th, link: "/Landesberg/Motion"},
//             ]
//         }
//     }
//     render(){
//     return(
//         <div style={{backgroundColor:"black"}}>
//              <Head>
//             <title>Ethan Huang Design | Landesberg</title>
//             </Head>
//             <Navbar/>
//             <main className={styles.temp}>
//             <h1 className = {styles.mTitle}> 
//             Landesberg Design Internship 
//             </h1>
//             <div className = {styles.intro}>
//                 <div className={styles.role}>
//                     <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Design Intern</p> 
//                     <br></br>
//                     <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> June—August 2023 </p>
//                     <br></br>
//                     <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Adobe CC, Figma</p>
//                 </div>
//             <div className = {styles.cont}> 
//                 <p className = {styles.text}>
//                     In the summer of 2023, I interned as a designer at Landesberg Design, a design firm in Pittsburgh. There, I helped design wireframes for websites, layouts for educational magazines, 
//                     and audits to deliver to clients. 
//                 </p>
//          </div>
//          </div>
//          </main>
//          <div className={styles.projects}>
//             <div className = {styles.projectRow}>
//                 {this.state.projects.map((project, idx) => {
//                     if (project.type == "v"){
//                         return <Video
//                         key={idx}
//                         name = {project.name}
//                         description = {project.description}
//                         image = {project.image}
//                         link = {project.link}
//                         thumbnail = {project.thumbnail}
//                                 />
//                     } else if (project.type == "i"){
//                         return <Img
//                         key={idx}
//                         name = {project.name}
//                         description = {project.description}
//                         image = {project.image}
//                         link = {project.link}
//                         />
//                     }
//                 }
                
//                 )}
//             </div>
//         </div>
//             <Footer/>
//         </div>

//     )
//     }
// }

// export default Landesberg

export default function Landesberg(){}