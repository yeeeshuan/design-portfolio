import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import P1 from "../../Images/About/P1.jpeg"
import I2 from "../../Images/Projects/Math2Shine/2.png"
import I3 from "../../Images/Projects/Math2Shine/3.png"
import I4 from "../../Images/Projects/Math2Shine/4.png"
import I5 from "../../Images/Projects/Math2Shine/5.png"
import I14 from "../../Images/Projects/Math2Shine/14.png"
import I5a from "../../Images/Projects/Math2Shine/5a.png"
import I9 from "../../Images/Projects/Math2Shine/9.png"
import I10 from "../../Images/Projects/Math2Shine/10.png"
import I11 from "../../Images/Projects/Math2Shine/Ill.png"
import I15 from "../../Images/Projects/Math2Shine/Sketch_1.png"
import I16 from "../../Images/Projects/Math2Shine/Sketch_2.png"
import W1 from "../../Images/Projects/Math2Shine/W1.png"
import W2 from "../../Images/Projects/Math2Shine/W2.png"
import D1 from "../../Images/Projects/Math2Shine/D1.png"
import D2 from "../../Images/Projects/Math2Shine/D2.png"
import D3 from "../../Images/Projects/Math2Shine/D3.png"




export default function Math2Shine(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | Math2Shine</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Math2Shine Redesign 
            </h1>
            <div className = {styles.intro}>
                <div className = {styles.role}>
                    <p className = {styles.d1}>Role //</p><p className = {styles.d2}> UI Design and Web Development Intern </p> 
                    <br></br>
                    <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> May 2022 - July 2022 </p>
                    <br></br>
                    <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Figma, Illustrator, React.js, MUI Library</p>
                </div>
                <div className = {styles.cont}> 
                    <p className = {styles.text}>
                    Math2Shine is an online learning platform that strives to teach students about the wonders of Vedic Maths. Working with the development team, 
                    I helped redesign and develop the Math2Shine website to reach out to more teachers, tutors, and students. 
                    </p>
                </div>
         </div>
         <div style = {{
                display: "flex", 
                justifyContent: "center", 
            }}>
               <Image src = {P1} width = {1080} height ={600} alt = "cover image"/>
            </div>
        <br/>
        <br/>

        <div className = {styles.page}>
                <div className = "empty">
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                 Branding 
                </h1>
                <p className = {styles.text}>
                I designed the brand to feel both fun and serious; we incorporated elements to make the website seem playful to appeal 
                to the students while also keeping the design serious when it came to work. 
                Part-playful, part-serious, just like how learning should be. 
                </p>
                </div>
        </div>

        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Brand guide    
                </p>
            </div>
            <div>
                <Image src = {I9} alt = "brand"/>
            </div>
            </div>
            <br/>
            <br/>
            <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Character Assets
                </p>
            </div>
                <div>
                    <Image src = {I11} alt = "brand"/>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                
                <div>
                <h1 className = {styles.pTitle}> 
                    Problem Space 
                </h1>
                <p className = {styles.text}>
                As students develop their math skills, many of their hardships stem from a lack of confidence in their fundamental computing skills. 
                Through the redesign, I wanted to bring more attention to Vedic math to teach students skills and tricks to do 
                mathematics without second-guessing their answers.

                    <br/>
                    <br/>   
                Our team looked at pre-existing online learning platforms and identified gain points that helped provide a holistic approach to learning. 
                </p>
                </div>
             </div>
             <div className = {styles.page}>
                <div>
                </div>
             </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                Wireframing and prototyping 
                </h1>
                </div>
                </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                    Sketches and basic user flow    
                    </p>
                </div>
                    <div className = {styles.image_1}>
                    <Image src = {I16} alt = "iteration 1"/>
                    <Image src = {I15} alt = "iteration 1"/>     
                    </div> 
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <p className = {styles.text}>
                After sketching out a general user flow guide to guide students and tutors through the platform, I began to build high-fidelity 
                wireframes. I wanted to ensure that the website was intuitive, with all of the main functions easily accessible.
                </p>
                </div>
            </div>
            <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Refined student user flow    
                </p>
            </div>
                <Image src = {W1} alt = "iteration 1"/>
            </div>
            <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Refined teacher user flow    
                </p>
            </div>
                <Image src = {W2} alt = "iteration 1"/>
            </div>
           
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                Redesign 
                </h1>
                <p className = {styles.text}>
                To prepare for user testing, I began to prototype the navigation and content of the website. I explored with color, type, and layout, 
                imagining different scenarios that students and teachers may have when navigating the page. In addition, I also wanted to make sure that the website architecture from the previous website remained the same. 
                </p>
                <br/>
                <br/>
                <p className = {styles.text}>
                The original design of the page posed many problems, as the page was bombarded with information, and important tools were difficult to access. 
                My team worked on pinpointing the pain points and brainstormed a variety of methods to effectively help students and teachers navigate through 
                the interface. 
                </p>
                </div>
            </div>

            <div className = {styles.page}>
            <p className = {styles.d}> 
                   Color schemes tested 
                </p>
            <div className = {styles.image_3}>
                    <Image src = {I5a} alt = "iteration 3"/>
                    <Image src = {I3} alt = "iteration 1"/>
                    <Image src = {I4} alt = "iteration 2"/>
            </div>
            </div>

            <div className = {styles.page}>
            <p className = {styles.d}> 
                    Login Page    
                </p>
                <Image src = {I2} alt = "login"/>
            </div>
            <div className = {styles.page}>
            <p className = {styles.d}> 
                Student Portal — explored methods of organizing visual clutter   
            </p>
                <Image src = {I5} alt = "student portal"/>
            </div>
            <div className = {styles.page}>
            <p className = {styles.d}> 
                Analytic Page
            </p>
                <Image src = {I14} alt = "student portal"/>
            </div>
            <div className = {styles.page}>
                <div>
                </div>           
                <div>
                <h1 className = {styles.pTitle}> 
                Development
                </h1>
                <p className = {styles.text}>
                Collaborated with the development team to build the frontend of the home page from Figma to React.js while implementing the MUI library. 
                </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                    Pages Developed
                    </p>
                </div>
                <div className = {styles.image_3}>
                    <Image src = {D1} alt = "Development team "/>
                    <Image src = {D2} alt = "Development team "/>
                    <Image src = {D3} alt = "Development team "/>
                </div>
            </div>

            <div className = {styles.page}>
                <div>
                <p className = {styles.d}> 
                    Collaborating with development team
                </p>
                </div>
                <div>
                <Image src = {I10} alt = "Development team "/>
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
                
                Working on this internship heavily shaped my ability to design for multiple groups of people —
                I was forced to move past designing for one person and understand how to design a serious yet lighthearted platform for both teachers and students. 
                More user testing will allow the design of the website to continue to evolve and improve. 

                <br/>
                <br/>
                I was also able to gain many unique insights by collaborating and communicating with a team of developers — both as a designer and a member of the team. 
                Although I learned some of the basics of how to utilize the React.js to work the frontend, I still have much to learn about 
                all that the library offers. 

                </p>

                </div>
            </div>
            </main>
            <Footer/>

        </div>

    )
}