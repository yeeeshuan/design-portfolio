import styled from 'styled-components'; 
import styles from "../styles/Home.module.css"; 
import Navbar from '../components/navbar';
import Projects from '../components/projects';
import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';

export default function Home() {
    return (
      <div className = {styles.page}>
        <Navbar/>
        <h2 className = {styles.intro}>
            Hi! My name is Ethan Huang and I am currently a <span className = {styles.CText}>Design</span> student at <span className = {styles.CText}>Carnegie Mellon University </span>
            with a minor in <span className = {styles.CText}>Human-Computer-Interaction</span>.
        </h2>
        <Projects/>
        <Footer/>
      </div>
      
    )
}
