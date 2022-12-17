import styled from 'styled-components'; 
import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import P4 from '../Images/About/P4.png'; 
import Init from "../Images/Projects/Systems/Initial.jpeg"
import Mess from "../Images/Projects/Systems/Mess.png"
import Iter1 from "../Images/Projects/Systems/Iter1.png"
import Layout from "../Images/Projects/Systems/Layout.png"
import Language from "../Images/Projects/Systems/Language.png"
import Interventions from "../Images/Projects/Systems/Interventions.png"
import Feedback from "../Images/Projects/Systems/Feedback.png"
import Root from "../Images/Projects/Systems/Root_Causes.png"
import Final from "../Images/Projects/Systems/Final.png"
import Navbar from '../components/navbar';
import Footer from '../components/footer';


export default function Systems(){
    return(

        <div>
            <Navbar/>
            <div className = {styles.intro}>
            <div>
            <h1 className = {styles.mTitle}> 
            PGH Poor Water Quality 
            </h1>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Systems Mapping, Information Visualization</p> 
            <br></br>
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> October 2022 </p>
            <br></br>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Systems Thinking, Design Research, Figma, Illustrator</p>
            <br></br>
            <br></br>
            <p className = {styles.d1}>Collaborators //</p><p className = {styles.d2}> Joan L., Sojung P., Charlie B.</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
                A gigamap that looks to expose the intricacies, interconnections, and stakeholders in the Pittsburgh Water Crisis.
                <br/>
                <br/>
                Our team focused on researching leverage points that currently aim to intervene with regards to the environment, policy, healthcare, and social systems, as well as 
                identifying pain points that citizens from access to clean water.
            
            
            </p>
            </div>
            </div>
            <div style = {{
                display: "flex", 
                justifyContent: "center", 
            
            }}>
                <Image src = {P4} width = {1080} height ={720} alt = "cover image"/>
            </div>

            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Problem Space 
                </h1>
                    <p className = {styles.text}>
                    Water—a resource that is often overlooked and taken for granted—is a serious problem affecting Pittsburgh; after all, 
                    Pittsburgh is famously situated at the intersection of three rivers, so why would water be an issue? This map aims to combat and learn about the complex problem of poor water quality by working at a scale that 
                    incorporates looking at the history of the steel economy at a broader scale to find the relationship between social, 
                    political, and economical elements.                     
                    </p>
                </div>
            </div>

            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Inital Research
                </h1>
                    <p className = {styles.text}>
                    We first began our research by creating a mess map. By beginning to understand some of the interconnections by organizing the map to cause-and-effect chains, 
                    we could begin to see the structure to our map. We drew arrows and added annotations to demonstrate the correlation between different items. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                <p className = {styles.d}> 
                    Initial mess map
                </p>
                </div>
                <div>
                <Image src = {Init} alt = "Initial Commit"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Further organization 
                </h1>
                    <p className = {styles.text}>
                    To more clearly understand the scale and complexity of the water crisis, our group orgnaized our map based off of 
                    Social, Technological, Economic, and Political — STEEP — issues and Jamer Hunt&rsquo; scalar framing model. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                <p className = {styles.d}> 
                  Mess map and STEEP/Scalar framing map 
                </p>
                </div>
                <div className = {styles.image_1}>
                <Image src = {Mess} alt = "Mess Map"/>
                <Image src = {Iter1} alt = "Iteration 1"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Design Considerations 
                </h1>
                    <p className = {styles.text}>
                    When visualizing our map, there were many considerations to the layout and color choices of our map. 
                    Many of our design decisions were made to capture the seriousness and graveness of the wicked problem, 
                    while also ensuring that the map was readable and visually appealing. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.bTitle}> 
                Layout and Composition 
                </h1>
                    <p className = {styles.text}>
                    We went through multiple interactions of how the map should be structured. We wanted to effectively show the inputs/outputs
                    of the systems, as well as how each item was connected by highlighting the feedback loops and relationships within the map. Ultimately, 
                    We decided on a layered composition that would be able to highlight the scales of the inputs and outputs of the map, exposing the 
                    complexity of the issue by demonstrating how it extends through multiple scales. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                <p className = {styles.d}> 
                Composition and Layout 
                </p>
                </div>
                <Image src = {Layout} alt = "Interventions"/>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.bTitle}> 
                Design Language
                </h1>
                    <p className = {styles.text}>
                    We wanted the map to remind viewers of water, and for it to convey how deep and heavy the problem was. 
                    However, with the shapes used, we wanted the shapes to softer, comforting and giving viewers hope when understanding the 
                    scope of the problem. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                <p className = {styles.d}> 
                Design Language Guide 
                </p>
                </div>
                <Image src = {Language} alt = "Interventions"/>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                Map Breakdown 
                </h1>
                    <p className = {styles.text}>
                    We were able to study the PGH water crisis in detail by looking at positive/negative feedback loops, intervention points, and 
                    most importantly, pinpointing the root causes of the problem.
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.bTitle}> 
                Feedback Loops
                </h1>
                    <p className = {styles.text}>
                    The team studied the map to pinpoint areas that consisted of negative and positive feedback loops. 
                    Negative and positive feedback loops allowed us to pinpoint problems that could intensify 
                    if left unaddressed. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                <p className = {styles.d}> 
                Feedback Loops  
                </p>
                </div>
                <div>
                <Image src = {Feedback} alt = "Feedback"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.bTitle}> 
                Interventions and Root Causes 
                </h1>
                    <p className = {styles.text}>
                    The complexity of the PGH water crisis makes it impossible to develop an effective solution; however, by pinpointing 
                    the root causes of the problem and looking at smaller, individual interventions that can be taken, the problem can ultimately be improved. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                <p className = {styles.d}> 
                Interventions and Root Causes
                </p>
                </div>
                <div className = {styles.image_1}>
                <Image src = {Interventions} alt = "Interventions"/>
                <Image src = {Root} alt = "Root"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.bTitle}> 
                Project Reflection  
                </h1>
                    <p className = {styles.text}>
                    After using various methods to study the PGH water crisis, we now understand how some problems are unsolvable; instead 
                    of finding a solution, it is more beneficial to understand the complexity of a wicked problem. Through systems mapping, 
                    seemingly impossible problems are a lot approachable, shedding light on large, often unnoticed issues that exist in plain sight. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                <p className = {styles.d}> 
                Final Map 
                </p>
                </div>
                <div>
                <Image src = {Final} alt = "Final"/>
                </div>
            </div>
            
            
        <Footer/>
        </div>
    )
}