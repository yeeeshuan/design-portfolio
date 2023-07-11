import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Thumbnail from "../../Images/About/UCRE.png";
import Wall from "../../Images/Projects/UCRE/Wall.png"
import Cont from "../../Images/Projects/UCRE/Cont.png"
import Aff from "../../Images/Projects/UCRE/Aff.png"
import Empathy from "../../Images/Projects/UCRE/Empathy.png"
import Journey from "../../Images/Projects/UCRE/Journey.png"
import Crazy from "../../Images/Projects/UCRE/Crazy.png"
import Head from 'next/head';



export default function UCRE(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | UCRE</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Ad Recomendation System Redesign
            </h1>
            <div className = {styles.intro}>
                <div className = {styles.role}>
                    <p className = {styles.d1}>Role //</p><p className = {styles.d2}> UX Researcher, Designer</p> 
                    <br></br>
                    <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> January—August 2023 </p>
                    <br></br>
                    <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Adobe CC, Figma, UX Research Methods</p>
                </div>
                <div className = {styles.cont}> 
                    <p className = {styles.text}>
                    With current advancements in AI, AI has found itself in the world of ad recommendations on digital platforms. 
                    Working with a team, we looked at how we can use research and evaluation methods to ultimately develop a design solution that helps aid the process of reporting malicious, biased ads. 
                    </p>
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
                    Social media platforms have been using AI algorithms to personalize the content shown for each individual user. 
                    Although tailored recommendations and advertisements may be helpful, they have also resulted in instances of algorithmic bias. 
                    Our project looks at solutions to encourage users to take action against biased ads.                  
                    </p>
                </div>
            </div>

            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Background Research  
                </h1>
                    <p className = {styles.text}>
                    Our team first started by Walking the Wall. After we did some research with some of the current issues with AI used in social media platforms, we were able to determine that: 
                    <br/>
                    <br/>
                    1. Some platforms make the process of reporting ads extremely difficult with the use of misleading UI. 
                    <br/>
                    <br/>
                    2. Much of the bias from current platforms correspond to current societal biases—much of the bias from AI-algorithms stem demonstrate gender biases and socioeconomic biases.                  
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                <p className = {styles.d}> 
                Walking the Wall
                </p>
                </div>
                <Image src = {Wall} alt = "Walking the Wall"/>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Interviews and Surveys
                </h1>
                    <p className = {styles.text}>
                    After our research, the team went out to conduct contextual interviews and surveys. 
                    We asked college students about how they approached biased ads on digital platforms, and their general thoughts around what they thought about ads. 
                    We were able to gather insights about design decisions and needs that helped make the process of reporting ads more intuitive. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                <p className = {styles.d}> 
                Contextual Interview 
                </p>
                </div>
                <Image src = {Cont} alt = "Contextual Interview"/>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                    <p className = {styles.text}>
                    With the help of Affinity Diagramming, we were able to make many more specific insights about the user&rsquo;s emotions, 
                    interpretations, actions, and thoughts about design decisions when it came to reporting ads. Affinity Diagramming was where the team was able to get a better sense of the issues with the process of reporting ads, 
                    and some of the solutions we could take to combat them. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                <p className = {styles.d}> 
                Affinity Diagramming
                </p>
                </div>
                <Image src = {Aff} alt = "Contextual Interview"/>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                    <p className = {styles.text}>
                    Something that the team wanted to dig a little deeper into were the emotions during the process of reporting ads, since it was one of the things that we learned the most about during our research. 
                    <br/>
                    <br/>
                    By creating an Empathy Map and Journey Map, we understood some of the frustrations that users may face when they are reporting ads: 
                    <br/>
                    <br/>
                    1. They are worried about their privacy being invaded and being used for malicious purposes. 
                    <br/>
                    <br/>
                    2. Users are generally not motivated to report ads—most of users believe that the process of reporting ads sidetracks them from their original goals on the platform. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                <p className = {styles.d}> 
                Empathy Map
                </p>
                </div>
                <Image src = {Empathy} alt = "Contextual Interview"/>
            </div>
            <div className = {styles.page}>
                <div>
                <p className = {styles.d}> 
                Journey Map
                </p>
                </div>
                <Image src = {Journey} alt = "Contextual Interview"/>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Ideation
                </h1>
                    <p className = {styles.text}>
                    With a better understanding of the current pain points to the process of reporting ads and research into other digital platforms, the team decided we were ready to begin Storyboarding ideas using Crazy 8s. 
                    Each of us came up with 8 ideas that we could potentially pursue to address these problems. 
                    </p>
                </div>
            </div>
            <div className = {styles.page}>
                <div>
                <p className = {styles.d}> 
                Crazy 8s
                </p>
                </div>
                <Image src = {Crazy} alt = "Contextual Interview"/>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Prototyping
                </h1>
                    <p className = {styles.text}>
                    Our final solution to combat the issues of lack of motivation to reporting ads and privacy concerns was to incorporate the ideas of collective action to our prototype.
                    <br/>
                    <br/>
                    After a certain amount of users report an ad, the ad would be taken down. Thus, users are encouraged to work with one another to “take down” biased ads. With this model, we believed that users would be more motivated than current models that are implemented to take actions against malicious ads. 
                    </p>
                    <br/>
                    <br/>
                    <p>
                    <a className = {styles.links} href = "https://www.figma.com/proto/l5PQA25ZqdPwOzoGBi1ArY/UCRE-Prototype?page-id=0%3A1&type=design&node-id=2-2&viewport=76%2C514%2C0.24&scaling=scale-down&starting-point-node-id=2%3A2" rel="noopener noreferrer" target="_blank"> Link to Prototype </a> 
                    </p>
                </div>
            </div>
            <div className={styles.space}></div>
            <div className = {styles.page}>
                <div>
                <p className = {styles.d}> 
                LoFi Prototype
                </p>
                </div>
                <iframe width="100%" height="800" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fl5PQA25ZqdPwOzoGBi1ArY%2FUCRE-Prototype%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D156-2%26viewport%3D270%252C477%252C0.11%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A2%26hide-ui=1" frameBorder = "0" allowFullScreen></iframe>
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                    <p className = {styles.text}>
                    After some user testing, we realized that interviewees were more motivated to report ads with the new model. 
                    <br/>
                    <br/>
                    However, there were still concerns with how complicated the process of reporting the ads were—interviewees believed that the process of having to choose a reason why the ad was biased was extremely time consuming. 
                    <br/>
                    <br/>
                    Thus, in our final model, we decided to attempt to improve our prototype to be able to be navigated with as little reading an clicking as possible. 
                    </p>
                    <br/>
                    <br/>
                    <p>
                    <a className = {styles.links} href = "https://www.figma.com/proto/Tq25vEtwok2YFmao2izq3l/UCRE-FINAL-POSTER?page-id=0%3A1&type=design&node-id=20-2&viewport=443%2C152%2C0.14&scaling=contain&starting-point-node-id=20%3A2" rel="noopener noreferrer" target="_blank"> Link to Final Poster </a> 
                    </p>
                </div>
            </div>
            <div className={styles.space}></div>
                <iframe width="100%" height="800" 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTq25vEtwok2YFmao2izq3l%2FUCRE-FINAL-POSTER%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D20-2%26viewport%3D443%252C152%252C0.14%26scaling%3Dcontain%26starting-point-node-id%3D20%253A2%26hide-ui=1" frameBorder = "0" allowFullScreen></iframe>
            <div className = {styles.page}>
                <div>
                </div>
                <div>
                <h1 className = {styles.pTitle}> 
                    Project Reflection
                </h1>
                    <p className = {styles.text}>
                    This project allowed me to gain a great amount of understanding to a variety of different research methods and evaluation methods that can be implemented to tackle large-scale problems, such as the use of AI with ad recommendations. 
                    <br/>
                    <br/>
                    Working with a team, we were able to understand many of the different design considerations and ethical considerations when working with AI. We also learned how to design for a scenario when the user is angry and upset—after all, the last thing we would want to do is to anger the user even more. 
                    <br/>
                    <br/>
                    And most importantly, I was able to understand many of the daunting issues with the powerful, yet mysterious advancements with AI. 
                    </p>
                </div>
            </div>
            </main>
            <Footer/>
        </div>
    )
}