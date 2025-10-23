import styles from "../../styles/Projects.module.css"; 
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Image from "next/image";

import Thumbnail from "../../Images/About/BSP.png"

export default function BSP(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | BestSummerPrograms</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <div className = {styles.intro}>
                <div className = {styles.cont}> 
                    <h1 className = {styles.mTitle}> 
                    BestSummerPrograms
                    </h1>
                    <br/>
                    <p className = {styles.text}>
                    BestSummerPrograms was founded to give students and families across the world a free tool to evaluate the bewildering and costly landscape of high school summer programs.
                    <br/>
                    <br/>
                    I led the project while also serving as the lead developer and contributing to design with
                    <a href = "https://diondesigns.me/" rel="noopener noreferrer" target="_blank" style={{color: "var(--card-active)"}}> Dion &#8599; </a>
                    and 
                    <a href = "https://www.linkedin.com/in/yuer-j-zhu/" rel="noopener noreferrer" target="_blank" style={{color: "var(--card-active)"}}> Yuer &#8599;</a>.
                    </p>
                    <br/>
                    <br/>
                    <div>
                        <div className={styles.desCont}>
                            <div className={styles.des}>
                                <p className = {styles.d1}>Role: </p>
                                <br/>
                                <p className = {styles.d2}> 
                                Fullstack Developer
                                <br/>
                                Designer 
                                </p> 
                            </div>
                            <div className={styles.des}>
                                <p className = {styles.d1}>Tools: </p>
                                <br/>
                                <p className = {styles.d2}> 
                                    Next.js
                                    <br/>
                                    Google API
                                    <br/>
                                    Figma
                                </p> 
                            </div>
                            <div className={styles.des}>
                                <p className = {styles.d1}>Duration: </p>
                                <br/>
                                <p className = {styles.d2}> May 2025 - Present </p>
                            </div>
                            <div className={styles.des}>
                                <p className = {styles.d1}>Link to Project: </p>
                                <br/>
                                <p style={{margin:0}}><a href = "https://bestsummerprograms.com" rel="noopener noreferrer" target="_blank">Website &#8599;</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Image src={Thumbnail} alt = "cover image"/>
            </div>
            </main>
            <Footer/>
        </div>
    )
}