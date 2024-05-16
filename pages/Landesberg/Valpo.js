import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Web from "../../Images/Projects/Landesberg/Valpo/Valpo.png"
import Type from "../../Images/Projects/Landesberg/Valpo/Styles.png"
import Buttons from "../../Images/Projects/Landesberg/Valpo/Buttons.png"
import Assets from "../../Images/Projects/Landesberg/Valpo/Assets.png"
import Footers from "../../Images/Projects/Landesberg/Valpo/Footers.png"
import Sidebars from "../../Images/Projects/Landesberg/Valpo/Sidebars.png"
import F1 from "../../Images/Projects/Landesberg/Valpo/F1.png"
import F2 from "../../Images/Projects/Landesberg/Valpo/F2.png"
import D1 from "../../Images/Projects/Landesberg/Valpo/Desktop_1.png"
import D2 from "../../Images/Projects/Landesberg/Valpo/Desktop_2.png"
import Mobile from "../../Images/Projects/Landesberg/Valpo/Mobile.png"

export default function Websites(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | Valpo</title>
            </Head>
            <div className = {styles.invisible}>
                <Image src = {Web} alt = "photo rotation"/>
                <Image src = {Type} alt = "photo rotation"/>
                <Image src = {Buttons} alt = "photo rotation"/>
                <Image src = {Assets} alt = "photo rotation"/>
                <Image src = {Footers} alt = "photo rotation"/>
                <Image src = {Sidebars} alt = "photo rotation"/>
                <Image src = {F1} alt = "photo rotation"/>
                <Image src = {F2} alt = "photo rotation"/>
                <Image src = {D1} alt = "photo rotation"/>
                <Image src = {D2} alt = "photo rotation"/>
                <Image src = {Mobile} alt = "photo rotation"/>
            </div>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Valparaiso Univeristy Online Magazine
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Interaction designer </p> 
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> June 2023 </p>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Figma</p>
            <br></br>
            <p className = {styles.d1}>Collaborators //</p><p className = {styles.d2}> Michael Artman</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            Valparaiso University wanted their print magazine to move online. As a result, I designed a website that explored how magazine elements such as feature pages and sidebars could translate into a 
            digital form. 
            </p>
            </div>
         </div>
            <div>
                <Image src = {Web} alt = "cover image"/>
            </div>
            <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.pTitle}> 
                        Project Description
                    </h1>
                    <p className = {styles.text}>
                        Valpo Magazine is re-launching its publication in a new digital-only format. The outgoing print magazine will serve as a foundation to build upon as we work to craft a new website that captures a familiar but unique presentation and capitalizes on the opportunities that the digital format provides.
                       
                    </p>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.pTitle}> 
                        Design System
                    </h1>
                    <p className = {styles.text}>
                        Through our design system, we wanted to retain recognizable look, feel, and typographic palette of Valpo print magazine where practical, remaining an “exceptional” case outside of Valparaiso University branding.
                        <br/>
                        <br/>
                        We also wanted to retain storytelling variety, with less dense, and more up-to-date content.
                    </p>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Typography
                    </p>
                    </div>
                    <Image src = {Type} alt = "Type"/>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Buttons
                    </p>
                    </div>
                    <Image src = {Buttons} alt = "Buttons"/>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Mobile Assets
                    </p>
                    </div>
                    <Image src = {Assets} alt = "Buttons"/>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Different Footers Tested
                    </p>
                    </div>
                    <Image src = {Footers} alt = "Buttons"/>
                </div>
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.pTitle}> 
                        Sidebars
                    </h1>
                    <p className = {styles.text}>
                        Exploring how sidebars, interesting secondary information to the main article, could be translated into a digital format provided an interesting opportunity to prototype. 
                    </p>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Sidebars Tested
                    </p>
                    </div>
                    <Image src = {Sidebars} alt = "Sidebars"/>
                </div>          
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Sidebar Iteration 1
                    </p>
                    </div>
                    <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/ga-lF1JGbjQ?autoplay=0&amp;loop=0&amp;mute=0&amp;controls=1&amp;playlist=ga-lF1JGbjQ" frameBorder = "0" modestBranding = "1" allowFullScreen></iframe>
                </div>       
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Sidebar Iteration 2
                    </p>
                    </div>
                    <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/NDESw25pOpI?autoplay=0&amp;loop=0&amp;mute=0&amp;controls=1&amp;playlist=NDESw25pOpI" frameBorder = "0" modestBranding = "1" allowFullScreen></iframe>
                </div>       
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Sidebar Iteration 3
                    </p>
                    </div>
                    <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/kS7K18vsvC0?autoplay=0&amp;loop=0&amp;mute=0&amp;controls=1&amp;playlist=kS7K18vsvC0" frameBorder = "0" modestBranding = "1" allowFullScreen></iframe>
                </div>       
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.pTitle}> 
                        Desktop View
                    </h1>
                    <p className = {styles.text}>
                        I worked on mocking up how some of the feature articles would be translated to a desktop view. 
                        <br/>
                        <br/>
                        Focusing on how the articles could be made customizable from a developer perspective, I experimented with drop caps, borders, quotes, and colors to seperate paragraphs. 
                    </p>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Desktop Screens
                    </p>
                    </div>
                    <div>
                        <div>
                        <Image src = {D1} alt = "Buttons"/>
                        <Image src = {D2} alt = "Buttons"/>
                        </div>
                    </div>
                </div> 
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Desktop Feature Mock-Up 1
                    </p>
                    </div>
                    <div>
                        <div>
                        <Image src = {F1} alt = "Buttons"/>
                        </div>
                    </div>
                </div> 
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Desktop Feature Mock-Up 2
                    </p>
                    </div>
                    <div>
                        <div>
                        <Image src = {F2} alt = "Buttons"/>
                        </div>
                    </div>
                </div> 
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.pTitle}> 
                        Mobile View
                    </h1>
                    <p className = {styles.text}>
                       After building the desktop view, I explored how the wireframe could be translated to a mobile view. 
                       I built a series of new components to adapt to the mobile screen, thinking about how typography, graphical elements, 
                       and interactions could look. 

                    </p>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                        Mobile Screen Mock-Ups
                    </p>
                    </div>
                    <Image src = {Mobile} alt = "Mobile Screen Mock-ups"/>
                </div>       
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                        Mobile Navigation 
                    </p>
                    </div>
                    <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/-SIgk64vpik?autoplay=0&amp;loop=0&amp;mute=0&amp;controls=1&amp;playlist=-SIgk64vpik" frameBorder = "0" modestBranding = "1" allowFullScreen></iframe>
                </div>       
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                        Mobile Mock-Up
                    </p>
                    </div>
                    <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/AvJOtL_06T0?autoplay=0&amp;loop=0&amp;mute=0&amp;controls=1&amp;playlist=AvJOtL_06T0" frameBorder = "0" modestBranding = "1" allowFullScreen></iframe>
                </div>       
            </main>
            <Footer/>
        </div>
    )
}