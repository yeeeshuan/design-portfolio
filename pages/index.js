import styled from 'styled-components'; 
import styles from "../styles/Home.module.css"; 
import Navbar from '../components/navbar';
import Projects from '../components/projects';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/footer';

export default function Home() {
    return (
      <div className = {styles.page}>
        <Head>
        <title>Ethan Huang Design</title>
        </Head>
        <Navbar/>
        <div className = {styles.introWrap}>
        <div className = {styles.des}>
        <h2 className = {styles.intro}>
            Hi! My name is Ethan Huang and I am currently a 
            <span className = {styles.CText}> <a target="_blank" rel="noopener noreferrer" href = "https://design.cmu.edu/content/bachelor-design"> Design </a> </span> 
            student at <span className = {styles.CText}>Carnegie Mellon University </span>
            with minors in <span className={styles.CText}><a target="_blank" rel="noopener noreferrer" href = "https://www.hcii.cmu.edu/">Human-Computer-Interaction</a> </span> and <span className = {styles.CText}> 
            <a target="_blank" rel="noopener noreferrer" href = "https://www.cs.cmu.edu/" className = {styles.CText}>Computer Science</a></span>.
        </h2>
        <hr className = {styles.break}></hr>
        <div className = {styles.exp}>
        <p className = {styles.curr}>
          <span className = {styles.bold}>Currently...</span>
          <br/>
          Brand designing @ <span className = {styles.CText}> <a target="_blank" rel="noopener noreferrer" href="https://landesbergdesign.com/">Landesberg Design</a></span>
          <br/>
          Developing interactive projects @  <span className = {styles.CText}> <a target="_blank" rel="noopener noreferrer" href = "https://diffraction.tedxcmu.org/">TEDxCMU</a></span>
        </p>
        </div>
        </div>
        </div>
        <Projects/>
        <Footer/>
      </div>
      
    )
}
