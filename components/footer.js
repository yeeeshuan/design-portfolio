import styled from 'styled-components'; 
import styles from "../styles/Home.module.css"; 
import Link from 'next/link';


const Footer = () =>{
    return( 
        <nav className = {styles.footer}>
            <div>
                Ethan Huang 2022
            </div>
           <div>
               <a href = "https://www.linkedin.com/in/ethanhuang2002">
                   <span className = {styles.styledLink}> Linkedin </span>
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
           </div>
        </nav>
    )
}

export default Footer; 