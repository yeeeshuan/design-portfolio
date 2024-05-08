import styled from 'styled-components'; 
import styles from "../styles/Home.module.css"; 
import Navbar from '../components/navbar';
import Projects from '../components/projects';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/footer';
import Confetti from '../components/conf';
import { useMediaQuery } from 'react-responsive';


function Home() {

  const [product, setProduct] = useState(true); 
  const [tech, setTech] = useState(false); 
  const matches = useMediaQuery({ query: '(max-width: 500px)' });


  const pClick=()=>
  {
    setProduct(true); 
    setTech(false); 
  }

  const cClick=()=>
  {
    setTech(true); 
    setProduct(false); 
  }

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
          <span className = {styles.bold}>Incoming...</span> Creative Technologist Intern @  <span className = {styles.CText}> <a target="_blank" rel="noopener noreferrer" href = "https://www.zendaconsulting.com/">Zenda Consulting</a></span>
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
        <div style={{margin: "0 5rem 0 5rem"}}>
        {matches ? (
            <div/>
          ) : (
            <>
              {product ? (
                <a style={{ border: "3px solid #2897FF" }} className={styles.links} onClick={() => pClick()}>Product Design</a>
              ) : (
                <a className={styles.links} onClick={() => pClick()}>Product Design</a>
              )}

              {tech ? (
                <a style={{ border: "3px solid #2897FF" }} className={styles.links} onClick={() => cClick()}>Creative Technology</a>
              ) : (
                <a className={styles.links} onClick={() => cClick()}>Creative Technology</a>
              )}
            </>
          )}
        
        </div>

        <div style={{marginTop: "3rem"}} className={styles.projects}>
          <Projects product={product} tech={tech} matches={matches}/>
        </div>
        <Footer/>
      </div>
      
    )
}

export default Home; 
