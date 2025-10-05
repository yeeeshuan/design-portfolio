import styled from 'styled-components'; 
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from "../styles/Home.module.css"; 
import Link from 'next/link';


const Footer = () =>{
    const [isHovering, setIsHovering] = useState(false);

    const matches = useMediaQuery({ query: '(max-width: 500px)' });

    function enterText(){
        setIsHovering(true); 
    }

    function leaveText(){
        setIsHovering(false); 
    }

    return( 
        <nav className = {styles.footer} onMouseEnter={enterText} onMouseLeave = {leaveText}>
            {!matches?
            (<><div>
                    {isHovering ? (<span>Ethan Huang 2025</span>)
                        : (<span className={styles.styledLink}>Made with Next.js</span>)}
                </div>
                <div style={{display:"flex", gap: "2rem"}}>

                        <a href="https://www.linkedin.com/in/ethanhuang2002" rel="noopener noreferrer" target="_blank">
                            <span className={styles.styledLink}> Linkedin </span>
                        </a>
                        <a href="https://347428247159947264.hello.cv" rel="noopener noreferrer" target="_blank">
                            <span className={styles.styledLink}> Resume </span>
                        </a>
                        {/* <a href="https://medium.com/@yixuanhu" rel="noopener noreferrer" target="_blank">
                            <span className={styles.styledLink}> Medium </span>
                        </a> */}
                        <a href="https://github.com/yeeeshuan" rel="noopener noreferrer" target="_blank">
                            <span className={styles.styledLink}> Github </span>
                        </a>
                        <a href="mailto:yehuang2020@gmail.com">
                            <span className={styles.styledLink}> Contact </span>
                        </a>
                </div></>)
            :(<div style={{display:"flex", width:"100%", justifyContent:"space-between"}}>
               <a href = "https://www.linkedin.com/in/ethanhuang2002" rel="noopener noreferrer" target="_blank">
                   <span> Linkedin </span>
               </a>
               <a href = "https://read.cv/nahte.huang" rel="noopener noreferrer" target="_blank">
                   <span> Resume </span>
               </a>
               <a href = "mailto:yehuang2020@gmail.com" rel="noopener noreferrer" target="_blank">
               <span> Contact </span>
               </a>
           </div>)
            }
        </nav>
    )
}

export default Footer