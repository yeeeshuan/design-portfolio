// import styles from "../../styles/Projects.module.css"; 
// import Image from "next/image";
// import Head from 'next/head';
// import Navbar from '../../components/navbar';
// import Footer from '../../components/footer';
// import Video from '../../components/video';
// import DH from "../../Images/Projects/Garden/Thumb.jpg"
// import Journey from "../../Images/Projects/Garden/Journey.png"
// import Parti from "../../Images/Projects/Garden/Parti.png"
// import Sign from "../../Images/Projects/Garden/Sign.png"
// import FB from "../../Images/Projects/Garden/FlowerBed.png"
// import SignImg from "../../Images/Projects/Garden/SignImg.png"
// import Steps from "../../Images/Projects/Garden/Steps.png"
// import Systems from "../../Images/Projects/Garden/Systems.png"
// import Layout from "../../Images/Projects/Garden/Layouts.png"
// import Foliage from "../../Images/Projects/Garden/Foliage.png"
// import Bucket from "../../Images/Projects/Garden/Bucket.png"
// import Tech from "../../Images/Projects/Garden/Tech.png"
// import S1 from "../../Images/Projects//DH/Final_Pages/Spread_1.jpg"
// import S2 from "../../Images/Projects//DH/Final_Pages/Spread_2.jpg"
// import S3 from "../../Images/Projects//DH/Final_Pages/Spread_3.jpg"
// import S4 from "../../Images/Projects//DH/Final_Pages/Spread_4.jpg"
// import S5 from "../../Images/Projects//DH/Final_Pages/Spread_5.jpg"
// import S6 from "../../Images/Projects//DH/Final_Pages/Spread_6.jpg"
// import S7 from "../../Images/Projects//DH/Final_Pages/Spread_7.jpg"
// import S8 from "../../Images/Projects//DH/Final_Pages/Spread_8.jpg"
// import D1 from "../../Images/Projects//DH/Des/Des_1.png"
// import D2 from "../../Images/Projects//DH/Des/Des_2.png"
// import D3 from "../../Images/Projects//DH/Des/Des_3.png"
// import D4 from "../../Images/Projects//DH/Des/Des_4.png"
// import K1 from "../../Images/Projects//DH/Kiosk/K_1.png"
// import K2 from "../../Images/Projects//DH/Kiosk/K_2.png"
// import K3 from "../../Images/Projects//DH/Kiosk/K_3.png"
// import K4 from "../../Images/Projects//DH/Kiosk/K_4.png"

