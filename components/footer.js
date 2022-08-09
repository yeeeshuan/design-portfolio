import styled from 'styled-components'; 
import styles from "../styles/Home.module.css"; 
import Link from 'next/link';


const Footer = () =>{
    return( 
        <nav className = {styles.footer}>
            <div>
                Ethan Huang @2022
            </div>
           <div>
               <a href = "https://www.linkedin.com/in/ethanhuang2002">
                   <span className = {styles.styledLink}> Linkedin </span>
               </a>
               <a href = "https://medium.com/@yixuanhu">
                    <span className = {styles.styledLink}> Medium </span>
               </a>
               <Link href = "/about">
               <span className = {styles.styledLink}> Contact </span>
               </Link>
           </div>
        </nav>
    )
}

export default Footer; 