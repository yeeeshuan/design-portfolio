import styles from "../../styles/Projects.module.css";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Video from '../../components/video';

import Mural from '../../Images/Projects/IBM/mural.webp'

export default function IBM(){
    return(
        <div>
            <Head>
                <title>Ethan Huang Design | IBM</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
                <div className={styles.hero}>
                    <Video thumbnail="./../../Project_Update.mp4"/>
                </div>
                <div className={styles.intro}>
                    <div className={styles.introTitle}>
                        <h1 className={styles.mTitle}>IBM Agentic Tooling</h1>
                    </div>
                    <div className={styles.introBody}>
                        <p className={styles.text}>
                            As an AI Solutions Engineer at IBM, I build client-facing solutions and architect internal tooling to optimize our team&rsquo;s operational workflows. My key contributions include:
                            <br/><br/>
                            • Engineeering end-to-end workflows bridging Mural, Bob, and Figma by developing a custom Mural MCP server alongside IBM&rsquo;s internal Figma MCP.
                            <br/>
                            • Automating cross-functional business tracking and client engagement pipelines within Monday.com.
                        </p>
                        <div className={styles.introMeta}>
                            <div className={styles.metaField}>
                                <span className={styles.metaLabel}>Role</span>
                                <span className={styles.metaValue}>AI Solutions Engineer</span>
                            </div>
                            <div className={styles.metaField}>
                                <span className={styles.metaLabel}>Tools</span>
                                <span className={styles.metaValue}>Node.js · watsonX.ai · IBM Bob · Railway</span>
                            </div>
                            <div className={styles.metaField}>
                                <span className={styles.metaLabel}>Duration</span>
                                <span className={styles.metaValue}>August 2025 – Present</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.page}>
                    <div/>
                    <div>
                        <h1 className={styles.bTitle}>
                            01: Mural to Figma Workflow
                        </h1>
                        <p className={styles.text}>
                            I built an internal Agentic AI tool layer for IBM Bob, IBM&rsquo;s generative task assistant, which integrates directly with Mural, a white boarding tool we use with clients, via the Model Context Protocol.
                            <br/><br/>
                            A problem I noticed is that during intense client workshops, critical requirements often get lost in translation with the team. I engineered this to act as a bridge, enabling Bob to dynamically read, synthesize, and structurally execute changes directly into Mural.
                            <br/><br/>
                            Here&rsquo;s how it works:
                        </p>
                    </div>
                </div>
                <div className={styles.page}>
                    <div/>
                    <pre className={styles.diagram}><code>{`
+---------------------------+
| Client Workshop (Mural)   |
+---------------------------+
         |
         | unstructured sticky notes, research, & requirements
         v
+---------------------------+
| Custom Mural MCP Server   |
+---------------------------+
         |
         | exposes canvas objects & spatial context via MCP
         v
+---------------------------+
| IBM Bob                   |
| AI Task Assistant         |
+---------------------------+
         |
         | synthesizes notes & generates structured UI/UX specs
         v
+---------------------------+
| IBM Internal Figma MCP    |
+---------------------------+
         |
         | executes layout mutations & generates templates
         v
+---------------------------+
| Figma Wireframe Templates |
+---------------------------+
`}</code></pre>
                </div>
                <div className={styles.page}>
                    <div>
                        <p className={styles.d}>Sample Mural board</p>
                    </div>
                    <div>
                        <img src={Mural.src} alt="Sample Mural board" style={{width:'100%', height:'auto'}}/>
                    </div>
                </div>
                <div className={styles.page}>
                    <div>
                        <p className={styles.d}>Using Custom Mural MCP to synthesize Mural board</p>
                    </div>
                    <div>
                        <Video thumbnail="./../../Mural_MCP.mp4"/>
                    </div>
                </div>
                <div className={styles.page}>
                    <div/>
                    <div>
                        <p className={styles.text}>
                            After synthesizing project notes in Mural and routing them to IBM Bob, team members can leverage the internal Figma MCP to automatically generate structured design templates.
                        </p>
                    </div>
                </div>
                <div className={styles.page}>
                    <div>
                        <p className={styles.d}>Figma MCP to generate designs</p>
                    </div>
                    <div>
                        <Video thumbnail="./../../Figma_MCP.mp4"/>
                    </div>
                </div>
                <div className={styles.page}>
                    <div/>
                    <div>
                        <h1 className={styles.bTitle}>
                            02: Monday.com Workflow
                        </h1>
                        <p className={styles.text}>
                            Engineered an automated Monday.com workflow that dynamically enriches board data from unstructured user inputs. When a project name or status update is modified, a webhook triggers a custom NodeJS server hosted on Railway, which processes the payload via the OpenAI API and populates the remaining board fields automatically.<br/><br/>
                            Here&rsquo;s how it works:
                        </p>
                    </div>
                </div>
                <div className={styles.page}>
                    <div/>
                    <pre className={styles.diagram}><code>{`
+------------------------------+
| monday.com Board             |
| trigger: item updated        |
+------------------------------+
         |
         | signs POST with JWT (MONDAY_SIGNING_SECRET)
         | sends over HTTPS
         v
+------------------------------+
| Custom Node.js Server        |
| Railway — webhook handler    |
+------------------------------+
         |
         | verifies JWT, extracts note text
         v
+------------------------------+
| watsonx.ai                   |
| IBM Cloud infrastructure     |
+------------------------------+
         |
         | parses & enriches note, returns structured fields
         v
+------------------------------+
| monday.com GraphQL API       |
| over HTTPS                   |
+------------------------------+
         |
         | updates board columns
         v
+------------------------------+
| Board Updated                |
+------------------------------+
`}</code></pre>
                </div>
                <div className={styles.page}>
                    <div>
                        <p className={styles.d}>Trigger 01: Updating the opportunity name</p>
                    </div>
                    <div>
                        <Video thumbnail="./../../Project_Update.mp4"/>
                    </div>
                </div>
                <div className={styles.page}>
                    <div>
                        <p className={styles.d}>Trigger 02: Updating the opportunity updates</p>
                    </div>
                    <div>
                        <Video thumbnail="./../../Project_Name.mov"/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}