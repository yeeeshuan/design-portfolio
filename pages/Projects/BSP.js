import styles from "../../styles/Projects.module.css";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import Thumbnail from "../../Images/About/BSP.png"

export default function BSP(){
    return(
        <div>
            <Head>
                <title>Ethan Huang Design | BestSummerPrograms</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
                <div className={styles.hero}>
                    <img src={Thumbnail.src} alt="BestSummerPrograms cover" style={{objectFit:"cover",width:"100%",height:"100%",maxHeight:"70vh"}}/>
                </div>
                <div className={styles.intro}>
                    <div className={styles.introTitle}>
                        <h1 className={styles.mTitle}>BestSummerPrograms</h1>
                    </div>
                    <div className={styles.introBody}>
                        <p className={styles.text}>
                            BestSummerPrograms was founded to give students and families across the world a free tool to evaluate the bewildering and costly landscape of high school summer programs.
                            <br/><br/>
                            I led the project while serving as the lead developer and contributing to site&rsquo;s design with
                            <a href="https://aarnavdesigns.com/" rel="noopener noreferrer" target="_blank" style={{color: "var(--card-active)"}}> Aarnav &#8599; </a>,
                            <a href="https://diondesigns.me/" rel="noopener noreferrer" target="_blank" style={{color: "var(--card-active)"}}> Dion &#8599; </a>,
                            and
                            <a href="https://www.linkedin.com/in/yuer-j-zhu/" rel="noopener noreferrer" target="_blank" style={{color: "var(--card-active)"}}> Yuer &#8599;</a>.
                        </p>
                        <div className={styles.introMeta}>
                            <div className={styles.metaField}>
                                <span className={styles.metaLabel}>Role</span>
                                <span className={styles.metaValue}>Fullstack Developer · Designer</span>
                            </div>
                            <div className={styles.metaField}>
                                <span className={styles.metaLabel}>Tools</span>
                                <span className={styles.metaValue}>Next.js · Neon Postgres · Google API · Figma</span>
                            </div>
                            <div className={styles.metaField}>
                                <span className={styles.metaLabel}>Duration</span>
                                <span className={styles.metaValue}>May 2025 – Present</span>
                            </div>
                            <div className={styles.metaField}>
                                <span className={styles.metaLabel}>Link</span>
                                <span className={styles.metaValue}><a href="https://bestsummerprograms.com" rel="noopener noreferrer" target="_blank" style={{color:"#2897FF"}}>Website &#8599;</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}