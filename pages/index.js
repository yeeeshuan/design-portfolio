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
          <div className={styles.des}>
            <div style={{width: "35%"}}>
            <h2 className={styles.intro}>
              <span>
                Hi! I&rsquo;m Ethan Huang, a<span style={{color: "#2897FF"}}> <br/>Designer and Developer</span>
              </span>
              .
            </h2>
            </div>
            <div style={{width: "65%"}}>
              <h2 className={styles.intro} style={{fontSize: "28px"}}>
                {/* <span>
                  Innovation Designer @ 
                  <a href="https://www.ibm.com/" target="_blank" rel="noreferrer" style={{color: "#2897FF", borderBottom: "3px dotted #2897FF"}}> IBM </a>
                </span>
                .
                <br/> */}
                <span>
                  Currently, Design Engineer @ 
                  <a href="https://www.zendaplatform.com/" target="_blank" rel="noreferrer" style={{color: "#2897FF", borderBottom: "3px dotted #2897FF"}}> Zenda Consulting</a>
                </span>
                .
              </h2>
            </div>
          </div>
        )}

        {matches && (
          <div className={styles.des}>
          <h2 className={styles.intro}>
            <span>
              Hi! I&rsquo;m Ethan Huang, a <span style={{color:"#2897FF"}}>Designer and Developer</span>. 
            </span>
          </h2>
          <br/>
          <br/>
            <hr className = {styles.break}></hr>
            <p className = {styles.curr}>
              <span className = {styles.bold}>Currently...</span> Innovation Designer @  <span className = {styles.CText}> <a target="_blank" rel="noopener noreferrer" href="https://www.ibm.com/">IBM</a></span>
              <br/>
              <span className = {styles.bold}>Previously...</span> Design Engineer @  <span className = {styles.CText}> <a target="_blank" rel="noopener noreferrer" href = "https://www.zendaconsulting.com/">Zenda Consulting</a></span>
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
              {all ? (
                <a style={{ border: "3px solid #2897FF", backgroundColor: "#373737"}} className={styles.links} onClick={() => aClick()}>All</a>
              ) : (
                <a className={styles.links} onClick={() => aClick()}>All</a>
              )}

              {product ? (
                <a style={{ border: "3px solid #2897FF", backgroundColor: "#373737"}} className={styles.links} onClick={() => pClick()}>Design</a>
              ) : (
                <a className={styles.links} onClick={() => pClick()}>Design</a>
              )}

              {tech ? (
                <a style={{ border: "3px solid #2897FF", backgroundColor: "#373737"}} className={styles.links} onClick={() => cClick()}>Development</a>
              ) : (
                <a className={styles.links} onClick={() => cClick()}>Development</a>
              )}
            </> 
        </div>

        <div style={{marginTop: "3rem"}} className={styles.projects}>
          <Projects all={all} product={product} tech={tech} matches={matches}/>
        </div>
        <Footer/>
      </div>
      
    )
}

export default Home; 