// export default function DesignHero(){
//     return(
//         <div>
//             <Head>
//             <title>Ethan Huang Design | Lil Garden</title>
//             </Head>
//             <div className = {styles.invisible}>
//                 <Image src = {S1} alt = "photo rotation"/>
//                 <Image src = {S2} alt = "photo rotation"/>
//                 <Image src = {S3} alt = "photo rotation"/>
//                 <Image src = {S4} alt = "photo rotation"/>
//                 <Image src = {S5} alt = "photo rotation"/>
//                 <Image src = {S6} alt = "photo rotation"/>
//                 <Image src = {S7} alt = "photo rotation"/>
//                 <Image src = {S8} alt = "photo rotation"/>
//                 <Image src = {D1} alt = "photo rotation"/>
//                 <Image src = {D2} alt = "photo rotation"/>
//                 <Image src = {D3} alt = "photo rotation"/>
//                 <Image src = {D4} alt = "photo rotation"/>
//                 <Image src = {K1} alt = "photo rotation"/>
//                 <Image src = {K2} alt = "photo rotation"/>
//                 <Image src = {K3} alt = "photo rotation"/>
//                 <Image src = {K4} alt = "photo rotation"/>
//             </div>
//             <Navbar/>
//             <main className={styles.main}>
//             <h1 className = {styles.mTitle}> 
//             Lil&rsquo; Garden
//             </h1>
//             <div className = {styles.intro}>
//             <div className = {styles.role}>
//             <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Interaction Designer, Prototyper </p> 
//             <br/>
//             <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> January — March 2024 </p>
//             <br/>
//             <p className = {styles.d1}>Tools //</p><p className = {styles.d2}> Meta Quest, Unity, Figma</p>
//             <br/>
//             <p className = {styles.d1}>Collaborators //</p><p className = {styles.d2}> <a className = {styles.links_col} href="https://rnavpatel.github.io/Portfolio/" rel="noopener noreferrer" target="_blank">Aarnav Patel</a></p>
//             </div>
//             <div className = {styles.cont}> 
//             <p className = {styles.text}>
//                 As we move towards a spatial computing future, the physical and digital worlds becomes increasingly blended. Lil&rsquo; Garden is a gamified experience that explores the question: 
//                 <br/>
//                 <br/>
//                 <strong>How can we leverage the affordances of spatial computing to translate physical experiences into XR?</strong>
//             </p>
//             <br/>
//             </div>
//             </div>
//             <div>
//                 <Image src = {DH} alt = "cover image"/>
//             </div>
//             <br/>
//             <br/>
//             <br/>
//             <br/>
//             <div className = {styles.page}>
//                 <div>
//                 </div>     
//                 <div>
//                     <h1 className = {styles.pTitle}> 
//                         Problem Space
//                     </h1>
//                     <p className = {styles.text}>
//                         The physical experience we chose to explore was nurturing. We wanted to explore how the ideas of <strong>accountability, protection, patience, and affection</strong> could build a reason for a person to come back to a virtual space. Hence, the main research question for the project was: <strong>How can we translate the &rsquo;nurturing experience&lsquo; into XR?</strong>
//                         <br/>
//                         <br/>
//                         What would make people come back into the virtual space?
//                         <br/>
//                         <br/>
//                         What does it mean to care for something in the virtual space?
//                     </p>
//                 </div>
//             </div>
//         <div className = {styles.page}>
//             <div>
//             </div>     
//             <div>
//             <h1 className = {styles.pTitle}> 
//                 Research
//             </h1>
//             <h1 className = {styles.bTitle}> 
//                 Identifying Design Opportunities
//             </h1>
//             <p className = {styles.text}>
//                 Through thinking about the user journey, the team keyed in on specific points where interactions could help with the nurturing experience. 
//             </p>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//                 <p className = {styles.d}> 
//                     User Journey Map
//                 </p>
//             </div>
//             <div>
//                 <Image src = {Journey}/>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//             </div>     
//             <div>
//             <p className = {styles.text}>
//                 We decided that we wanted to: 
//                 <br/>
//                 <br/>
//                 1. Create an <strong>onboarding process</strong> so that visitors learn about the interactions that take place in the experience, allowing them to build an emotional connection with the garden.
//                 <br/>
//                 <br/>
//                 2. Design the actual <strong>gardening interaction</strong>, making them want to return to the virtual world to care for their garden.
//                 <br/>
//                 <br/>
//                 3. Consider how we could design a <strong>physical device</strong> to remind people of the virtual garden while they were in the physical world, triggering their emotional connection with the garden. 
//             </p>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//             </div>     
//             <div>
//             <h1 className = {styles.pTitle}> 
//                 Bucket
//             </h1>
//             <p className = {styles.text}>
//                 The bucket is an element that will exist both in the physical and virtual worlds, serving as a connection between the two. 
//             </p>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//                 <p className = {styles.d}> 
//                     Bucket
//                 </p>
//             </div>
//             <div>
//                 <Image src = {Bucket}/>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//             </div>     
//             <div>
//             <h1 className = {styles.bTitle}> 
//                 Virtual Interactions
//             </h1>
//             <p className = {styles.text}>
//                 In the virtual world, the is one of the primary tools that the visitor uses to take care of their garden. 
//                 <br/>
//                 <br/>
//                 When visitors fill up their buckets, the color of the bucket will become increasingly blue as feedback. The visitor has to move back and forth from the garden to the well to refill their bucket, enforcing the concept of patience. 
//             </p>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//                 <p className = {styles.d}> 
//                     Filling Bucket
//                 </p>
//             </div>
//             <div>
//                 <Video
//                     thumbnail =  "./../../LG_Water.mp4"
//                 />
//             </div>
//         </div>
//         <div className = {styles.page}>
//             <div>
//             </div>     
//             <div>
//             <h1 className = {styles.pTitle}> 
//                 Onboarding Experience
//             </h1>
//             <h1 className = {styles.bTitle}> 
//                 Layout
//             </h1>
//             <p className = {styles.text}>
//                 When thinking about the layout of the gardening process, I wanted to consider the different values of nuturing: <strong>accountability, protection, patience, and affection. </strong>
//                 Each of the stations in the onboarding process corresponds to one of these themes. 
//             </p>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//                 <p className = {styles.d}> 
//                     Experience Layout
//                 </p>
//             </div>
//             <div>
//                 <Image src = {Layout}/>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//                 <p className = {styles.d}> 
//                     Parti Diagram
//                 </p>
//             </div>
//             <div>
//                 <Image src = {Parti}/>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//             </div>     
//             <div>
//             <h1 className = {styles.bTitle}> 
//                 UI Elements
//             </h1>
//             <p className = {styles.text}>
//                 I designed the assets in a way that would help the visitors navigate themselves through the onboarding process. The signs and steps were pointed, hinting at the direction that the visitor should move. 
//             </p>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//                 <p className = {styles.d}> 
//                     Signs
//                 </p>
//             </div>
//             <div>
//                 <Image src = {Sign}/>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//                 <p className = {styles.d}> 
//                     Rendered Assets
//                 </p>
//             </div>
//             <div className={styles.image_3}>
//                 <Image src = {SignImg}/>    
//                 <Image src = {FB}/>
//                 <Image src = {Steps}/>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//             </div>     
//             <div>
//             <h1 className = {styles.bTitle}> 
//                 Day and Night
//             </h1>
//             <p className = {styles.text}>
//                 To hint to the visitor the passage of time, the sun and moon would rise and set. Thus, there were different UI elements designed to help the visitor navigate the garden during the day and night. 
//             </p>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//                 <p className = {styles.d}> 
//                     Day UI Elements
//                 </p>
//             </div>
//             <div>
//             <Video
//                 thumbnail =  "./../../LG_Day.mov"
//             />
//             </div>
//         </div>
//         <div className = {styles.page}>
//             <div>
//                 <p className = {styles.d}> 
//                     Night UI Elements
//                 </p>
//             </div>
//             <div>
//                 <Video
//                 thumbnail =  "./../../LG_Night.mov"
//                 />
//             </div>
//         </div>
//         <div className = {styles.page}>
//             <div>
//             </div>     
//             <div>
//             <h1 className = {styles.bTitle}> 
//                 Concept Video
//             </h1>
//             <p className = {styles.text}>
//                 Concept video demonstrating all of the assets, UI elements, and interactions together that make up the onboarding process. 
//             </p>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//                 <p className = {styles.d}> 
//                     Onboarding Concept Video
//                 </p>
//             </div>
//             <div>
//                 <iframe width = "100%" height = "500px" src="https://www.youtube.com/embed/UGfJujRXdRA?si=KV_6IH0sD8ShT7ve&amp;loop=1&amp;mute=1&amp;controls=1&amp;" frameBorder = "0" modestBranding = "1" allowFullScreen></iframe>
//             </div>
//         </div>
//         <div className = {styles.page}>
//             <div>
//             </div>     
//             <div>
//             <h1 className = {styles.pTitle}> 
//                 Gardening Experience
//             </h1>
//             <h1 className = {styles.bTitle}> 
//                 Micro Interactions
//             </h1>
//             <p className = {styles.text}>
//                 By systems diagramming, the team designed interactions for the gardening experience that created a system of both rewards and punishments, gamifying the gardening experience. 
//             </p>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//                 <p className = {styles.d}> 
//                     Systems Diagram
//                 </p>
//             </div>
//             <div>
//                 <Image src = {Systems}/>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//                 <p className = {styles.d}> 
//                     Foliage
//                 </p>
//             </div>
//             <div>
//                 <Image src = {Foliage}/>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//             </div>     
//             <div>
//             <h1 className = {styles.bTitle}> 
//                 Overwatering
//             </h1>
//             <p className = {styles.text}>
//                 One of the ways that visitors can take care of their garden is by watering it; however, if not careful, visitors can also overwater their plants. Thus, visitors need to pay careful attention when tending their plants.
//             </p>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//                 <p className = {styles.d}> 
//                     Over Watering
//                 </p>
//             </div>
//             <div>
//                 <Video
//                     thumbnail =  "./../../LG_Over.mp4"
//                 />
//             </div>
//         </div>
//         <div className = {styles.page}>
//             <div>
//             </div>     
//             <div>
//             <h1 className = {styles.bTitle}> 
//                 Weeding
//             </h1>
//             <p className = {styles.text}>
//                 Weeding is also one of the ways that visitors take care of thier garden. When a weed appears, visitors must search for the weed in the scene and quickly get rid of it with thier shovel. Otherwise, the weed will damage the health of their garden, causing plants to wilt. 
//             </p>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//                 <p className = {styles.d}> 
//                     Weeding
//                 </p>
//             </div>
//             <div>
//                 <Video
//                     thumbnail =  "./../../LG_Weed.mp4"
//                 />
//             </div>
//         </div>
//         <div className = {styles.page}>
//             <div>
//             </div>     
//             <div>
//             <h1 className = {styles.bTitle}> 
//                 Tech Diagram
//             </h1>
//             <p className = {styles.text}>
//                 Most of the technical considerations for the project came from the interactions that connected the <strong>physical world with the virtual world.</strong>
//             </p>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//                 <p className = {styles.d}> 
//                     Tech Diagram
//                 </p>
//             </div>
//             <div>
//                 <Image src = {Tech}/>
//             </div>
//         </div> 
//         <div className = {styles.page}>
//             <div>
//             </div>     
//             <div>
//             <h1 className = {styles.pTitle}> 
//                 Project Reflection
//             </h1>
//             <p className = {styles.text}>
//             This project was my first time working with the Oculus, so a lot of learning came from how to design UI elements for a virtual space as opposed to a digital screen. 
//             I learned how to better ground my interactions with the research question of the project. For example, how can I use the sun and moon as an element to hint at the passage of time that comes with nurturing?
//             <br/>
//             <br/>  
//             For future considerations, the team would want to continue to consider: 
//             <br/>
//             <br/>
//             1. <strong>Scalability:</strong> How can the experience change if the visitor is ant-sized?
//             <br/>
//             <br/>
//             2. <strong>Positive Interactions:</strong> How can we continue to design different plants to encourage visitors to customize their gardens and come back? 
//             <br/>
//             <br/>
//             3. <strong>Play Testing:</strong> How long would visitors&rsquo; gardens last if given a week, month, etc…
//             <br/>
//             <br/>
//             4. <strong>Product System:</strong> Considering more methods to connect the digital garden with the physical world (custom controllers). 
//             </p>
//             </div>
//         </div> 
//             </main>
//             <Footer/>
//         </div>
//     )
// }