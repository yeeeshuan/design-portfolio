import React, { useState, useEffect } from 'react';
import styles from "../styles/Home.module.css"; 
import Link from 'next/link';

export default function Navbar(){

    return( 
        <nav className = {styles.nav}>
           <div>
               <Link href = "/">
                   <span className = {styles.styledLink}> Ethan Huang </span>
               </Link>
           </div>
           <div>
               <Link href = "/">
               <span className = {styles.styledLink}> Work </span>
               </Link>
               <Link href = "/play">
               <span className = {styles.styledLink}> Play </span>
               </Link>
               <Link href = "/about">
               <span className = {styles.styledLink}> About </span>
               </Link>
           </div>
        </nav>
    )
  }; 
