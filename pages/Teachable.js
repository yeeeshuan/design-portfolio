import styled from 'styled-components'; 
import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Teachable(){
    return(

        <div>
            <Navbar/>
            <div className = {styles.page}>
            <div>
            <h1 className = {styles.pTitle}> 
            Teachable Grid   
            </h1>
            <br></br>
            Role: <p className = {styles.d}>Creative Coding </p> 
            <br></br>
            <br></br>
            Duration: <p className = {styles.d}> July 2022 </p>
            <br></br>
            <br></br>
            Tools:  <p className = {styles.d}>HTML, P5.js, Google Teachable Machine, Web Speech API</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            This project is a collection of interaction design experiments presented through the form of a game. Using the Google Teachable Machine 
            and the Web Speech API, I was able to gain a deeper understanding of how to incorporate interactions into my designs — when are they helpful 
            vs. when they become convoluted and confusing. 
            </p>
            </div>
         </div>



            <Footer/>
        </div>
    )



}