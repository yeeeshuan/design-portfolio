import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Video from '../../components/video';
import Thumbnail from "../../Images/About/Cookie.jpg";
import Dig from "../../Images/Projects/Cookie/DigCookie.png"
import Journey from "../../Images/Projects/Cookie/Journey.png"
import W2 from "../../Images/Projects/Cookie/Loading.gif"
import C2 from "../../Images/Projects/Cookie/C2.jpg"
import Tech from "../../Images/Projects/Cookie/Tech.png"
import Recipe from "../../Images/Projects/Cookie/Recipe.png"
import Fridge from "../../Images/Projects/Cookie/Fridge.jpg"
import Mock from "../../Images/Projects/Cookie/Mockup.png"
import SL from "../../Images/Projects/Cookie/SpotifyL.png"
import SR from "../../Images/Projects/Cookie/SpotifyR.png"
import GL from "../../Images/Projects/Cookie/GitL.png"
import GR from "../../Images/Projects/Cookie/GitR.png"
import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height,
    }
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 0})

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        
        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    return windowDimensions
}


export default function Cookie(){

    const size = useWindowDimensions();
    let width = size.width; 

    return(
        <div>
            <Head>
            <title>Ethan Huang Design | Cookie Monster Cooking</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Cookie Monster Cooking
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
                <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Product Designer, Developer </p> 
                <br></br>
                <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> March-April 2024 </p>
                <br></br>
                <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Figma, Next.js, OpenAI API, Spotify API, ESP32</p>
                </div>
            <div className = {styles.cont}> 
                <p className = {styles.text}>
                    Imagining how AI can be used to create transparent modes of data collection methods through the lens of cookie recipes. 
                <br/>
                <br/>
                </p>
                {/* <p>
                <a className = {styles.links} href = "https://replit-xi.vercel.app/" rel="noopener noreferrer" target="_blank"> Live Website </a> 
                <a className = {styles.links} href = "https://github.com/yeeeshuan/replit" rel="noopener noreferrer" target="_blank"> Github </a> 
                <br/>
            </p> */}
            </div>
         </div>
        <div style = {{
            display: "flex", 
            justifyContent: "center", 
        
        }}>
                {width > 500 && (
                <iframe className="thumbnail" src="https://www.youtube.com/embed/hj0EIKJDP54?si=7AfijLDJd1VvXC5d&amp;loop=1&amp;mute=1&amp;controls=1&amp;" frameBorder = "0" 
                 width={1080} height={600}></iframe>
                )}
                
                { width <= 500 && (
                <iframe className="thumbnail" src="https://www.youtube.com/embed/hj0EIKJDP54?si=7AfijLDJd1VvXC5d&amp;loop=1&amp;mute=1&amp;controls=1&amp;" frameBorder = "0" 
                width={1080} height={250}></iframe>
                )
                }
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
                Currently, websites employ digital cookies to collect user data for individualized user experiences when browsing. However, by clicking <strong>Accept All Cookies</strong>, users give the website full control over data such as their search history, location, and more. In this project, I look at how I can use AI to redesign invasive data collection methods such as web cookies—to recommend a tasty cookie recipe at the end of the week.
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Web Cookies
                </p>
            </div>
            <div>
                <Image src = {Dig}/>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.bTitle}> 
                Journey Map + Tech Diagram
            </h1>
            <p className = {styles.text}>
                Since digital cookies take from you, I wanted to create a system that gives to you. In this case, cookie recipes. 
                <br/>
                <br/>
                By strategically choosing the types of data users want to feed the cookie monster, at the end of every week, there will be a cookie recipe waiting for them to be baked. 
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
                <p className = {styles.d}> 
                    Tech Diagram
                </p>
            </div>
            <div>
                <Image src={Tech}/>
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
                Onboarding Interface
                </h1>
                <p className = {styles.text}>
                   To start the cookie monster cooking process, users choose the types of data they want to feed to the cookie monster. Each app that the user connects controls a different aspect of the cookie recipe. In this case, I chose to connect Spotify and Github. 
                </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Mockup with other types of data that can be sent
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
                <h1 className = {styles.bTitle}> 
                Spotify
                </h1>
                <p className = {styles.text}>
                    Spotify, which represents my mood for the week, and determines the toppings that go on the cookie. 
                </p>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Uploading Spotify Data
                </p>
            </div>
            <div>
                <Image src = {SL}/>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Spotify Generated Toppings
                </p>
            </div>
            <div>
                <Image src = {SR}/>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Spotify Data
                </p>
            </div>
            <div>
            <Video
                    thumbnail =  "./../../CMC_Spotify.mp4"
                />
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div>
                <h1 className = {styles.bTitle}> 
                Github
                </h1>
                <p className = {styles.text}>
                    Github, which represents how hard I worked in a week and determines the amount of cookies that the recipe can make. 
                </p>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Uploading Github Data
                </p>
            </div>
            <div>
                <Image src = {GL}/>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Github Generated Portion Size
                </p>
            </div>
            <div>
                <Image src = {GR}/>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Github Data
                </p>
            </div>
            <div>
            <Video
                    thumbnail =  "./../../CMC_Git.mp4"
                />
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div>
                <h1 className = {styles.bTitle}> 
                Website Walkthrough
                </h1>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Website Walkthrough
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "600px" src="https://www.youtube.com/embed/OZGX8UEW44U?si=jC8ho9DAN4knY8ut&amp;loop=1&amp;mute=1&amp;controls=1&amp;" frameBorder = "0" 
                modestBranding = "1" allowFullScreen></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div>
                <h1 className = {styles.bTitle}> 
                Cookie Monster Printer
                </h1>
                <p className = {styles.text}>
                    The Cookie Monster Printer prints the receipt that users receive at the end of the week with the cookie recipe on it. It is designed to be placed near your kitchen. 
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
                <Image src = {Thumbnail}/>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Demonstration of Tagging feature
                </p>
            </div>
            <div>
                <Image src = {C2}/>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Cookie Monster Functionalities
                </p>
            </div>
            <div>
                <Video
                    thumbnail =  "./../../CMC.mov"
                />
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div>
                <h1 className = {styles.bTitle}> 
                    Recipes
                </h1>
                <p className = {styles.text}>
                   The recipes at the end of the week serve as a log of: 
                   <br/>
                   <br/>
                   1. The user&rsquo;s activities during the week, such as their mood and amount of work done. 
                   <br/>
                   2. Delicious cookie recipes!
                   <br/>
                    <br/>
                    Users are encouraged to log their reciepts, so that they have a journal of the different types of activities they have done thoughout the weeks, months, and years. 
                </p>
            </div>
        </div>  
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Demonstration of Filter feature
                </p>
            </div>
            <div>
                <Image src={Recipe}/>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Demonstration of Filter feature
                </p>
            </div>
            <div>
                <Image src={Fridge}/>
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
                From this project, I learned how to leverage AI in my designs. By thinking about the affordances of AI and how its generative capabilities allow for individualized experiences, I was able to see AI as a design tool. It was inspiring to think about the capabilities of how AI and humans can work collaboratively to create powerful experiences, such as transparent data collection methods. 
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