import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Concept from "../../Images/Projects/Augmented/Concept.jpeg"
import Journey from "../../Images/Projects/Augmented/Journey_Map.png"
import SingleTech from "../../Images/Projects/Augmented/Single_Tech.png"
import SingleScene from "../../Images/Projects/Augmented/Single_Scenario.png"
import DoubleTech from "../../Images/Projects/Augmented/Double_Tech.png"
import DoubleScene from "../../Images/Projects/Augmented/Double_Scenario.png"
import EggDrawing from "../../Images/Projects/Augmented/Egg_Drawing.jpeg"
import Egg from "../../Images/Projects/Augmented/Egg.jpeg"

export default function Augmented(){
    return(

        <div>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Augmented Body
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
            <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Researcher, Prototyper </p> 
            <br></br>
            <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> September 2023 </p>
            <br></br>
            <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Motive, Unity(C#), Arduino</p>
            </div>
            <div className = {styles.cont}> 
            <p className = {styles.text}>
                This is a space that challenges current paradigms to locate/find objects. 
                Through the process of augmenting sound through volume and duration, I explore how auditory and visual feedback impact our perception and understanding of space.
            </p>
            </div>
            </div>
            <div style = {{
                display: "flex", 
                justifyContent: "center", 
            
            }}>
               <iframe className = "ytplayer" width = {1200} height ={800} src="https://www.youtube.com/embed/giTR6jkj510?&autoplay=1&loop=1&mute=1&controls=0&playlist=giTR6jkj510"
                    frameBorder = "0" modestBranding = "1"></iframe>
            </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Problem Space
            </h1>
            <p className = {styles.text}>
            When attempting to locate an object, many applications rely on sound to help aid the process. During the process, users think about the form of the object, and are guided by sounds to navigate the space. In this project, by augmenting sound through volume and duration, I explore how auditory and visual feedback impact our perception and understanding of space. 
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
                Current systems for sound and vision
            </h1>
            <p className = {styles.text}>
                To begin, I did a journey map of how current applications utilize sound and vision to help users locate objects to better understand how the senses come in to play. 
                Some important points were that: 
                <br/>
                <br/>
                1. User starts the journey with a clear image of the object that they are looking for in their heads. 
                <br/>
                <br/>
                2. User utilizes the direction and volume of sound to help them locate the object. 
                <br/>
                <br/>
                3. User knows when they have found the object once they both see the object and hear the sound emitting from the object. 
            </p>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Journey map of current systems that employ sound and vision to locate objects. 
                </p>
            </div>
            <div>
                <Image src = {Journey} alt = "Journey Mapping"/>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.bTitle}> 
                Spatial Audio
            </h1>
            <p className = {styles.text}>
                Furthermore, to better understand how people associate direction with sounds, I looked in to research done in the Spatial Audio space. 
                Two of my main takeaways were that: 
                <br/>
                <br/>
                1. People are able to differentiate the direction of sounds very accurately (people are able to differentiate between sounds at around a difference of 5 degrees). 
                <br/>
                <br/>
                2. With the addition of visuals, people are best able to best locate the object that the sound is emitting from when the object is directly in front of them.
                <br/>
                <br/>
            </p>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Concept Ideation
            </h1>
            <p className = {styles.text}>
            Utilizing the current user journey to locate objects and also how to utilize sound to manipulate people&rsquo;s understanding of space, I began to think of concepts. 
            I wanted to create an experience that distorts a person&rsquo;s perception of space by changing the current paradigms that exist with regard to sound and distance: 
            <br/>
            <br/>
            1. People are in a room attempting to locate an object. Surrounding them, however, are four of the same objects. 
            <br/>
            <br/>
            2. Sounds are emitting from the objects, but the sounds are designed to alter people&rsquo;s perceptions of distance. 
            When visitors get closer to an object, the sound emitting from the object will become quieter and at longer intervals; however, 
            the sounds from behind them will get louder. 
            <br/>
            <br/>
            3. It is only when they figure out the patterns to the sounds that they can locate the correct object. 
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Initial Sketches
                </p>
            </div>
            <div>
                <Image src = {Concept} alt = "Concept Sketches"/>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <p className = {styles.text}>
                When considering the form of the object to be found, the object needed to have a distinguishable outline that vistors have a clear image of in their head. As a result, I landed on the form of an egg—a form that suggests a round shape with a wide base and a sharper top. 
            </p>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Object ideation and prototyping
                </p>
            </div>
            <div className = {styles.image_2}>
                <Image src = {EggDrawing} alt = "Tech Diag"/>
                <Image src = {Egg} alt = "Tech Diag"/>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Two Person Interaction
            </h1>
            <h1 className = {styles.bTitle}> 
                Tech Diagram
            </h1>
            <p className = {styles.text}>
                Tech diagrams to demonstrate the technology behind the two people interaction. 
            </p>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Tech Diagram for Two People Interaction
                </p>
            </div>
            <div>
                <Image src = {DoubleTech} alt = "Concept Sketches"/>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Scenarios for Two People Interaction
                </p>
            </div>
            <div>
                <Image src = {DoubleScene} alt = "Concept Sketches"/>
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
                Motive to Unity to Arduino
            </h1>
            <p className = {styles.text}>
            The need to track the location of two people in a space made the use of the spatial lab the best option. For an idea so abstract, I wanted to make it as close to the real experience as possible.
            <br/>
            <br/>
            The spatial lab afforded me the use of motion tracking. The idea was that:
            <br/>
            <br/>
            1. I would take the locations of the two visitors using motive
            <br/>
            2. Calculate their distance to the object in unity
            <br/>
            3. From that distance play a corresponding sound at a certain volume from the Arduino
            </p>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    First person controlling volume
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/U4dBEDVAs08?si=t5YOVMj905LqFodJ&amp;loop=1&amp;mute=0&amp;controls=0&amp;" frameBorder = "0" modestBranding = "1"></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Second person controlling duration
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/mZeoMr7SAvg?si=QkHCD0pA3YOr7wP5&amp;loop=1&amp;mute=0&amp;controls=0&amp;" frameBorder = "0" modestBranding = "1"></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    First and second person controlling volume and duration
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/FXo5E6bbsTg?si=jdf53Zf8BuFu1d3M&amp;loop=1&amp;mute=0&amp;controls=0&amp;" frameBorder = "0" modestBranding = "1"></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Final Prototype
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px"src="https://www.youtube.com/embed/-GXbtSQ-sow?si=8zqzgyQzSxQ-71Qu&amp;loop=1&amp;mute=0&amp;controls=0&amp;" frameBorder = "0" modestBranding = "1"></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Single Person Interaction
            </h1>
            <h1 className = {styles.bTitle}> 
                Tech Diagrams
            </h1>
            <p className = {styles.text}>
               Tech diagrams to demonstrate the technology behind the single person interaction. From the tech diagrams, it is clear that the single person interaction is much more complicated than the two people interaction. 
            </p>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Tech Diagram for Single Person Interaction
                </p>
            </div>
            <div>
                <Image src = {SingleTech} alt = "Tech Diag"/>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Scenarios for Single Person Interaction
                </p>
            </div>
            <div>
                <Image src = {SingleScene} alt = "Tech Diag"/>
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
                Motive to Unity to Arduino
            </h1>
            <p className = {styles.text}>
            Going about the prototyping for the single person interaction, I attempted to utilize an Arduino, a sonar sensor, and a speaker to attempt to create the experience, this time on a much smaller scale.
            <br/>
            <br/>
            The one person interaction turned out to be a lot more complex than the two person interaction. Because spatial audio was hard to show through a video, I thought it would be more effective to show the concept by breaking down the problem into parts, and prototyping using the arduino.
            <br/>
            <br/>
            The prototypes below look to explore how sound changes as the visitor moves in between the different axes (incorrect/correct objects, incorrect/incorrect objects).
            </p>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Moving away from a filler object
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/i50A1Pv3Q7g?si=JMqi7shHGXh6GPvp?si=8zqzgyQzSxQ-71Qu&amp;loop=1&amp;mute=0&amp;controls=0&amp;" frameBorder = "0" modestBranding = "1"></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Moving in between filler objects
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/FQFwLiyo-cY?si=7VHzAs43mVKt0l9J&amp;loop=1&amp;mute=0&amp;controls=0&amp;" frameBorder = "0" modestBranding = "1"></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Moving away from correct object
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px"  src="https://www.youtube.com/embed/921MVQsGgSI?si=psQODZeOAdSZKNmq&amp;loop=1&amp;mute=0&amp;controls=0&amp;" frameBorder = "0" modestBranding = "1"></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Moving in between filler and correct object
                </p>
            </div>
            <div>
                <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/SLUN5DevDuA?si=2rWARm1nVw4uoxCx&amp;loop=1&amp;mute=0&amp;controls=0&amp;" frameBorder = "0" modestBranding = "1"></iframe>
            </div>
        </div>
        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Project Reflection
            </h1>
            <p className = {styles.text}>
            Thinking about how to change someone&rsquo;s perception of space was a method of designing that I had never really considered before, but after this project, I understood how powerful designing for the senses was.
            <br/>
            <br/>
            Moving forward with the project, I would want to explore enjoyable sounds vs. harsh sounds — this time seeing how sounds can help aid the process of finding rather than interfere.
            </p>
            </div>
        </div> 
        </main>
        <Footer/>
        </div>
    )
}