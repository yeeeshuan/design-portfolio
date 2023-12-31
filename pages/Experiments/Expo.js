import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Thumbnail from "../../Images/Projects/Expo/Thumbnail.png"; 
import Concept from "../../Images/Projects/Expo/Concept.png"; 
import Parti from "../../Images/Projects/Expo/Parti.png"; 
import Edu from "../../Images/Projects/Expo/Edu.png"; 
import Fin from "../../Images/Projects/Expo/Final.png"; 
import Ind from "../../Images/Projects/Expo/Ind.png"; 
import Co from "../../Images/Projects/Expo/Co.png"; 
import Evo from "../../Images/Projects/Expo/Evo.png"; 
import Story from "../../Images/Projects/Expo/Story.png"; 
import VS from "../../Images/Projects/Expo/Vs.png"; 
import Fireworks from "../../Images/Projects/Expo/Fireworks.gif"; 
import Tech from "../../Images/Projects/Expo/Tech_Diag.png"; 
import Top from "../../Images/Projects/Expo/Top.png"; 
import Side from "../../Images/Projects/Expo/Side.png"; 
import Render from "../../Images/Projects/Expo/Render.png"; 
import Model from "../../Images/Projects/Expo/Model.png"; 
import Scroll from "../../Images/Projects/Expo/Scroll.png"; 


