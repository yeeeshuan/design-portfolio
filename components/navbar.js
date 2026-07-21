import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from "../styles/Home.module.css"; 
import Link from 'next/link';

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(true);
    const [isDark, setIsDark] = useState(true);

    const matches = useMediaQuery({ query: '(max-width: 500px)' });

    // Read saved preference on mount
    useEffect(() => {
        const saved = localStorage.getItem('theme');
        const dark = saved ? saved === 'dark' : true;
        setIsDark(dark);
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    }, []);

    const toggleTheme = () => {
        const next = !isDark;
        setIsDark(next);
        const theme = next ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    };

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
            <div style={{width:"20%", textAlign:"left", display:"flex", alignItems:"center", gap:"1rem"}}>
               <span> San Francisco, CA</span>
               <button
                   className={styles.themeToggle}
                   onClick={toggleTheme}
                   aria-label="Toggle light/dark mode"
               >
                   {isDark ? '☀' : '☽'}
               </button>
            </div>
           </>)
           :(
            <>
        <div className = {styles.name}>
               <Link href = "/">
                   <span className = {styles.styledLink}> Ethan Huang </span>
               </Link>
        </div>
        <div style={{display:"flex", alignItems:"center", gap:"0.75rem"}}>
                Design Engineer
                <button
                    className={styles.themeToggle}
                    onClick={toggleTheme}
                    aria-label="Toggle light/dark mode"
                >
                    {isDark ? '☀' : '☽'}
                </button>
        </div></>
           )}
        </nav>
        </>
    )
  }; 

  export default Navbar;
