import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Thumbnail from "../../Images/About/Gmail.png";
import Mock from "../../Images/Projects/Gmail/Mock.png"; 
import Colors from "../../Images/Projects/Gmail/Colors.png"
import UI from "../../Images/Projects/Gmail/UI.png"
import Affinity from "../../Images/Projects/Gmail/Affinity.png";
import Comp from "../../Images/Projects/Gmail/Components.png";
import Figma from "../../Images/Projects/Gmail/Figma.png";
import Journey from "../../Images/Projects/Gmail/Journey.png"
import FJourney from "../../Images/Projects/Gmail/FilterJourney.png"
import LJourney from "../../Images/Projects/Gmail/LabelJourney.png"
import BA from "../../Images/Projects/Gmail/BA.png"; 
import Code from "../../Images/Projects/Gmail/Code.png"
import Folder from "../../Images/Projects/Gmail/Folder.png"
import Video from '../../components/video';

export default function Gmail(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | Gmail Redesign</title>
            </Head>
            <div className = {styles.invisible}>
                <Image src = {Thumbnail} alt = "preload"/>
                <Image src = {Colors} alt = "preload"/>
                <Image src = {Affinity} alt = "preload"/>
                <Image src = {Comp} alt = "preload"/>
                <Image src = {Figma} alt = "preload"/>
                <Image src = {Journey} alt = "preload"/>
                <Image src = {FJourney} alt = "preload"/>
                <Image src = {LJourney} alt = "preload"/>
                <Image src = {Code} alt = "preload"/>
            </div>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Gmail Filtering System Redesign
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
                <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Product Designer, Developer </p> 
                <br></br>
                <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> September 2023 </p>
                <br></br>
                <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Figma, Next.js</p>
                </div>
            <div className = {styles.cont}> 
                <p className = {styles.text}>
                    This project is a redesign of the Gmail filtering system. By incorporating folders into Gmail, this project looks at how to optimize user flow accessing important mail by grouping emails that are related using folders and subfolders. 
                    <br/>
                    <br/>
                </p>
                <p>
                    <a className = {styles.links} href = "https://gmail-redesign.vercel.app" rel="noopener noreferrer" target="_blank"> Live Website </a> 
                    <a className = {styles.links} href = "https://github.com/yeeeshuan/gmail-redesign" rel="noopener noreferrer" target="_blank"> Github </a> 
                    <br/>
                </p>
            </div>
         </div>
        <div>
            <Image src={Thumbnail} alt = "cover image"/>
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
                Gmail has built-in features that allow for more advanced organization of emails—users can create labels that group emails together, or create filters that filter through emails—that are not widely implemented by users. Most of the time, users utilize the search bar or scroll through their inbox to find their mail. In this project, I look at how to bring the two functionalities together, optimizing the user flow to locate important emails. 
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
                To understand the pain points of the current Gmail labeling and filtering system, I conducted interviews with people around me (college students who understand technology). After affinity diagramming some of their concerns with the current system, I was able to conclude that : 
                <br/>
                <br/>
                1. The current label and filter systems are hard to locate for novice Gmail users. Most interviewees did not use the features often. 
                <br/>
                <br/>
                2. There are Gmail designs that users enjoy to use: Starring Emails, Select Button. 
                <br/>
                <br/>
                This is good, because all the functionalities are there. However, there could be a better user flow to access the functionalities. 
            </p>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Understanding Current Label and Filter Systems
                </p>
            </div>
            <div>
                <Image src = {FJourney}/>
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
                I pinpointed that users feel the most frustrated when they have to select many options to customize and locate their emails. As a result, when users are selecting options to create folders, it is especially important for the menu to be easy and intuitive to understand. 
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
            <p className = {styles.text}>
                I wanted to incorporate a new folder feature that integrated well with current designs in Gmail that users have become accustomed to. I first started with lo-fi prototypes, getting a look and feel for the different concepts. 
            </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
            </div>
            <div>
                <h1 className = {styles.bTitle}> 
                Iteration 01 : Existing Features 
                </h1>
                <p className = {styles.text}>
                For the first iteration, the prototype explores how to combine designs of existing features from Gmail with the new designs of a folder system.
                </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Demonstration of Iteration 01
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/d1AGeNxfc24?si=lL5l7T-hBtnZerR7&amp;loop=1&amp;mute=1&amp;controls=1&amp;" frameBorder = "0" modestBranding = "1" allowFullScreen></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div>
                <h1 className = {styles.bTitle}> 
                Iteration 02 : New Features
                </h1>
                <p className = {styles.text}>
                In the second iteration, I tested a more compact version of the first iteration—rather than having the features to choose folder color be in a seperate place, I combined all selections in one window. 
                </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Demonstration of Iteration 02
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/Z4PzIMvI8W4?si=HPPTcSIU6VZVrztWh&amp;loop=1&amp;mute=1&amp;controls=1&amp;" frameBorder = "0" modestBranding = "1" allowFullScreen></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div>
                <h1 className = {styles.pTitle}> 
                    Final Solution
                </h1>

                <p className = {styles.text}>
                From past iterations, I noticed the need to simplify the process to creating the filter. I expanded the Folder Creation Popup, limiting the process to two main interactions: Typing and Selecting.  
                </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Folder Creation Components
                </p>
            </div>
            <div>
                <Image src = {Folder}/>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Typing
                </p>
            </div>
            <div>
            <Video
                thumbnail =  "./../../Gmail_Type.mp4"
                />
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Select
                </p>
            </div>
            <div>
            <Video
                thumbnail =  "./../../Gmail_Color.mov"
                />
            </div>
        </div>

        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Dragging Interaction
                </p>
            </div>
            <div>
                <Video
                    thumbnail =  "./../../Gmail_Drag.mp4"
                    />
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                   Dashboard Mockup
                </p>
            </div>
            <div>
                <Image src = {Mock}/>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Development
            </h1>
            <br/>
            <p>
                <a className = {styles.links} href = "https://gmail-redesign.vercel.app" rel="noopener noreferrer" target="_blank"> Live Website </a> 
                <a className = {styles.links} href = "https://github.com/yeeeshuan/gmail-redesign" rel="noopener noreferrer" target="_blank"> Github </a> 
                <br/>
            </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                   Next.js Development
                </p>
            </div>
            <div>
                <Image src = {Code}/>
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
            From this project, I learned how to design for recognition, and create design solutions that users are familiar with. 
            This idea was able to aid my design decisions, especially because I was introducing a new feature that might come with a learning curve. 
            <br/>
            <br/>
            Thoughout this process of testing and iterating for this project, I also thought it was interesting that I was able to understand the reasoning behind the UI that exists for current systems that deal with storing and sorting through large amounts of information. 
            <br/>
            <br/>
            </p>
            </div>
        </div>   
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                   Before and After
                </p>
            </div>
            <div>
                <Image src = {BA}/>
            </div>
        </div> 
        </main>
        <Footer/>
        </div>
    )
}