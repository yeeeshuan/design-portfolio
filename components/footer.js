import styled from 'styled-components'; 
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from "../styles/Home.module.css"; 
import Link from 'next/link';


const Footer = () =>{
    const [isHovering, setIsHovering] = useState(false);

    const matches = useMediaQuery({ query: '(max-width: 600px)' });

    function enterText(){
        setIsHovering(true); 
    }

    function leaveText(){
        setIsHovering(false); 
    }

    return( 
        <nav className = {styles.footer} onMouseEnter={enterText} onMouseLeave = {leaveText}>
            <div>
                {isHovering? (<div>Ethan Huang 2022 </div>)
                : (<div> Made with Next.js</div>)
                }
            </div>
            {!matches?
            (<div>
               <a href = "https://www.linkedin.com/in/ethanhuang2002">
                   <span className = {styles.styledLink}> Linkedin </span>
               </a>
               <a href = "https://read.cv/nahte.huang">
                   <span className = {styles.styledLink}> Resume </span>
               </a>
               <a href = "https://medium.com/@yixuanhu">
                    <span className = {styles.styledLink}> Medium </span>
               </a>
               <a href = "https://github.com/yeeeshuan">
                    <span className = {styles.styledLink}> Github </span>
               </a>
               <a href = "mailto:yixuanhu@andrew.cmu.edu">
               <span className = {styles.styledLink}> Contact </span>
               </a>
           </div>)
            :(<div>
               <a href = "https://www.linkedin.com/in/ethanhuang2002">
                   <span className = {styles.styledLink}> Linkedin </span>
               </a>
               <a href = "https://read.cv/nahte.huang">
                   <span className = {styles.styledLink}> Resume </span>
               </a>
               <a href = "mailto:yixuanhu@andrew.cmu.edu">
               <span className = {styles.styledLink}> Contact </span>
               </a>
           </div>)
            }
        </nav>
    )
}

export default Footer