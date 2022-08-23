import React, { useState } from 'react';
import styles from "../styles/About.module.css"; 
import Navbar from '../components/navbar';
import Image from "next/image";
import Footer from '../components/footer'; 
import Me from '../Images/About/About_1.jpg'; 
import Photo from '../Images/About/About_2.jpg'; 
import Sketches from '../Images/About/About_3.jpg'; 


const About = () => {

    const [isHovering, setIsHovering] = useState(false);
    const [twoIsHovering, twoSetIsHovering] = useState(false);

    function enterPhoto(){
        setIsHovering(true); 
    }

    function leavePhoto(){
        setIsHovering(false); 
    }

    function enterSketch(){
        console.log("sketch"); 
        console.log(twoIsHovering); 
        twoSetIsHovering(true); 
        console.log(twoIsHovering); 
    }

    function leaveSketch(){
        twoSetIsHovering(false); 
    }


return(
    <div className = {styles.page}>
        
        <Navbar/>
        <div className = {styles.display}>
        <div>
            <span className = {styles.imageWrap_1}>
                {isHovering? (<Image className = "Photo" src = {Photo}  alt = "Photo" width = {750} height = {500}/>)
                : twoIsHovering? (<Image className = "About" src = {Sketches}  alt = "About" width = {750} height = {500}/>)
                :(<Image className = "About" src = {Me}  alt = "About" width = "750%" height = "500%"/> )

}
 
            </span>
        </div> 
        <div>
        <h1 className = {styles.title}>
            Hey! My name is Ethan Huang. 
        </h1>
        <p className = {styles.text}>

            I am a sophomore at Carnegie Mellon studying <span className = {styles.CText}>Design</span> with a minor in <span className = {styles.CText}>Human-Computer-Interaction</span>. I am interested in interaction design 
            and creating digital experiences — I strive to create meaningful interactions through exploring the intersection of design and technology. 

            <br/>
            <br/>

            When I am not designing, you can find me taking 
            <span className = {styles.photos}
                onMouseEnter={enterPhoto}
                onMouseLeave={leavePhoto}
            >
                &nbsp;photos </span> 
                    
            , 
            
            <span className = {styles.photos}
                onMouseEnter={enterSketch}
                onMouseLeave={leaveSketch}
            >
                &nbsp;sketching </span> 
                , or curating the perfect 
                
            <span className = {styles.CText}>
                <a href = "https://open.spotify.com/user/ethanhuangpizza?si=2ee86a0814ba4650">
                &nbsp;Spotify playlist. 
                </a>
            </span>
            <br></br>
            <br></br>

            Feel free to reach out at ethanhuang@cmu.edu! 
        </p>
        </div>

        </div>
        <Footer/>

    </div>
    )

}

export default About; 