import Head from 'next/head';
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function Drawing(){
    return(

        <div>
             <Head>
            <title>Ethan Huang Design | Drawing</title>
            </Head>
            <div className = {styles.invisible}>
            </div>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            AR Drawing Tool
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Interaction Designer, Prototyper</p> 
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> September — December 2023 </p>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Unity (C#), Optitrack, Motive, ESP32</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            A spatial computing application that explores how to bring 2D tools build for the computer screen in to a digital/physical space.
            </p>
         </div>
         </div>
        <div style = {{
            display: "flex", 
            justifyContent: "center", 
            marginTop: "50px",
        
        }}>
            <iframe className = "thumbnail" src = "https://www.youtube.com/embed/U7Dsg2RzCeA?&autoplay=1&loop=1&mute=1&controls=0&playlist=U7Dsg2RzCeA"
                width = {1080} height ={600} frameBorder="0" alt = "cover image"/>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div>
                <h1 className = {styles.bTitle}> 
                More info soon!
                </h1>
            </div>
        </div>  
                </main>
            <Footer/>
        </div>
    )
}