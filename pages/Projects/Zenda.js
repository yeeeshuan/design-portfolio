import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Thumbnail from '../../Images/About/Zenda.png';

export default function Zenda(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | Zenda Internship</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Zenda Internship
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
                <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Product Designer, Frontend Developer </p> 
                <br></br>
                <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> May 2024 - August 2024 </p>
                </div>
            <div className = {styles.cont}> 
                <p className = {styles.text}>
                    In the summer of 2024, I was hired by Zenda Consulting as an Creative Technologist Intern. I worked on the product team, designing and developing a new software system/product.
                </p>
                <br/>
                <br/>
                <p className = {styles.text}>
                During my time at Zenda, I worked on:
                <br/>
                    - Designing and implementing generative AI features into the product

                <br/>
                    - Conducting in-home product research for prompt engineering and feature testing
                <br/>
                    - Scaling the product to accommodate increased software complexity
                </p>
                <br/>
                <p>Please get in touch for more details.</p>

                <br/>
                <br/>
                <p className = {styles.text}>
                <a className = {styles.links} href = "https://www.zendaai.com/" rel="noopener noreferrer" target="_blank"> Product Website </a> 
                <br/>
            </p>
            </div>
         </div>
        <div>
            <Image src = {Thumbnail} alt = "cover image"/>
        </div>
        </main>
        <Footer/>
        </div>
    )
}