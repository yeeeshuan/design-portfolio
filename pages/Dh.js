import styled from 'styled-components'; 
import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import GTM from "../Images/Projects/Teachable/GTM.png"; 
import Figma from "..//Images/Projects/Teachable/Figma.png"
import DH from "../Images/About/DH.jpg"
import Poster from "../Images/Projects//DH/Poster.jpg"
import S1 from "../Images/Projects//DH/Final_Pages/Spread_1.jpg"
import S2 from "../Images/Projects//DH/Final_Pages/Spread_2.jpg"
import S3 from "../Images/Projects//DH/Final_Pages/Spread_3.jpg"
import S4 from "../Images/Projects//DH/Final_Pages/Spread_4.jpg"
import S5 from "../Images/Projects//DH/Final_Pages/Spread_5.jpg"
import S6 from "../Images/Projects//DH/Final_Pages/Spread_6.jpg"
import S7 from "../Images/Projects//DH/Final_Pages/Spread_7.jpg"
import S8 from "../Images/Projects//DH/Final_Pages/Spread_8.jpg"
import D1 from "../Images/Projects//DH/Des/Des_1.png"
import D2 from "../Images/Projects//DH/Des/Des_2.png"
import D3 from "../Images/Projects//DH/Des/Des_3.png"
import D4 from "../Images/Projects//DH/Des/Des_4.png"
import K1 from "../Images/Projects//DH/Kiosk/K_1.png"
import K2 from "../Images/Projects//DH/Kiosk/K_2.png"
import K3 from "../Images/Projects//DH/Kiosk/K_3.png"
import K4 from "../Images/Projects//DH/Kiosk/K_4.png"

