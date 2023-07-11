import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from "next/image";
import styles from "../styles/Home.module.css"; 
import Link from 'next/link';
import Cross from "../Images/About/Desktop.png"

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(true);

    const matches = useMediaQuery({ query: '(max-width: 500px)' });

    return( 
        <>
        <nav className = {styles.nav}>
        {!matches?
           (<><div className = {styles.name}>
               <Link href = "/">
                   <span className = {styles.styledLink}> Ethan Huang </span>
               </Link>
           </div>
           <div>
               <Link href = "/">
               <span className = {styles.styledLink}> Work </span>
               </Link>
               <Link href = "/Experiments">
               <span className = {styles.styledLink}> Experiments </span>
               </Link>
               <Link href = "/Play">
               <span className = {styles.styledLink}> Play </span>
               </Link>
               <Link href = "/About">
               <span className = {styles.styledLink}> About </span>
               </Link>
           </div></>)
           :(
            <>
        <div className = {styles.name}>
               <Link href = "/">
                   <span className = {styles.styledLink}> Ethan Huang </span>
               </Link>
        </div>
        <div onClick={() => setIsClicked((prevClick) => !prevClick)}>
            <Image className = {styles.cross} style={{ transform: isClicked ? "rotate(0deg)" : "rotate(45deg)"}} width="30%" height="30%" src={Cross}/>
        </div></>
           )}
        </nav>
        <div className = {styles.deskNav} style={{ transition: "0.3s", display: isClicked ? "none" : "block"}} >
            <div className = {styles.deskLinks}>
            <h1 className ={styles.deskLink}>
                    <Link href = "/">
                        Work 
                    </Link>
               </h1>
               <h1 className ={styles.deskLink}>
                <Link href = "/experiments">
                    Experiments
                </Link>
               </h1>
               <h1 className ={styles.deskLink}>
               <Link href = "/play">
                Play 
               </Link>
               </h1>
               <h1 className ={styles.deskLink}>
               <Link href = "/about">
                About
            </Link>
            </h1>
            </div>
        </div>
        </>
    )
  }; 

  export default Navbar;
