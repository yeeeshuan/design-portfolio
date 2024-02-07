import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Thumbnail from "../../Images/Projects/Replit/Replit.png";
import UI from "../../Images/Projects/Replit/Flow.png"
import Journey from "../../Images/Projects/Replit/Journey.png"
import Student from "../../Images/Projects/Replit/Student.png"; 
import Prof from "../../Images/Projects/Replit/Prof.png"; 

export default function Gmail(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | Replit Community Page</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Replit Community Page
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
                <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Product Designer, Developer </p> 
                <br></br>
                <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> January 2024 </p>
                <br></br>
                <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Figma, Next.js, MongoDB</p>
                </div>
            <div className = {styles.cont}> 
                <p className = {styles.text}>
                    Designing a set of components to improve the filter feature on Replit community page, considering the needs and interests of students and professionals.
                <br/>
                <br/>
                </p>
            </div>
         </div>
        <div style = {{
            display: "flex", 
            justifyContent: "center", 
        
        }}>
            <Image src = {Thumbnail} width = {1080} height ={600} alt = "cover image"/>
        </div>
        <br/>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Problem Space
            </h1>
            <p className = {styles.text}>
                Replit is an online IDE to help users of different coding backgrounds host projects. It has a community page, where users find projects for inspiration and learning purposes. 
                For this project, I designed a set of new components to help users filter through projects (Repls) on the community page, considering the needs and interests of students and professionals.
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Research
            </h1>
            <h1 className = {styles.bTitle}> 
                Identifying pain points
            </h1>
            <p className = {styles.text}>
                To understand the problem space, I did a bit of journey mapping to understand areas where design could help users select and filter through projects. From this, I noticed that: 
                <br/>
                <br/>
                1. There are no options for users to select the tags that they are interested in — the tags seem to be auto generated, from the most popular tags that other users are selecting. 
                <br/>
                <br/>
                2. The metrics (Hot, Top, New), are not the most effective metrics to filter through projects.
                <br/>
                <br/>
            </p>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Current UI Systems
                </p>
            </div>
            <div>
                <Image src = {UI}/>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.bTitle}> 
                Journey Mapping
            </h1>
            <p className = {styles.text}>
                From the pain points identified, I came to the conclusion that there could be three new components added to the page to help the process of selecting a project: <strong>Onboarding, Tagging, and Filtering</strong>.
                <br/>
                <br/>
                These new components can help the user identify earlier in the user journey the type of projects that they would like to see. 
            </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Journey Mapping
                </p>
            </div>
            <div>
                <Image src = {Journey}/>
            </div>
        </div>   
        <div className = {styles.page}>
            <div>
            </div>
            <div>
                <h1 className = {styles.pTitle}> 
                    Prototyping
                </h1>
                <h1 className = {styles.bTitle}> 
                Feature 01 : Onboarding
                </h1>
                <p className = {styles.text}>
                    The first new component that the user encounters in the flow is an onboarding process. By selecting the language, complexity, and types of projects that they would like to see early in the user journey, projects can be more immediately recommended to users. 
                </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Demonstration of Onboarding process
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/9N9a0j_oF9g?si=PWaTqAm2dp9QvNIu&amp;loop=1&amp;mute=1&amp;controls=1&amp;" frameBorder = "0" modestBranding = "1" allowFullScreen></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div>
                <h1 className = {styles.bTitle}> 
                Feature 02 : Tags
                </h1>
                <p className = {styles.text}>
                    The second component that the user encounters is the tags that they can select. The tags are recommended to the users based off of their interests from the onboarding process and recent activity, but users can add/delete tags depending on their changing interests. 
                </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Demonstration of Tagging feature
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/0G6DheeGGMY?si=w0sTfQ91GKEl7LaQ&amp;loop=1&amp;mute=1&amp;controls=1&amp;" frameBorder = "0" modestBranding = "1" allowFullScreen></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div>
                <h1 className = {styles.bTitle}> 
                    Feature 03: Filtering
                </h1>
                <p className = {styles.text}>
                    The final component is the filtering component. When users have a clear idea of the type of project they want, they can use the filtering feature to more specifically filter projects with the language, complexity, time, and collaborators searches. 
                </p>
                <br/>
                <br/>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Demonstration of Filter feature
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/97kU4UxSBKo?si=krMIuS887KVHoKDQ?&amp;loop=1&amp;mute=1&amp;controls=1&amp;" frameBorder = "0" modestBranding = "1" allowFullScreen></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
                <h1 className = {styles.pTitle}> Mockups </h1>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Student Community Page Mockup
                </p>
            </div>
            <div>
                <Image src = {Student}/>
            </div>
        </div>   
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Professional Community Page Mockup
                </p>
            </div>
            <div>
                <Image src = {Prof}/>
            </div>
        </div>   
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Final Thoughts
            </h1>
            <p className = {styles.text}>
                From this project, I learned how to utilize user journey diagrams to pinpoint areas where design solutions can improve the user experience. By carefully considering the benefits and drawbacks of different features, I improved on how to weigh and compare which design decisions are better than others. For an interaction such as searching, adding steps early on in the user journey can greatly improve the experience of future user actions. 
            <br/>
            <br/>
    
            <br/>
            <br/>
            </p>
            </div>
        </div>   
        </main>
        <Footer/>
        </div>
    )
}