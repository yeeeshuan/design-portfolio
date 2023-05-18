import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from "../styles/Home.module.css"; 
import Link from 'next/link';

const Navbar = () => {

    const matches = useMediaQuery({ query: '(max-width: 500px)' });

    return( 
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
               <Link href = "/experiments">
               <span className = {styles.styledLink}> Experiments </span>
               </Link>
               <Link href = "/play">
               <span className = {styles.styledLink}> Play </span>
               </Link>
               <Link href = "/about">
               <span className = {styles.styledLink}> About </span>
               </Link>
           </div></>)
           :(
            <>
        <div>
            <Link href = "/">
            <span className = {styles.styledLink}> Work </span>
            </Link>
            <Link href = "/experiments">
            <span className = {styles.styledLink}> Experiments </span>
            </Link>
            <Link href = "/play">
            <span className = {styles.styledLink}> Play </span>
            </Link>
            <Link href = "/about">
            <span className = {styles.styledLink}> About </span>
            </Link>
        </div></>
           )}
        </nav>
    )
  }; 

  export default Navbar;
