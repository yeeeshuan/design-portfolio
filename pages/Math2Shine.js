import styled from 'styled-components'; 
import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import P1 from "../Images/About/P1.png"
import I1 from "../Images/Projects/Math2Shine/1.png"
import I2 from "../Images/Projects/Math2Shine/2.png"
import I3 from "../Images/Projects/Math2Shine/3.png"
import I4 from "../Images/Projects/Math2Shine/4.png"
import I5 from "../Images/Projects/Math2Shine/5.png"
import I6 from "../Images/Projects/Math2Shine/6.png"
import I7 from "../Images/Projects/Math2Shine/7.png"
import I8 from "../Images/Projects/Math2Shine/8.png"
import I9 from "../Images/Projects/Math2Shine/9.png"
import I10 from "../Images/Projects/Math2Shine/10.png"


export default function Math2Shine(){
    return(
        <div>
            <Navbar/>
            <div className = {styles.page}>
            <div>
            <h1 className = {styles.pTitle}> 
            Math2Shine Redesign 
            </h1>
            <br></br>
            Role: <p className = {styles.d}>UI Design and Web Development Intern </p> 
            <br></br>
            <br></br>
            Duration: <p className = {styles.d}> May 2022 - July 2022 </p>
            <br></br>
            <br></br>
            Tools:  <p className = {styles.d}>Figma, Illustrator, React.js, MUI Library</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            Math2Shine is an online learning platform strives to teach students about the wonders of Vedic Maths. Working with the development team, 
            I helped redesign and develop the Math2Shine website with the goal of reaching out to more teachers, tutors, and students. 
            </p>
            </div>
         </div>
         <div style = {{
                display: "flex", 
                justifyContent: "center", 
            
            }}>
                <Image src = {P1} width = {1080} height ={600} alt = "cover image"/>
            </div>

        <div className = {styles.page}>
                <div>
                </div>
                
                <div>
                <h1 className = {styles.pTitle}> 
                 Branding 
                </h1>
                <p className = {styles.text}>
                We designed the brand to feel both fun and serious; we incorporated elements to make the website seem playful to appeal 
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
            <div className = {styles.page}>
                <div>
                </div>
                
                <div>
                <h1 className = {styles.pTitle}> 
                    Problem Space 
                </h1>
                <p className = {styles.text}>
                    As students develop their math skills, many of their hardships stem from lack of confidence with their fundamental computing skills. 
                    Through our redesign, we wanted to bring more attention to Vedic math to be able to teach students a skills and tricks to be able to do mathematics without second-guessing their answers. 

                    <br/>
                    <br/>

                    Our team looked at pre-existing online learning platforms and indentified gain points that helped provide a holistic approach to learning. 
                </p>
                </div>
             </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                Wireframing and prototyping 
                </h1>
                <p className = {styles.text}>
                After sketching out a general user flow guide to guide students and tutors through the platform, we began to build high-fidelity 
                wireframes. We wanted to ensure that the website was intuitive, with all of the main functions easily accessible.
                What information is most important to help teachers run an online classroom? 
                How can students most easily access resources to help them when they are stuck? 
                <br></br>
                <br></br>

                In addition, since we were 
                redesigning the website we also wanted to make sure that all of the functions from the backend were still present in the page. 
                </p>
                </div>
            </div>
            <div className = {styles.page}>
            <p className = {styles.d}> 
                    User flow    
                </p>
                <Image src = {I8} alt = "user flow" />
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                Redesign 
                </h1>
                <p className = {styles.text}>
                To prepare for user testing, we began to protoype the navigation and content of the website. We explored with color, type and layout, 
                imagining different scenarios that students and teachers may have when navigating the page. 

                </p>
                </div>
            </div>

            <div className = {styles.page}>
            <p className = {styles.d}> 
                   Color schemes tested 
                </p>
            <div className = {styles.image_1}>
                <div>
                    <Image src = {I5} alt = "iteration 3"/>
                </div>
                <div>
                    <Image src = {I3} alt = "iteration 1"/>
                    <Image src = {I4} alt = "iteration 2"/>
                </div>

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
                    Assignment Page — designed a better way for students to recognize missing assignments 
                </p>
                <Image src = {I6} alt = "Assignment "/>
            </div>

            <div className = {styles.page}>
                <div>
                </div>           
                <div>
                <h1 className = {styles.pTitle}> 
                Development
                </h1>
                <p className = {styles.text}>
                Collaborated with other developers to translate the designs from Figma to React.js while implementing the MUI library. 
                </p>
                </div>
            </div>

            <div className = {styles.page}>
                <div>

                </div>
                <Image src = {I10} alt = "Development team "/>
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
                Although I learned some of the basics to how to utilize the React.js to work the frontend, I still have much to learn about 
                all that the library offers. 

                </p>

                </div>
            </div>

            <Footer/>

        </div>

    )
}