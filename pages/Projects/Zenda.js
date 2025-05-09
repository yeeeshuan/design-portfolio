import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Thumbnail from '../../Images/About/Zenda.png';
import Video from '../../components/video';

export default function Zenda(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | Zenda</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Zenda Platform
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
                <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Product Designer, Frontend Developer </p> 
                <br></br>
                <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> May 2024 - May 2025 </p>
                </div>
            <div className = {styles.cont}> 
                <p className = {styles.text}>
                    In the summer of 2024, I was hired by Zenda Consulting as a Design Engineer. I worked on the product team, designing and developing a new software system/product.
                </p>
                <br/>
                <br/>
                <p className = {styles.text}>
                During my time at Zenda, I worked on:
                <br/>
                    - Designing and implementing generative AI features into the product
                <br/>
                    - Conducting in-home product research for prompt engineering and feature testing
                <br/>
                    - Scaling the product to accommodate increased software complexity
                </p>
                <br/>
                <br/>
                <br/>
                <br/>
                <p className = {styles.text}>
                <a className = {styles.links} href = "https://www.zendaai.com/" rel="noopener noreferrer" target="_blank"> Product Website </a> 
                <br/>
            </p>
            </div>
         </div>
        <div>
            <Image src = {Thumbnail} alt = "cover image"/>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                User Testing Prototypes
            </h1>
            <p className = {styles.text}>
                One of my key responsibilities was developing a series of prototypes to explore how to deliver the most effective context to a large language model (LLM) for actionable and relevant outputs. This involved analyzing user habits when interacting with generative AI and experimenting with different ways of structuring and prompting the context to optimize the tool&rsquo;s performance.
            <br/>
            <br/>
                To evaluate the quality of the generated results, I conducted user testing sessions with consultants—the primary users of the tool—on the services side of the company. I monitored outcomes using Sentry and tracked which prompts and context structures led to the most successful and actionable results.
            </p>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.bTitle}> 
                01: Testing Technologies
            </h1>
            <p className = {styles.text}>
                To start, our goal was to evaluate whether LLMs could generate high-quality, relevant outputs and determine their potential for future refinement. The team initially envisioned a one-shot generation tool, with plans to evolve it into a more advanced system powered by Retrieval-Augmented Generation (RAG).
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Prototype 1: Testing genAI capabilities
                </p>
            </div>
            <div>
                <div>
                    <Video
                        thumbnail =  "./../../Zenda_P1.mov"
                    />
                </div>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.bTitle}> 
                02: Effective Context Detailing
            </h1>
            <p className = {styles.text}>
                As the project progressed, the team focused on identifying which types of context details would make generated results more tailored to individual users. To support this, I implemented input fields that allowed participants to specify contextual information during testing, enabling us to observe how different inputs influenced the quality of the output.
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Prototype 2: Adding more potential context details
                </p>
            </div>
            <div>
                <div>
                    <Video
                        thumbnail =  "./../../Zenda_P2.mov"
                    />
                </div>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.bTitle}> 
                03: Final Testing Prototype
            </h1>
            <p className = {styles.text}>
                I ultimately split the prototype into two key components: one section where participants could choose from preset context details or input their own, and another section that served as the main UI for the prompt box. This structure allowed us to isolate and evaluate how different context configurations impacted the effectiveness of the generated responses.
                <br/>
                <br/>
                All user interactions and generated results were logged into Sentry, enabling the product team to later analyze which combinations of context and prompts led to more effective outputs—and why certain generations performed better than others.
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Prototype 3: Seperating context and prompt box UI for user testing
                </p>
            </div>
            <div>
                <div>
                    <Video
                        thumbnail =  "./../../Zenda_P3.mov"
                    />
                </div>
            </div>
        </div>
        </main>
        <Footer/>
        </div>
    )
}