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

  const [product, setProduct] = useState(true); 
  const [tech, setTech] = useState(false); 
  const [nameClicked, setNameClicked] = useState(false); 
  const [PDClicked, setPDClicked] = useState(false); 
  const [LDClicked, setLDClicked] = useState(false); 
  const [Zenda, setZenda] = useState(false); 
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
        {!matches && (
          <div className={styles.des}>
            <h2 className={styles.intro}>
              <span>
                Hi! I&rsquo;m
              </span>
              <button className={nameClicked? styles.clicked : styles.click} onClick={() => setNameClicked(!nameClicked)}>
                <span className={styles.CText}>Ethan Huang</span>
              </button>
              {nameClicked && (
                <span>
                  , a senior studying Design & HCI/CS @
                  <a href="https://design.cmu.edu/" target="_blank" rel="noreferrer" style={{color: "#2897FF", borderBottom: "3px dotted #2897FF"}}>CMU</a>
                </span>
              )}
              .
              <span>
                &nbsp;I&rsquo;m a <span style={{color: "#2897FF"}}>Product Designer/Creative Technologist</span>
              </span>
              .
              <br/>
              <span>
                Currently, I&rsquo;m a Creative Technologist @ 
                <button onClick={() => setZenda(!Zenda)} className={Zenda? styles.clicked : styles.click}>
                  <span className={styles.CText}>Zenda</span>
                </button> 
                {Zenda && (
                  <>
                    <span>building <a href="https://www.zendaai.com/" target="_blank" rel="noreferrer" style={{color: "#2897FF", borderBottom: "3px dotted #2897FF"}}>GenAI Features</a></span>
                  </>
                )}
              </span>
              .
              <br/>
              <span>
                Previously, I was a Product Design Intern @ 
                <button onClick={() => setLDClicked(!LDClicked)} className={LDClicked? styles.clicked : styles.click}>
                  <span className={styles.CText}>Landesberg Design</span> 
                </button> 
                {LDClicked && (
                <span>
                designing&nbsp;
                <a href="https://landesbergdesign.com/" target="_blank" rel="noreferrer" style={{color: "#2897FF", borderBottom: "3px dotted #2897FF"}}>Digital Experiences</a>
                </span>
                )}
              </span>
              .
            </h2>


          {/* <hr className = {styles.break}></hr>
          <div className = {styles.exp}>
          <p className = {styles.curr}>
            <span className = {styles.bold}>Incoming...</span> Creative Technologist Intern @  <span className = {styles.CText}> <a target="_blank" rel="noopener noreferrer" href = "https://www.zendaconsulting.com/">Zenda Consulting</a></span>
            <br/>
            <span className = {styles.bold}>Previously...</span> Design Intern @ <span className = {styles.CText}> <a target="_blank" rel="noopener noreferrer" href="https://landesbergdesign.com/">Landesberg Design</a></span>
          </p>
          </div> */}
          </div>
        )}

        {matches && (
          <div className={styles.des}>
          <h2 className={styles.intro}>
            <span>
              Hi! I&rsquo;m Ethan Huang, a <span style={{color:"#2897FF"}}>Product Designer</span> and <span style={{color:"#2897FF"}}>Creative Technologist</span>. 
            </span>
          </h2>
          <br/>
          <br/>
            <hr className = {styles.break}></hr>
            <p className = {styles.curr}>
              <span className = {styles.bold}>Currently...</span> Creative Technologist Intern @  <span className = {styles.CText}> <a target="_blank" rel="noopener noreferrer" href = "https://www.zendaconsulting.com/">Zenda Consulting</a></span>
              <br/>
              <span className = {styles.bold}>Previously...</span> Product Design Intern @ <span className = {styles.CText}> <a target="_blank" rel="noopener noreferrer" href="https://landesbergdesign.com/">Landesberg Design</a></span>
            </p>
        </div>
        )}
        <div className = {styles.conf}>
          <div className = {styles.holder}>
          <Confetti/>
          </div>
        </div>
        </div>
        <div className={styles.toggle}>
            <>
              {product ? (
                <a style={{ border: "3px solid #2897FF", backgroundColor: "#373737"}} className={styles.links} onClick={() => pClick()}>Product Design</a>
              ) : (
                <a className={styles.links} onClick={() => pClick()}>Product Design</a>
              )}

              {tech ? (
                <a style={{ border: "3px solid #2897FF", backgroundColor: "#373737"}} className={styles.links} onClick={() => cClick()}>Creative Technology</a>
              ) : (
                <a className={styles.links} onClick={() => cClick()}>Creative Technology</a>
              )}
            </> 
        </div>

        <div style={{marginTop: "3rem"}} className={styles.projects}>
          <Projects product={product} tech={tech} matches={matches}/>
        </div>
        <Footer/>
      </div>
      
    )
}

export default Home; 
