import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Mag from "../../Images/Projects/Landesberg/Mag.png";
import B1 from "../../Images/Projects/Landesberg/Mag/Back_1.png";
import B2 from "../../Images/Projects/Landesberg/Mag/Back_2.png";
import F1 from "../../Images/Projects/Landesberg/Mag/Feature_1.png";
import F2 from "../../Images/Projects/Landesberg/Mag/Feature_2.png";
import F3 from "../../Images/Projects/Landesberg/Mag/Feature_3.png";
import F4 from "../../Images/Projects/Landesberg/Mag/Feature_4.png";
import F5 from "../../Images/Projects/Landesberg/Mag/Feature_5.png";
import T1 from "../../Images/Projects/Landesberg/Mag/Titles_1.png";
import T2 from "../../Images/Projects/Landesberg/Mag/Titles_2.png";
import T3 from "../../Images/Projects/Landesberg/Mag/Titles_3.png";
import CN1 from "../../Images/Projects/Landesberg/Mag/CN_1.png";
import CN2 from "../../Images/Projects/Landesberg/Mag/CN_2.png";
import CN3 from "../../Images/Projects/Landesberg/Mag/CN_3.png";
import TOC from "../../Images/Projects/Landesberg/Mag/TOC.png";


export default function Magazine(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | LD Magazines</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Magazine Layouts
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Graphic Designer</p> 
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> June 2023 </p>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Adobe InDesign, Adobe Illustrator, Adobe Photoshop</p>
            <br></br>
            <p className = {styles.d1}>Collaborators //</p><p className = {styles.d2}> Michael Artman</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            I helped redesign the design languages of magazines, thinking about graphics, typography, and layout styles. I helped work on alumni magazines for Adover, the Lawrenceville School, and Rice University Engineering. 
            </p>
         </div>
         </div>
        <div style = {{
                display: "flex", 
                justifyContent: "center", 
            
            }}>
                <Image src = {Mag} width = {1080} height ={600} alt = "cover image"/>
        </div>
            <div className = {styles.page}>
                <div>
                </div>     
                <div>
                <h1 className = {styles.pTitle}> 
                    Illustrations
                </h1>
                <p className = {styles.text}>
               Illustrations created for the Andover magazine feature articles.
                </p>
                </div>
             </div>
             <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                    Backdrop illustrations for Andover  
                    </p>
                </div>
                    <div className = {styles.image_2}>
                    <Image src = {B1} alt = "illustration 1"/>
                    <Image src = {B2} alt = "illustration 1"/>
                    </div> 
            </div>
            <div className = {styles.page}>
                <div>
                </div>     
                <div>
                <h1 className = {styles.pTitle}> 
                    Title Pages
                </h1>
                <p className = {styles.text}>
                   I created different iterations of what the title pages of The Lawrentian and Adover could look like. I thought about how the layout could change between different issues. 
                </p>
                </div>
             </div>
             <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                    Adover Title pages
                    </p>
                </div>
                    <div>
                    <Image src = {T3} alt = "illustration 1"/>    
                    </div> 
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                    The Lawrentian Title page first iteration
                    </p>
                </div>
                    <div>
                    <Image src = {T1} alt = "illustration 1"/>    
                    </div> 
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                    The Lawrentian Title page second iteration
                    </p>
                </div>
                    <div>
                    <Image src = {T2} alt = "illustration 1"/>    
                    </div> 
            </div>
            <div className = {styles.page}>
                <div>
                </div>     
                <div>
                <h1 className = {styles.pTitle}> 
                    Table of Contents
                </h1>
                <p className = {styles.text}>
                   I designed a Table of Contents, incorporating design styles and elements from the rest of the magazine 
                </p>
                </div>
             </div>
             <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                    Table of Contents for Rice Engineering
                    </p>
                </div>
                    <div>
                    <Image src = {TOC} alt = "illustration 1"/>    
                    </div> 
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                
                <div>
                <h1 className = {styles.pTitle}> 
                    Feature Pages
                </h1>
                <p className = {styles.text}>
                    I designed and laid out feature pages of the magazines. I thought about how I could break exisiting design styles and incorporate new elements so that the Features can stand out. 
                </p>
                </div>
             </div>
             <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                    Feature article for Andover
                    </p>
                </div>
                    <div>
                        <Image src = {F5} alt = "illustration 2"/>  
                    </div> 
            </div>
             <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                    Short feature article designed for The Lawrentian
                    </p>
                </div>
                    <div>
                        <Image src = {F1} alt = "illustration 1"/>
                    </div>
            </div>
            <div className = {styles.page}>
                <div>
                    <p className = {styles.d}> 
                    Main feature article designed for The Lawrentian
                    </p>
                </div>
                    <div>
                        <Image src = {F2} alt = "illustration 2"/>  
                    </div> 
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                    <div className = {styles.image_2}>
                        <Image src = {F3} alt = "illustration 2"/>  
                        <Image src = {F4} alt = "illustration 2"/>  
                    </div> 
            </div>
            <div className = {styles.page}>
                <div>
                </div>
                
                <div>
                <h1 className = {styles.pTitle}> 
                    Class Notes
                </h1>
                <p className = {styles.text}>
                    I designed the layout of the Class Notes section for The Lawrentian, thinking about how the type and photos would look when they spanned over 50 pages. 
                </p>
                </div>
             </div>
             <div className = {styles.page}>
                <div>
                <p className = {styles.d}> 
                    Cover page for Class Notes Section on The Lawrentian
                    </p>
                </div>
                    <div>
                        <Image src = {CN1} alt = "illustration 2"/>  
                    </div> 
            </div>
            <div className = {styles.page}>
                <div>
                <p className = {styles.d}> 
                    Further pages for the Class Notes Section
                    </p>
                </div>
                    <div className = {styles.image_2}>
                        <Image src = {CN2} alt = "illustration 2"/>  
                        <Image src = {CN3} alt = "illustration 2"/>  
                    </div> 
            </div>
            </main>
            <Footer/>
        </div>
    )
}