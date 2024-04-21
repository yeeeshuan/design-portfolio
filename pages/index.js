import styled from 'styled-components'; 
import styles from "../styles/Home.module.css"; 
import Navbar from '../components/navbar';
import Projects from '../components/projects';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/footer';
import Confetti from '../components/conf';

function Home() {
    return (
      <div className = {styles.page}>
        <Head>
        <link rel="icon" href="public/favicon.ico" />
        <title>Ethan Huang Design | Home</title>
        </Head>
        <Navbar/>
        <div className = {styles.introWrap}>
        <div className = {styles.des}>
        <h2 className = {styles.intro}>
            Hi! My name is Ethan Huang and I am a 
            <span className = {styles.CText}> Product Designer </span> 
            and 
            <span className={styles.CText}> Creative Technologist</span>. 
        </h2>
        <hr className = {styles.break}></hr>
        <div className = {styles.exp}>
        <p className = {styles.curr}>
          <span className = {styles.bold}>Incoming...</span> Computational Designer Intern @  <span className = {styles.CText}> <a target="_blank" rel="noopener noreferrer" href = "https://www.zendaconsulting.com/">Zenda Consulting</a></span>
          <br/>
          <span className = {styles.bold}>Previously...</span> Design Intern @ <span className = {styles.CText}> <a target="_blank" rel="noopener noreferrer" href="https://landesbergdesign.com/">Landesberg Design</a></span>
        </p>
        </div>
        </div>
        <div className = {styles.conf}>
          <div className = {styles.holder}>
          <Confetti/>
          </div>
        </div>
        </div>
        <div className={styles.projects}>
          <Projects/>
        </div>
        <Footer/>
      </div>
      
    )
}

export default Home; 
