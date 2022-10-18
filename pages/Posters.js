import Link from 'next/link';
import styled from 'styled-components'; 
import styles from "../styles/Projects.module.css"; 
import Image from "next/image";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Poster from '../Images/Projects/Posters/PosterMockup.png'; 
import Spread from '../Images/Projects/Posters/SpreadMockup.png'

const Graphics = () => {

    return(
        <div>
        <div className = {styles.gallery}>
            <Link href = "https://medium.com/@yixuanhu/project-3-time-and-motion-3b94c3d864d5">
            <span className = {styles.imageWrap}>
            <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
            <iframe width = "100%" height = "390px"src="https://www.youtube.com/embed/6rxboMyFwDU"
                 frameBorder = "0" modestbranding = "1"></iframe>
                <h1 className = {styles.title}> Typography Animation </h1>
                <p className = {styles.words}> Animation </p>
            </div>
            </span>
            </Link>
            <Link href = "https://medium.com/@yixuanhu/project-1-hierarchy-9d65d2876137">
            <span className = {styles.imageWrap}>
            <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
            <Image className = "P1" src = {Poster}  alt = "hierarchy"/> 
                <h1 className = {styles.title}> Hierarchy Poster</h1>
                <p className = {styles.words}> Visual Hierarchy</p>
            </div>
            </span>
            </Link>
        </div>
        <div className = {styles.gallery}>
        <Link href = "https://medium.com/@yixuanhu/project-2-typesetting-45f2577afba6">
            <span className = {styles.imageWrap}>
            <div className="item-container" style = {{borderRadius: '10px', overflow: 'hidden'}}>
            <Image className = "P1" src = {Spread}  alt = "type"/> 
                <h1 className = {styles.title}> Typography Spread</h1>
                <p className = {styles.words}> Typesetting </p>
            </div>
            </span>
            </Link>
        </div>
        </div>
        
    )
}

export default function Math2Shine(){
    return(
        <div>
            <Navbar/>
            <div className = {styles.intro}>
            <div>
            <h1 className = {styles.mTitle}> 
            Graphic Studies 
            </h1>
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> August 2022 - October 2022 </p>
            <br></br>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Illustrator, Photoshop, AfterEffects</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
            Studies in visual hierarchy, typesetting, and animation. Projects are done to experiment and understand the concepts to Communications Design; created 
            a poster, typographic spread, and an animation exploring the history, characteristics, and purposes of a font. 

            </p>
            </div>
            </div>
        <br/>
        <br/>

        <Graphics/>
        <Footer/>

        </div>

    )
}