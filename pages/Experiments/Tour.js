import Head from 'next/head';
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Storyboard from "../../Images/Projects/Tour/Storyboard.jpeg"; 
import Map from "../../Images/Projects/Tour/SystemsMap.png"; 
import One from "../../Images/Projects/Tour/Inter01.jpeg"; 
import Two from "../../Images/Projects/Tour/Inter02.jpeg"; 
import Three from "../../Images/Projects/Tour/Inter03.jpeg"; 

export default function Tour(){
    return(

        <div>
             <Head>
            <title>Ethan Huang Design | Tour</title>
            </Head>
            <div className = {styles.invisible}>
                <Image src = {Storyboard} alt = "photo rotation"/>
                <Image src = {Map} alt = "photo rotation"/>
                <Image src = {One} alt = "photo rotation"/>
                <Image src = {Two} alt = "photo rotation"/>
                <Image src = {Three} alt = "photo rotation"/>
            </div>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Virtual Tour  
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Interaction Designer, Prototyper</p> 
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> November 2022 </p>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Rapid Prototyping, AfterEffects, Aero</p>
            <br></br>
            <p className = {styles.d1}>Collaborator //</p><p className = {styles.d2}> Evie Lacomb</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            An augmented reality tour that informs prospective students and family about student life and individual programs. 
            The tour serves to combat the shortcomings of existing tour options, creating a more engaging and personal tour experience. 
            </p>
         </div>
         </div>
            <div style = {{
                display: "flex", 
                justifyContent: "center", 
                marginTop: "50px",
            
            }}>
                <iframe className = "thumbnail" src = "https://www.youtube.com/embed/qllmIUuhOWU?&controls=0"
                 width = {1080} height ={600} frameBorder="0" alt = "cover image"/>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Problem Space 
                </h1>
                    <p className = {styles.text}>
                    Due to technological restraints, the current prospective student tour at Carnegie Mellon is broad, 
                    focused on what&rsquo;s on campus, and limited to the knowledge of the student tour guide. In this project, 
                    I explore how to use Augmented Reality to enrich the tour experience, looking at how to design interfaces 
                    to inform and delight users on useful information and stories. 
                    </p>
                </div>
                </div>
                <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Systems Map 
                </h1>
                    <p className = {styles.text}>
                        Through a systems map, we looked at the different levels that we were designing for and understanding if our interactions were accessible for multiple groups of people. 
                    </p>
                </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                        Systems Map 
                    </p>
                    </div>
                    <div>
                    <p className = {styles.text}>
                    <Image src = {Map} alt = "map"></Image>
                    </p>
                    </div>
                </div>
                <div className = {styles.page}>
                <div>
                </div>
                <div>
                    <h1 className = {styles.pTitle}> 
                        Process
                    </h1>
                    <p className = {styles.text}>
                        For our prototype, we looked at how we could add digital interactions to TechSpark, 
                        CMU&rsquo;s largest maker-space. We thought about how we wanted users to move through the space—what 
                        order should information be presented to users?
                    
                    </p>
                </div>
                </div>
                <div>
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.bTitle}> 
                    Storyboarding
                    </h1>
                    <p className = {styles.text}>
                        Thinking about how we wanted to introduce interactions into the space, we thought about we can add technology to the tour 
                        to make it most engaging and intuitive for the users. 
                    </p>    
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                   Original storyboard
                    </p>
                    </div>
                    <div>
                   <Image src = {Storyboard} alt = "story"></Image>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.bTitle}> 
                    Lo-Fi Prototyping
                    </h1>
                    <p className = {styles.text}>
                    To get an understanding of how the interactions would look in VR, we prototyped with state-of-the-art rulers and printed designs in place of 
                    virtual interactions. 
                    </p>
                    </div>
                </div>
            </div>
            <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Lo-Fi prototypes of interactions 
                    </p>
                    </div>
                    <div className = {styles.image_1}>
                    <iframe width = "100%" height = "500px" src= "https://player.vimeo.com/video/772267222" frameBorder = "0" modestBranding = "1"></iframe>
                    <iframe width = "100%" height = "500px" src="https://player.vimeo.com/video/772265314" frameBorder = "0" modestBranding = "1"></iframe>

                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                        <h1 className = {styles.pTitle}> 
                            Main Interactions
                        </h1>
                        <p className = {styles.text}>
                            The main interactions that we created for the tour were: 
                            <br/>
                            <br/>
                            1. Sparky, our virtual tour guide 
                            <br/>
                            2. Learning more about the machines 
                            <br/>
                            3. Piecing together a project 
                        </p>

                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                        <p className = {styles.d}> 
                        Sparky, our virtual tour guide 
                        </p>
                    </div>
                        <Image src = {Three} alt = "story"></Image>
                </div>
                <div className = {styles.page}>
                    <div>
                        <p className = {styles.d}> 
                            Picking an object
                        </p>
                    </div>
                        <Image src = {One} alt = "story"></Image>
                </div>
                <div className = {styles.page}>
                    <div>
                        <p className = {styles.d}> 
                            Piecing it together
                        </p>
                    </div>
                        <Image src = {Two} alt = "story"></Image>
                </div>
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.pTitle}> 
                   Project Reflection 
                    </h1>
                    <p className = {styles.text}>
                    This project was interesting since it was my first time thinking about how to utilize a space as an interface—interfaces do not need to be limited to the screen. By thinking of 
                    the room as an interface, users are more engaged with the space around them. Through Lo-Fi prototyping, I was able to understand how useful seemingly simple ruler and paper prototypes
                     are to think about how intuitive an interaction is. 
                    </p>    
                    </div>
                </div>
                </main>
            <Footer/>
        </div>
    )
}