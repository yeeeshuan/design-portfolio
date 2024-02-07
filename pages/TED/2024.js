import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import TED from "../../Images/Projects/TEDxCMU/Ignite.png"
import Flower from "../../Images/Projects/TEDxCMU/Flower.png"
import Succ from "../../Images/Projects/TEDxCMU/Succ.png"
import Mushroom from "../../Images/Projects/TEDxCMU/Mushroom.png"

export default function TEDxCMU(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | TEDxCMU 2024</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>   
            <div className={styles.space}>
                <h1 className = {styles.mTitle}> 
                TEDxCMU 2024 Event Website 
                </h1>
                <div className = {styles.intro}>
                    <div className = {styles.role}>
                        <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Frontend Developer </p> 
                        <br></br>
                        <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> January - February 2024 </p>
                        <br></br>
                        <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Next.js, P5.js, Blender</p>
                    </div>
                    <div className = {styles.cont}> 
                        <p className = {styles.text}>
                        TEDxCMU Ignite represents how ideas can expand, fluctuate, grow, and transform, much like a burning flame.
                        <br/>
                        <br/>
                        Website, game, and renders developed to promote the 2024 TEDxCMU main event, created in collaboration with the TEDxCMU design and innovation teams.
                        </p>
                        <br/>
                        <br/>
                        <p>
                        </p>
                    </div>
                </div>
                <div style = {{
                    display: "flex", 
                    justifyContent: "center", 
                    marginBottom:"4rem"
                
                }}>
                    <Image src = {TED} width = {2000} height ={1490} alt = "cover image"/>
                </div>
            <div className = {styles.page}>
                <div>
                </div>     
                <div>
                    <h1 className = {styles.pTitle}> 
                        Page Scrolling Interaction
                    </h1>
                </div>
            </div>
            <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Scrolling Interaction
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/jLLMsN5Dp_E?si=yz6O0ELG0060xbE4&amp;loop=1&amp;mute=1&amp;controls=1&amp;" frameBorder = "0" modestBranding = "1" allowFullScreen></iframe>
            </div>
        </div>
            <div className = {styles.page}>
                <div>
                </div>     
                <div>
                    <h1 className = {styles.pTitle}> 
                        Renders
                    </h1>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                        Mushroom render
                    </p>
                </div>
                <div>
                    <Image src = {Mushroom}/>
                </div>
            </div>   
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                        Succulent render
                    </p>
                </div>
                <div>
                    <Image src = {Succ}/>
                </div>
            </div>   
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                        Flower render
                    </p>
                </div>
                <div>
                    <Image src = {Flower}/>
                </div>
            </div>   
         </div>
        <br/>
        <br/>
        </main>
        <Footer/>
    </div>
    )
}