export default function Expo(){
    return(

        <div>
            <Head>
            <title>Ethan Huang Design | Expo</title>
            </Head>
            <div className = {styles.invisible}>
                <Image src = {Thumbnail} alt = "photo rotation"/>
            </div>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            China Expo Pavilion 2025
            </h1>
            <div className = {styles.intro}>
            <div>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Interaction Designer, Prototyper</p> 
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> Dec 2022 </p>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> P5.js, AfterEffects, Illustrator, Rhino</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
                This is a project proposal for an exhibit that highlights China&rsquo;s innovation and sustainability goals for the upcoming Expo 2025 Osaka. 
            </p>
            <br/>
            <br/>
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
                    Expo 2025 Osaka is an event that &ldquo;brings together people and innovations from around the world in an effort to address issues facing mankind on a global scale.&rdquo; Each country participating is in charge of designing a pavilion that highlights these innovations. 
                    <br/>
                    <br/>
                    From the Expo&rsquo;s mission of highlighting how a country saves lives, empowers lives, and connects lives, I chose to specifically focus on creating an experience that highlights the efforts China is putting into creating innovations that <strong>empower lives</strong>.
                    </p>
                </div>
            </div>            
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Concept
                </h1>
                    <p className = {styles.text}>
                    Something that I noticed when researching modern Chinese innovations is that a lot of them were linked to Chinese inventions thousands of years ago. The Great Green Wall, Belt and Road Initiative, and advancements in AI could be traced to Chinese inventions for irrigation, the Silk Road, and the abacus. 
                    </p>
                    <br/>
                    <br/>
                    <p className = {styles.text}>
                    Thus, I wanted to concept of my exhibit to revolve around connecting the past with the present, allowing visitors to feel inspired by how Chinese inventions can continue to inspire the present. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Concept Map
                </p>
            </div>
            <div>
                <Image src = {Concept} alt = "Background Info"/>
            </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                    <p className = {styles.text}>
                        I was able to find models and plans for what the pavilion would look like online. Something that I wanted to take advantage of from the models was the bamboo theme—the architecture of the pavilion takes inspiration from the natural curves and forms that bamboo scrolls can create. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                        Exhibit Structure
                    </p>
                </div>
                <div className={styles.image_2}>
                    <Image src = {Render} alt = "Background Info"/>
                    <Image src = {Scroll} alt = "Background Info"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                        Model
                    </p>
                </div>
                <div>
                    <Image src = {Model} alt = "Background Info"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                    <h1 className = {styles.bTitle}> 
                        Exhibit Journey
                    </h1>
                    <p className = {styles.text}>
                        I modeled the journey through the pavilion using my concept map, imagining how I wanted one exhibit to flow to another. The experience would start with three exhibits about the Great Green Road/Irrigation, the Belt and Road Initiative/Silk Road, and AI/Abacus, laid out in chronological order with respect to the time they were invented, and then move to the ending experience. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                        Parti Diagram
                    </p>
                </div>
                <div>
                    <Image src = {Parti} alt = "Background Info"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                    <h1 className = {styles.bTitle}> 
                        Interactions
                    </h1>
                    <p className = {styles.text}>
                        For the first three educational exhibits, I wanted them to have a mix of different interactions for visitors to learn about the old and the new through the first three sets of inventions and innovations. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                        Educational Exhibits
                    </p>
                </div>
                <div>
                    <Image src = {Edu} alt = "Background Info"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Final Hallway Interaction
                </h1>
                    <p className = {styles.text}>
                    After seeing modern-day innovations from past inventions from the educational exhibits, I wanted to create an ending experience where visitors could understand the future possibilities of other Chinese inventions. This would allow visitors to leave the exhibit feeling inspired by how the Chinese can continue to innovate and empower lives. 
                    <br/>
                    <br/>
                    For this exhibit, I chose to fully build out and prototype the interaction. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                        Individual/Co-creative Interactions
                    </p>
                </div>
                <div>
                    <Image src = {Fin} alt = "Background Info"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                    <h1 className = {styles.bTitle}> 
                        Exhibit Design
                    </h1>
                    <p className = {styles.text}>
                        I wanted the exhibit to feel like an extension of the pavilion. Taking inspiration from how the pavilion was designed with bamboo scrolls in mind, I created a bamboo wall that extended down the ending hallway. Each set of curves would be a station where visitors could learn more about a set of inventions and innovations, such as gunpowder to fireworks to spaceships.
                        <br/>
                        <br/>
                        Just like how the text would flow on ancient bamboo scrolls, characters would be etched on the walls for visitors to interact with.
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                        Top View of Exhibit
                    </p>
                </div>
                <div>
                    <Image src = {Top} alt = "Background Info"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                        Side View of Exhibit
                    </p>
                </div>
                <div>
                    <Image src = {Side} alt = "Background Info"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                    <h1 className = {styles.bTitle}> 
                        Ending Hallway Interactions
                    </h1>
                    <p className = {styles.text}>
                        For the ending experience, I designed both an <strong>individual</strong> and <strong>co-creative</strong> experience. I wanted the co-creative experience to be a more complete experience than the individual one—there would be more layers to the interaction, and visitors would walk away from it with more information about the inventions. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                        Individual Journey Map
                    </p>
                </div>
                <div>
                    <Image src = {Ind} alt = "Background Info"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                       Co-Creative Journey Map
                    </p>
                </div>
                <div>
                    <Image src = {Co} alt = "Background Info"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                        Single Person Interaction Prototype
                    </p>
                </div>
                <div>
                    <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/Z1zpiw-alP4?si=jpFB7RLbKDfpXwhJ&amp;loop=1&amp;mute=0&amp;controls=1&amp;" frameBorder = "0" modestBranding = "1"></iframe>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                       Tech Diagram
                    </p>
                </div>
                <div>
                    <Image src = {Tech} alt = "Background Info"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                    <h1 className = {styles.pTitle}> 
                        Visual Style
                    </h1>
                    <p className = {styles.text}>
                    Something that inspired the visual style behind the transition from the old inventions to the current innovations was the <strong>evolution of Chinese text</strong>.  
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                        Visual Style Inspiration
                    </p>
                </div>
                <div className={styles.image_2}>
                    <Image src = {Story} alt = "Background Info"/>
                    <Image src = {Evo} alt = "Background Info"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                    <p className = {styles.text}>
                    The Chinese characters that we see today are the result of thousands of years of evolution of each character, from complex forms to simple characters. I built the visual style for my exhibit using this concept of continually improving on the shapes and forms of the characters—the characters that represented the inventions looked more realistic and rugged, whereas the characters that represented innovations were more abstract and clean. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                       Old vs. New
                    </p>
                </div>
                <div>
                    <Image src = {VS} alt = "Background Info"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <p className = {styles.text}>
                    The backgrounds to the animations that would play on the wall also provided an opportunity to push the concept of the old vs. the new. I made the backdrops of the inventions to have more depth, made with ink and pen. I then made the backdrops of the innovations to be flatter with color done digitally. 
                </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                        Fireworks Backdrop
                    </p>
                </div>
                <div>
                    <Image width = {1600} height = {900} src = {Fireworks} alt = "Background Info"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                        Spaceship Backdrop
                    </p>
                </div>
                <div>
                    <iframe width = "100%" height = "500px" src="https://player.vimeo.com/video/897441855?&amp;loop=1&amp;mute=0&amp;controls=1&amp;" frameBorder = "0" modestBranding = "1"></iframe>
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
                This project allowed me to understand how interactions can be used to tell stories. Through designing by layering interactions and utilizing both the physical and digital, users can have a more delightful and meaningful experience—suddenly, actions that are seemingly frustrating like learning are fun and interactive. 
                </p>    
                </div>
            </div>
                </main>
            <Footer/>
        </div>
    )
}