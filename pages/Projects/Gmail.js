import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Thumbnail from "../../Images/About/Gmail.png";
import Affinity from "../../Images/Projects/Gmail/Affinity.png";
import Current from "../../Images/Projects/Gmail/Current.png";
import Comp from "../../Images/Projects/Gmail/Components.png";
import Figma from "../../Images/Projects/Gmail/Figma.png";
import Journey from "../../Images/Projects/Gmail/Journey.png"

export default function Gmail(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | Gmail Redesign</title>
            </Head>
            <div className = {styles.invisible}>
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
                <br/>
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
                    Affinity Diagramming and understanding Current Systems
                </p>
            </div>
            <div className={styles.image_2}>
                <Image src = {Affinity}/>
                <Image src = {Current}/>
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
                From the pain points identified by Affinity Mapping, I created a Journey Map to see how I could design the folder feature to help aid the user throughout the process of locating emails. 
                <br/>
                <br/>
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
                From the Affinity Diagramming, I wanted to incorporate a new folder feature that integrated well with current designs in Gmail that users have become accustomed to.
            </p>
            </div>
        </div>   
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Components
                </p>
            </div>
            <div>
                <Image src = {Comp}/>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                   Figma Frames
                </p>
            </div>
            <div>
                <Image src = {Figma}/>
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
                For the first iteration, the prototype explores how to combine designs of existing features from Gmail with the new designs of a folder system. The button that sorted through read/unread, starred/unstarred emails, and the ability to color labels were integrated as a part of my design. 
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
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/d1AGeNxfc24?si=lL5l7T-hBtnZerR7&amp;loop=1&amp;mute=1&amp;controls=0&amp;" frameBorder = "0" modestBranding = "1"></iframe>
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
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/Z4PzIMvI8W4?si=HPPTcSIU6VZVrztWh&amp;loop=1&amp;mute=1&amp;controls=0&amp;" frameBorder = "0" modestBranding = "1"></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div>
                <h1 className = {styles.pTitle}> 
                    Final Design Solution 
                </h1>
                <h1 className = {styles.bTitle}> 
                    Iteration 03 : Existing Features from other applications
                </h1>
                <p className = {styles.text}>
                After testing the first and second iteration prototypes, the prototypes were not well-designed for cases of large amounts of folders. In the third iteration, I looked at designs of pre-existing applications such as Folders in Google Drive, Finder on Mac, and Folders on Windows to see how I could create a folder system that can handle huge amounts of data. 
                <br/>
                <br/>
                I also further explored what types of options should exist for filters when users are creating a new folder. 
                </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Demonstration of Iteration 03
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/d_WXXarDhpA?si=0Pkgc7xcA46czE9S&amp;loop=1&amp;mute=1&amp;controls=0&amp;" frameBorder = "0" modestBranding = "1"></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Development
            </h1>
            <p className = {styles.text}>
                Work in progress. Currently working on a fully-functioning prototype using Next.js from Figma designs. Website is deployed using Vercel. 
            </p>
            <br/>
            <br/>
            <p>
                <a className = {styles.links} href = "https://gmail-redesign.vercel.app" rel="noopener noreferrer" target="_blank"> Live Website </a> 
                <a className = {styles.links} href = "https://github.com/yeeeshuan/gmail-redesign" rel="noopener noreferrer" target="_blank"> Github </a> 
                <br/>
            </p>
            </div>
        </div>  
        <div className = {styles.page}>
                <div></div>
                <h1 className = {styles.bTitle}>
                    More info soon 
                </h1>
            </div>   
        </main>
        <Footer/>
        </div>
    )
}