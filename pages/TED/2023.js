import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import TED from "../../Images/About/TEDxCMU.png"
import Bear from "../../Images/Projects/TEDxCMU/Bear.png"

export default function TEDxCMU(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | TEDxCMU</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>   
            <div className={styles.space}>
                <h1 className = {styles.mTitle}> 
                TEDxCMU Event Website 
                </h1>
                <div className = {styles.intro}>
                    <div className = {styles.role}>
                        <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Frontend Developer </p> 
                        <br></br>
                        <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> March 2023 </p>
                        <br></br>
                        <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> React.js</p>
                    </div>
                    <div className = {styles.cont}> 
                        <p className = {styles.text}>
                        TEDxCMU Diffraction represents people who are willing to use their voice to influence, persuade, and change others&rsquo; worldview and perspective exponentially.
                        <br/>
                        <br/>
                        Website developed to promote the 2023 TEDxCMU main event, created in collaboration with the TEDxCMU design and innovation teams.
                        </p>
                        <br/>
                        <br/>
                        <p>
                        <a className = {styles.links} href = "https://diffraction.tedxcmu.org/"> Live Website </a> 
                        </p>
                    </div>
                </div>
                <div style = {{
                    display: "flex", 
                    justifyContent: "center", 
                    marginBottom:"4rem"
                
                }}>
                    <Image src = {TED} width = {2000} height ={1200} alt = "cover image"/>
                </div>
            <div className={styles.space}>
            <iframe width = "100%" height="600px" src="https://www.youtube.com/embed/PJDp8zVuNLw?h=a774012d6f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder = "0" modestBranding = "1"></iframe>
            </div>
         </div>
        <br/>
        <br/>
        </main>
        <Footer/>
    </div>
    )
}