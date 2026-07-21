import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Video from '../../components/video';

import Mural from '../../Images/Projects/IBM/mural.webp'

export default function Zenda(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | IBM</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <div className = {styles.intro}>
                <div className = {styles.cont}> 
                <h1 className = {styles.mTitle}> 
                        IBM Agentic Tooling
                    </h1>
                    <br/>
                    <p className={styles.text}>
                        As an AI Solutions Engineer at IBM, I build client-facing solutions and architect internal tooling to optimize our team&rsquo;s operational workflows. My key contributions include: 
                        <br /><br />
                        • Engineeering end-to-end workflows bridging Mural, Bob, and Figma by developing a custom Mural MCP server alongside IBM&rsquo;s internal Figma MCP.
                        <br />
                        • Automating cross-functional business tracking and client engagement pipelines within Monday.com.
                    </p>
                    <br/>
                    <br/>
                    <div>
                        <div className={styles.desCont}>
                            <div className={styles.des}>
                                <p className = {styles.d1}>Role: </p>
                                <br/>
                                <p className = {styles.d2}> AI Solutions Engineer </p> 
                            </div>
                            <div className={styles.des}>
                                <p className = {styles.d1}>Tools: </p>
                                <br/>
                                <p className = {styles.d2}> 
                                    Node.js
                                    <br/>
                                    watsonX.ai
                                    <br/>
                                    IBM Bob
                                    <br/>
                                    Railway
                                </p>
                            </div>
                            <div className={styles.des}>
                                <p className = {styles.d1}>Duration: </p>
                                <br/>
                                <p className = {styles.d2}> August 2025 - Present </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div>
            <Video
                thumbnail =  "./../../Project_Update.mp4"
            />
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.bTitle}> 
                01: Mural to Figma Workflow
            </h1>
            <p className = {styles.text}>
                I built is an internal Agentic AI tool layer for IBM Bob, IBM&rsquo;s generative task assistant, which integrates directly with Mural, a white boarding tool we use with clients, via the Model Context Protocol.
                <br/><br/>
                A problem I noticed is that during intense client workshops, critical requirements often get lost in translation with the team. I engineered this to act as a bridge, enabling Bob to dynamically read, synthesize, and structurally execute changes directly into Mural. 
                <br/><br/>
                Here&rsquo;s how it works: 
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div className={styles.diagram}>
                <pre>
                <code>
                Client Workshop (Mural)<br/><br/>
                │   unstructured sticky notes, research, & requirements<br/>
                ▼<br/><br/>
                Custom Mural MCP Server<br/><br/>
                │   exposes canvas objects & spatial context via Model Context Protocol<br/>
                ▼<br/><br/>
                IBM Bob (Generative Task Assistant)<br/><br/>
                │   synthesizes raw notes & generates structured UI/UX specs<br/>
                ▼<br/><br/>
                IBM Internal Figma MCP<br/><br/>
                │   executes layout mutations & generates component templates<br/>
                ▼<br/><br/>
                Figma Wireframe Templates<br/>
                </code>
                </pre>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Sample Mural board
                </p>
            </div>
            <div>
                <Image src={Mural}/>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Using Custom Mural MCP to synthesize Mural board
                </p>
            </div>
            <div>
                <div>
                    <Video
                        thumbnail =  "./../../Mural_MCP.mp4"
                    />
                </div>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>   
            <div>
                <p className = {styles.text}>
                    After synthesizing project notes in Mural and routing them to IBM Bob, team members can leverage the internal Figma MCP to automatically generate structured design templates.
                </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Figma MCP to generate designs
                </p>
            </div>
            <div>
                <div>
                    <Video
                        thumbnail =  "./../../Figma_MCP.mp4"
                    />
                </div>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.bTitle}> 
                02: Monday.com Workflow
            </h1>
            <p className={styles.text}>
                Engineered an automated Monday.com workflow that dynamically enriches board data from unstructured user inputs. When a project name or status update is modified, a webhook triggers a custom NodeJS server hosted on Railway, which processes the payload via the OpenAI API and populates the remaining board fields automatically.<br/><br/>
                Here&rsquo;s how it works: 
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>
            <div className={styles.diagram}>
                <pre>
                <code>
                    monday.com (Board is updated)<br/><br/>
                    │  signs the POST with your MONDAY_SIGNING_SECRET (JWT)<br/>
                    │  sends over HTTPS (TLS encrypted)<br/>
                    ▼<br/><br/>
                    your server (Railway)<br/><br/>
                    │  verifies JWT – rejects anything not from monday.com<br/>
                    │  extracts note text<br/>
                    ▼<br/><br/>
                    watsonx.ai (IBM Cloud – stays within IBM infrastructure)<br/><br/>
                    │  parses the note<br/>
                    ▼<br/><br/>
                    monday.com GraphQL API (over HTTPS)<br/><br/>
                    │  updates the columns<br/>
                    ▼<br/><br/>
                    board updated <br/>
                </code>
                </pre>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Trigger 01: Updating the opportunity name
                </p>
            </div>
            <div>
                <div>
                    <Video
                        thumbnail =  "./../../Project_Update.mp4"
                    />
                </div>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Trigger 02: Updating the opportunity updates
                </p>
            </div>
            <div>
                <div>
                    <Video
                        thumbnail =  "./../../Project_Name.mov"
                    />
                </div>
            </div>
        </div>
        </main>
        <Footer/>
        </div>
    )
}