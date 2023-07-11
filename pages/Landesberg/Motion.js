import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import L1 from "../../Images/Projects/Landesberg/L1.gif"
import L2 from "../../Images/Projects/Landesberg/L2.gif"
import L3 from "../../Images/Projects/Landesberg/L3.gif"
import L4 from "../../Images/Projects/Landesberg/L4.gif"
import Th from "../../Images/Projects/Landesberg/Th.gif"

export default function Magazine(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | LD Animations</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Landesberg Design Logo Animation
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Graphic Designer</p> 
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> June 2023 </p>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Adobe AfterEffects, Adobe Illustrator</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            The office wanted an animation of their logo to play during presentations. 
            I created an animation that represented the creativity and thoughtfulness of the studio. 
            </p>
         </div>
         </div>
            <div style = {{
                display: "flex", 
                justifyContent: "center", 
            
            }}>
                <Image src = {Th} width = {1080} height ={600} alt = "cover image"/>
            </div>
            <div className = {styles.page}>
                    <div>
                        <p className = {styles.d}> 
                        First Iterations
                        </p>
                    </div>
                    <div>
                        <div className = {styles.image_2}>
                            <Image src = {L1} width = {1080} height ={600} alt = "cover image"/>
                            <Image src = {L2} width = {1080} height ={600} alt = "cover image"/>
                        </div>
                        <div className = {styles.image_2}>
                            <Image src = {L3} width = {1080} height ={600} alt = "cover image"/>
                            <Image src = {L4} width = {1080} height ={600} alt = "cover image"/>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}