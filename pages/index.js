import styled from 'styled-components'; 
import styles from "../styles/Home.module.css"; 
import Navbar from '../components/navbar';
import Projects from '../components/projects';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/footer';
import Confetti from '../components/conf';
import { useMediaQuery } from 'react-responsive';
import { name } from 'file-loader';


function Home() {
  const [all, setAll] = useState(true);
  const [product, setProduct] = useState(false); 
  const [tech, setTech] = useState(false); 
  const matches = useMediaQuery({ query: '(max-width: 500px)' });

  const aClick=()=>
  {
    setAll(true); 
    setProduct(false); 
    setTech(false); 
  }

  const pClick=()=>
  {
    setAll(false); 
    setProduct(true); 
    setTech(false); 
  }

  const cClick=()=>
  {
    setAll(false); 
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
        {!matches && (
          <>
          <div className={styles.des}>
            <div style={{width:"51%", paddingRight: "6rem"}}>
            <h2 className={styles.intro}>
              <span>
                Hi, I&rsquo;m Ethan! I design, prototype, and build new digital experiences. I graduated from Carnegie Mellon University, where I studied Interaction Design and Computer Science. 
              </span>
            </h2>
            </div>
            <div style={{width: "29%"}}>
              <h2 className={styles.intro}>
              Currently, Innovation Designer @  <span style={{color: "#2897FF"}}> <a target="_blank" rel="noopener noreferrer" href="https://www.ibm.com/about/innovation-studio">IBM &#8599;</a></span>
              <br/>
              and working on freelance projects.
              </h2>
            </div>
            <div style={{width: "20%", textAlign:"left"}}>
              <h2 className={styles.intro}>
                Let&rsquo;s chat:
                <br/>
                <a href = "mailto:yehuang2020@gmail.com" rel="noopener noreferrer" target="_blank">
                <span style={{color: "#2897FF"}}>Email &#8599;</span>
                </a>
              </h2>
              {/* <div className = {styles.holder}>
              <Confetti/>
              </div> */}
            </div>
          </div>
          <div>
          </div>
          </>
        )}

        {matches && (
          <div className={styles.des}>
          <h2 className={styles.intro}>
            <span>
            Hi! I&rsquo;m Ethan Huang, a<span style={{color: "#2897FF"}}> Designer and Developer</span>. I design, prototype, and build new digital experiences. I graduated from Carnegie Mellon University, where I studied Interaction Design and Computer Science. 
            </span>
          </h2>
          <br/>
          <br/>
            <p className = {styles.curr}>
             Currently, Innovation Designer @  <span className = {styles.CText}> <a target="_blank" rel="noopener noreferrer" href="https://www.ibm.com/">IBM</a></span>.
            </p>
        </div>
        )}
        </div>

        <div style={{marginTop: "3rem"}} className={styles.projects}>
          <Projects all={all} product={product} tech={tech} matches={matches}/>
        </div>
        <Footer/>
      </div>
      
    )
}

export default Home; 