export default function DesignHero(){
    return(
        <div>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Wolfgang Weingart: My Design Hero   
            </h1>
            <div className = {styles.intro}>
            <div>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Designer, Developer </p> 
            <br></br>
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> January — May 2023 </p>
            <br></br>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Adobe Ai, Ps, Ae, Id, Figma, HTML/CSS, Jquery.js</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            The project is a culmination of 5 different deliverables that come together to celebrate the life and work of Wolfgang Weingart.
            </p>
            <br/>
         </div>
         </div>
            <div style = {{
                display: "flex", 
                justifyContent: "center", 
            
            }}>
                <Image src = {DH} width = {1080} height ={600} alt = "cover image"/>
            </div>
            <br/>
            <div className={styles.project}>
            <h1 className = {styles.mTitle}> 
            Poster 
            </h1>
            <div className = {styles.intro}>
            <div>
            <p className = {styles.d1}>Size //</p><p className = {styles.d2}> 19.75 x 31.25 inches </p> 
            <br></br>
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> 3 Weeks </p>
            <br></br>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Adobe Ai, Ps, Id</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
                A poster made to introduce viewers about typographer Wolfgang Weingart. 
            </p>
            <br/>
            <a className = {styles.links_1} href = "https://medium.com/@yixuanhu/design-heroes-poster-25f477c0df7e"> Process </a> 
         </div>
         </div>
            <div>
            <Image src = {Poster} className = {styles.spreads}/>
            </div>
            </div>
            <div className={styles.project}>
            <h1 className = {styles.mTitle}> 
            Booklet  
            </h1>
            <div className = {styles.intro}>
            <div>
            <p className = {styles.d1}>Size //</p><p className = {styles.d2}> 8.25 x 10.5 inches, 16 pages </p> 
            <br></br>
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> 5 Weeks </p>
            <br></br>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Adobe Ai, Ps, Ae, Id</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
                A 16-page booklet exploring the breadth of Weingart&rsquo;s career. 
            </p>
            <br/>
            <a className = {styles.links_1} href = "https://medium.com/@yixuanhu/design-heroes-poster-25f477c0df7e"> Process </a> 
         </div>
         </div>
            <div className={styles.image_4}>
                <Image src = {S1} style = {styles.spreads}/>
                <Image src = {S2} style = {styles.spreads}/>
            </div>
            <div className={styles.image_4}>
                <Image src = {S3} style = {styles.spreads}/>
                <Image src = {S4} className = {styles.spreads}/>
            </div>
             <div className={styles.image_4}>
                <Image src = {S5} className = {styles.spreads}/>
                <Image src = {S6} className = {styles.spreads}/>
            </div>
             <div className={styles.image_4}>
                <Image src = {S7} className = {styles.spreads}/>
                <Image src = {S8} className = {styles.spreads}/>
            </div>
            </div>
            <div className={styles.project}>
            <h1 className = {styles.mTitle}> 
            Animation   
            </h1>
            <div className = {styles.intro}>
            <div>
            <p className = {styles.d1}>Time //</p><p className = {styles.d2}> 1 Minute 15 Seconds </p> 
            <br></br>
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> 4 Weeks </p>
            <br></br>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Adobe Ai, Ae, Film</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            Teaser film made using film, After Effects animation, and interview from Terry Irwin. 
            </p>
            <br/>
            <a className = {styles.links_1} href = "https://medium.com/@yixuanhu/design-hero-video-1ffb1503d645"> Process </a> 
         </div>
         </div>

         <div>
         <iframe width = "100%" height="600px" src="https://player.vimeo.com/video/822699151?h=a774012d6f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder = "0" modestbranding = "1"></iframe>
         </div>
            </div>
            <div className={styles.project}>
            <h1 className = {styles.mTitle}> 
            Mobile Experience   
            </h1>
            <div className = {styles.intro}>
            <div>
            <p className = {styles.d1}>Size //</p><p className = {styles.d2}> 48 x 27 Inches </p> 
            <br></br>
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> 2 Weeks </p>
            <br></br>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}>Figma</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            Mobile experience of Weingart&rsquo;s work and life as a compliment to the booklet. 
            </p>
            <br/>
         </div>
         </div>
         <div className={styles.image_5}>
            <Image src = {K1} style = {styles.spreads}/>
            <Image src = {K2} style = {styles.spreads}/>
            <Image src = {K3} style = {styles.spreads}/>
            <Image src = {K4} style = {styles.spreads}/>
         </div>
         <div>
         <iframe width = "100%" height="600px" src="https://www.youtube.com/embed/5NBvxepx6Fc?h=a774012d6f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameBorder = "0" modestbranding = "1"></iframe>
         </div>
            </div>
            <div className={styles.project}>
         <h1 className = {styles.mTitle}> 
            Interactive Website
            </h1>
            <div className = {styles.intro}>
            <div>
            <p className = {styles.d1}>Size //</p><p className = {styles.d2}> Desktop (1920 x 1080) </p> 
            <br></br>
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> 2 Weeks </p>
            <br></br>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}>HTML/CSS, Jquery.js</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            The interactive website that consists of a timeline of Weingart&rsquo;s accomplishments, 
            a brief biography, and a gallery of his most famous pieces, 
            highlighting his career and visual style. 
            </p>
            <br/>
            <a className = {styles.links} href = "https://yeeeshuan.github.io/DH_Mobile/html/m.html"> Live Website </a> 
            <a className = {styles.links} href = "https://github.com/yeeeshuan/DH_Mobile"> Github </a> 
            <br/>
         </div>
         </div>
         <div className={styles.image_4}>
                <Image src = {D1} style = {styles.spreads}/>
                <Image src = {D2} style = {styles.spreads}/>
        </div>
        <div className={styles.image_4}>
                <Image src = {D3} style = {styles.spreads}/>
                <Image src = {D4} style = {styles.spreads}/>
        </div>
            </div>

                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.pTitle}> 
                   Project Reflection 
                    </h1>
                    <p className = {styles.text}>
                    This project is one of my favorite projects, because it was a lot of fun exploring visual storytelling through a variety of mediums. 
                    I hope that I was able to capture the explorative nature of Weingart&rsquo;s work—something that helped propel the era of New Wave and Swiss Punk Design.
                     Weingart&rsquo;s explorations with the legibility of text, typography, and textures made it a very interesting creative challenge to 
                     attempt to represent his unique style. 
                    </p>    
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}