import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Thumbnail from "../../Images/About/Augmented.gif";


export default function Systems(){
    return(

        <div>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Augmented Body
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Researcher, Prototyper </p> 
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> September 2023 </p>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Motive, Unity(C#), Arduino</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
                This is a space that challenges current paradigms to locate/find objects. 
                Through the process of augmenting sound through volume and duration, I explore how auditory and visual feedback impact our perception and understanding of space.
            </p>
            </div>
            </div>
            <div style = {{
                display: "flex", 
                justifyContent: "center", 
            
            }}>
                <Image src = {Thumbnail} width = {1080} height ={600} alt = "cover image"/>
            </div>
            <div className = {styles.page}>
                <div></div>
                <div>
                    <h1 className = {styles.bTitle}>
                        More info soon 
                    </h1>
                </div>
            </div>
            </main>
        <Footer/>
        </div>
    )
}