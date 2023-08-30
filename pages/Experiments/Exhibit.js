import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Thumbnail from "../../Images/Projects/Exhibit/Thumbnail.png"; 
import Mood from "../../Images/Projects/Exhibit/Moodboard.png"; 
import Parti from "../../Images/Projects/Exhibit/Parti.jpeg"; 
import Layout from "../../Images/Projects/Exhibit/Layout.png"; 
import Diagram from "../../Images/Projects/Exhibit/Diagram.png"; 
import One from "../../Images/Projects/Exhibit/1.png"; 
import Two from "../../Images/Projects/Exhibit/2.png"; 
import Three from "../../Images/Projects/Exhibit/3.png"; 
import Five from "../../Images/Projects/Exhibit/5.png"; 
import Six from "../../Images/Projects/Exhibit/6.png"; 
import Physical from "../../Images/Projects/Exhibit/Physical.jpg"; 
import P1 from "../../Images/Projects/Exhibit/P1.png"; 
import P2 from "../../Images/Projects/Exhibit/P2.png"; 
import P3 from "../../Images/Projects/Exhibit/P3.png";
import P4 from "../../Images/Projects/Exhibit/P4.png"; 

export default function Exhibit(){
    return(

        <div>
            <Head>
            <title>Ethan Huang Design | Exhibit</title>
            </Head>
            <div className = {styles.invisible}>
                <Image src = {Thumbnail} alt = "photo rotation"/>
                <Image src = {Mood} alt = "photo rotation"/>
                <Image src = {Parti} alt = "photo rotation"/>
                <Image src = {Layout} alt = "photo rotation"/>
                <Image src = {Diagram} alt = "photo rotation"/>
                <Image src = {One} alt = "photo rotation"/>
                <Image src = {Two} alt = "photo rotation"/>
                <Image src = {Three} alt = "photo rotation"/>
                <Image src = {Five} alt = "photo rotation"/>
                <Image src = {Six} alt = "photo rotation"/>
                <Image src = {Physical} alt = "photo rotation"/>
                <Image src = {P1} alt = "photo rotation"/>
                <Image src = {P2} alt = "photo rotation"/>
                <Image src = {P3} alt = "photo rotation"/>
                <Image src = {P4} alt = "photo rotation"/>
            </div>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Immersive Pop-up Exhibit 
            </h1>
            <div className = {styles.intro}>
            <div>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Interaction Designer, Prototyper</p> 
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> Dec 2022 </p>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Physical Prototyping, Adobe Ai/Ps, Sketchup</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
                An immersive Pop-up Exhibit experience designed around Charles and Ray Eames&rsquo;  iterative design process, concept of innovating as a last resort, and attention Human-Centered-Design. 
                As users move through the exhibit, they will feel as if they are moving through time and seeing how the Eames&rsquo; work builds on top of each other. 
            </p>
            <br/>
            <br/>
            <p>
            <a className = {styles.links} href = "https://medium.com/@yixuanhu/hybrid-exhibit-environments-87b5a09daad6" rel="noopener noreferrer" target="_blank"> Full Process </a> 
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
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Problem Space 
                </h1>
                    <p className = {styles.text}>
                    Current museums often use digital technology in ineffective ways—for example, films are often playing on loop becoming background noise, and the mental mapping of
                    lighting and text to artwork are confusing. In this project, I look at how to use digital technology to enhance the visitor&rsquo;s experience in ways museums are not currently doing by 
                    exploring how technology can augment content, increase learning and/or make the museum experience more interactive.
                    </p>
                </div>
                </div>
                <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Moodboard
                </h1>
                    <p className = {styles.text}>
                        Through creating a moodboard, I began to conceptualize how my exhibit should look with regards to type, flooring, and walls. 
                    </p>
                </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                        Moodboard
                    </p>
                    </div>
                    <div>
                    <p className = {styles.text}>
                    <Image src = {Mood} alt = "map"></Image>
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
                        Moving forward with the concept of users feeling as if they are moving through time when walking through the exhibit, I began to design the layout of the exhibit. 
                        Users will first move through an artist introduction space, then a hallway of work, and finally a domestic space that exhibits the Eames&rsquo; work in context.                  
                    </p>
                </div>
                </div>
                <div>
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.bTitle}> 
                    Exhibit layout
                    </h1>
                    <p className = {styles.text}>
                    Moving forward with the concept of users feeling as if they are moving through time when walking through the exhibit, I began to design the layout of the exhibit. 
                    Users will first move through an artist introduction space, then a hallway of work, and finally a domestic space that exhibits the Eames&rsquo; work in context. This is done so that 
                    users first learn about the Eames&rsquo; work, and then see and interact with the Eames&rsquo; work in the space that they were designed for. 
                    </p>    
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                   Exhibit Layout
                    </p>
                    </div>
                    <div>
                   <Image src = {Layout} alt = "story"></Image>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                   Parti Diagram
                    </p>
                    </div>
                    <div>
                   <Image src = {Parti} alt = "story"></Image>
                    </div>
                </div>
            </div>
            <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.bTitle}> 
                    Physical Prototyping
                    </h1>
                    <p className = {styles.text}>
                    Rather than actually creating the exhibit in real size, I decided to understand the scale and considerations to space with the next best thing—building the space out in foam core. 
                    Following a 1-inch to 2 feet scale, I began to understand the placement of objects and the scale of interactions using a scaled-down physical model.
                    </p>
                    </div>
                </div>    
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                   Physical Model 
                    </p>
                    </div>
                    <div>
                   <Image src = {Physical} alt = "story"></Image>
                    </div>
                </div>   
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                   Close-ups
                    </p>
                    </div>
                    <div>
                        <div className = {styles.image_2}>
                            <Image src = {P1} alt = "story"></Image>
                            <Image src = {P2} alt = "story"></Image>
                        </div>
                        <div className = {styles.image_2}>
                            <Image src = {P3} alt = "story"></Image>
                            <Image src = {P4} alt = "story"></Image>
                        </div>
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
                    Through the use of an arduino to LoFi prototype how interactions would look in real time, I began to conceptualize how I wanted users to interact with and move through the exhibit. 
                    </p>
                    </div>
                </div>
            <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Prototyping with touch sensor and LED light 
                    </p>
                    </div>
                    <iframe width = "100%" height = "500px" src="https://player.vimeo.com/video/775602316" frameBorder = "0" modestBranding = "1"></iframe>
                </div>
                <div className = {styles.page}>
                    <div>
                    <p className = {styles.d}> 
                    Hardware diagram 
                    </p>
                    </div>
                        <Image src = {Diagram} alt = "diagram"></Image>

                    </div>
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                        <h1 className = {styles.pTitle}> 
                            Main Interactions
                        </h1>
                        <p className = {styles.text}>
                            The main interactions that happen during the tour are: 
                            <br/>
                            <br/>
                            1. Film that automatically starts when the user enters the introduction space 
                            <br/>
                            2. Lights that light up chronologically as user walks down the hallway
                            <br/>
                            3. Directly interacting with the Eames&rsquo; work in the domestic space
                        </p>

                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                        <p className = {styles.d}> 
                        Auto-playing film 
                        </p>
                    </div>
                    <div className = {styles.image_2}>
                        <Image src = {Six} alt = "story"></Image>
                        <Image src = {Five} alt = "story"></Image>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                        <p className = {styles.d}> 
                            Walking down hallway 
                        </p>
                    </div>
                    <div className = {styles.image_3}>
                        <Image src = {One} alt = "story"></Image>
                        <Image src = {Two} alt = "story"></Image>
                        <Image src = {Three} alt = "story"></Image>
                    </div>
                </div>
                <div className = {styles.page}>
                    <div>
                        <p className = {styles.d}> 
                            Directly interacting with Eames&rsquo; work in living room space 
                        </p>
                    </div>
                        <Image src = {Thumbnail} alt = "story"></Image>
                </div>
                <div className = {styles.page}>
                    <div>
                    </div>
                    <div>
                    <h1 className = {styles.pTitle}> 
                   Project Reflection 
                    </h1>
                    <p className = {styles.text}>
                    Through creating an immersive Pop-up exhibit for the Eames, I learned a lot about how to effectively incorporate digital interactions in a physical space—interactions do not necessarily 
                    need to be complex to completely change a user&rsquo;s experience with a space. Through the help of physical prototyping, Lofi Prototyping, Moodboards, Parti Diagrams, and simple visualizations, concepts and ideas can be effectively communicated without 
                    needing to go through the effort of creating a High-Fidelity prototype. These methods also allow for myriad interactions to be experimented with, allowing for the most complex 
                    interactions and ideas to be visualized and a &ldquo;fail fast&rdquo; approach to iterating.
                    <br/>
                    <br/>
                    And more importantly, I was also able to learn more about the Eames&rsquo; revolutionary contributions to the world of design. 

                    </p>    
                    </div>
                </div>
                </main>
            <Footer/>
        </div>
    )
}