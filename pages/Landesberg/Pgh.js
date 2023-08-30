import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Web from "../../Images/Projects/Landesberg/PGH/PGH.png"
import Styles from "../../Images/Projects/Landesberg/PGH/Styles.png"
import Cards from "../../Images/Projects/Landesberg/PGH/People_Page.png"
import Comp from "../../Images/Projects/Landesberg/PGH/Components.png"
import Personal from "../../Images/Projects/Landesberg/PGH/Personal_Page.png"
import Calendar from "../../Images/Projects/Landesberg/PGH/Calendar.png"
import Events from "../../Images/Projects/Landesberg/PGH/Events.png"

export default function PGH(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | PGH Foundation</title>
            </Head>
            <div className = {styles.invisible}>
                <Image src = {Web} alt = "photo rotation"/>
                <Image src = {Styles} alt = "photo rotation"/>
                <Image src = {Cards} alt = "photo rotation"/>
                <Image src = {Comp} alt = "photo rotation"/>
                <Image src = {Personal} alt = "photo rotation"/>
                <Image src = {Calendar} alt = "photo rotation"/>
                <Image src = {Events} alt = "photo rotation"/>
            </div>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            The Pittsburgh Foundation Website Redesign
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Interaction designer </p> 
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> June 2023 </p>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Figma, HTML5, CSS3</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
                The Pittsburgh Foundation wanted to refresh of their website. I worked with a team to update the styling and layout of the website, focusing on interactions to the people and events pages. 
            </p>
         </div>
         </div>
            <div style = {{
                display: "flex", 
                justifyContent: "center", 
            
            }}>
                <Image src = {Web} width = {1080} height ={600} alt = "cover image"/>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> Project Description </h1>
                <p className = {styles.text}>For this project, the team was tasked to update and freshen the look and feel of The Pittsburgh Foundation (TPF) website, adding new layouts and functionality. Additionally,the website retained the basic global structure (menus, headers, footers). I was tasked with designing the staff page, the individual member pages, the events pages, and prototyping some of the designs from Figma.</p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> Design System </h1>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> Typography and color palette</p>
                </div>
                <div>
                <Image src = {Styles} alt = "Contextual Interview"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> Buttons and Components </h1>
                <p className = {styles.text}> A part of the redesign was to create components that gave the Pittsburgh Foundation website a new and fresh look. This provided for an opportunity to explore different interactions that could trigger when users interacted with components. </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> Card and Event components </p>
                </div>
                <div>
                <Image src = {Comp} alt = "Contextual Interview"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> Final Pages </h1>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> People Page </p>
                </div>
                <div>
                <Image src = {Cards} alt = "Contextual Interview"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> Individual Member Page </p>
                </div>
                <div>
                <Image src = {Personal} alt = "Contextual Interview"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> Calendar Page </p>
                </div>
                <div>
                <Image src = {Calendar} alt = "Contextual Interview"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> Event Page </p>
                </div>
                <div>
                <Image src = {Events} alt = "Contextual Interview"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}>Development</h1>
                <p className = {styles.text}> To test the design of the card component prototype, I developed 3 different interactions when the user hover overs the cards using HTML5 and CSS3. The team ultimately agreed that the colored border was too much because of resizing issues, and decided to go with the direction of the image scaling. </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                    Card Prototypes 
                    </p>
                </div>
                <div>
                <iframe width = "100%" height = "500px"src="https://www.youtube.com/embed/S14WkjDwOV4?autoplay=0&amp;loop=0&amp;mute=0&amp;controls=1&amp;playlist=S14WkjDwOV4" 
                frameBorder = "0" modestBranding = "1"></iframe>
                </div>
            </div>
            </main>
            <Footer/>
        </div>
    )
}