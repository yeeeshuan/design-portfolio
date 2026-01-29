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
           (<>
           <div className = {styles.name} style={{width: "51%"}}>
               <Link href = "/">
                   <span className = {styles.styledLink}>Ethan Huang </span>
               </Link>
           </div>
           <div style={{width:"29%"}}>
               <span> Design Engineer </span>
            </div>
            <div style={{width:"20%", textAlign:"left"}}>
               <span> San Francisco, CA</span>
            </div>
           </>)
           :(
            <>
        <div className = {styles.name}>
               <Link href = "/">
                   <span className = {styles.styledLink}> Ethan Huang </span>
               </Link>
        </div>
        <div style={{textAlign:"right"}}>
                Design Engineer
        </div></>
           )}
        </nav>
        </>
    )
  }; 

  export default Navbar;
