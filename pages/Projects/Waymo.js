import styled from 'styled-components'; 
import styles from "../../styles/Projects.module.css"; 
import Image from "next/image";
import Head from 'next/head';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Video from '../../components/video';

import W1 from "../../Images/Projects/Waymo/Waymo_1.png"; 
import W2 from "../../Images/Projects/Waymo/Waymo_2.png"; 
import W3 from "../../Images/Projects/Waymo/Waymo_3.png"; 
import W4 from "../../Images/Projects/Waymo/Waymo_4.png"; 
import W5 from "../../Images/Projects/Waymo/Components.png"; 

export default function Zenda(){
    return(
        <div>
            <Head>
            <title>Ethan Huang Design | Waymo</title>
            </Head>
            <Navbar/>
            <main className={styles.main}>
            <h1 className = {styles.mTitle}> 
            Waymo x Airbnb
            </h1>
            <div className = {styles.intro}>
            <div className = {styles.role}>
                <p className = {styles.d1}>Role //</p><p className = {styles.d2}> Product Designer</p> 
                <br></br>
                <p className = {styles.d1}>Duration //</p><p className = {styles.d2}> November 2024 </p>
                </div>
            <div className = {styles.cont}> 
                <p className = {styles.text}>
                    As AI and autonomous driving technologies evolve, I envisioned a collaboration where Waymo seamlessly integrates with a service like Airbnb. In this concept, I explored how the collaboration between Airbnb and Waymo could deliver personalized travel experiences. 
                </p>
                <p className = {styles.text}>
            </p>
            </div>
         </div>
        <div>
            <Video
                thumbnail =  "./../../Waymo.mp4"
            />
        </div>

        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Research
            </h1>
            <h1 className = {styles.bTitle}> 
                Identifying Insights
            </h1>
            <p className = {styles.text}>
                Three of the insights to help inform this collaboration were: 
                <br/>
                <br/>
                1. Waymo&rsquo;s technologies oﬀers a safer alternative to current ridesharing methods, showing reduced rates of road incidents compared to human drivers.
                <br/>
                <br/>
                2. Current ride-sharing companies have seen a rise in concerns about sexual harassment and discrimination—Waymo provides a judgement-free riding experience.
                <br/>
                <br/>
                3. With multiple cities looking to adopt smart city solutions, Waymo can play a crucial role in these transformations.
            </p>
            </div>
        </div> 
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    User Flow for Waymo x Airbnb Experience
                </p>
            </div>
            <div>
                <Image
                   src = {W4}
                />
            </div>
        </div>

        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.pTitle}> 
                Design
            </h1>
            <h1 className = {styles.bTitle}> 
                Entry Point
            </h1>
            <p className = {styles.text}>
                The user would first learn about the experience when they are searching for an Airbnb in a location where Waymo is offered. 
            </p>
            </div>
        </div> 

        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Search Bar on Home Page
                </p>
            </div>
            <div>
                <Image
                   src = {W1}
                />
            </div>
        </div>
        
        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Tile on Location Page
                </p>
            </div>
            <div>
                <Image
                   src = {W2}
                />
            </div>
        </div>

        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Card on Confirmation Page
                </p>
            </div>
            <div>
                <Image
                   src = {W3}
                />
            </div>
        </div>

        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.bTitle}> 
                Smart Itinerary
            </h1>
            <p className = {styles.text}>
                The <strong>Smart Itinerary</strong> feature is a feature that allows for users to enter their trip itinerary and schedule Waymo rides to accompany their trip. Waymo gives the user suggestions for improvements to their itinerary through <strong>Smart Edits</strong>. 
            </p>
            </div>
        </div> 

        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Waymo Enter Destination
                </p>
            </div>
            <div>
                <Video
                    thumbnail =  "./../../Waymo_Enter.mov"
                />
            </div>
        </div>

        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Waymo Smart Edits
                </p>
            </div>
            <div>
                <Video
                    thumbnail =  "./../../Waymo_Smart.mov"
                />
            </div>
        </div>

        <div className = {styles.page}>
            <div>
            </div>     
            <div>
            <h1 className = {styles.bTitle}> 
                Day of the Trip
            </h1>
            <p className = {styles.text}>
                On the day of the trip, the user is able to confirm and pay for their scheduled Waymo experience. While they are in the car, the user can scroll the app to view suggested attractions recommended by Waymo. 
            </p>
            </div>
        </div> 

        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Confirming Waymo Ride
                </p>
            </div>
            <div>
                <Video
                    thumbnail =  "./../../Waymo_Conf.mov"
                />
            </div>
        </div>

        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Suggestions for Attractions
                </p>
            </div>
            <div>
                <Video
                    thumbnail =  "./../../Waymo_Sugg.mov"
                />
            </div>
        </div>

        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Confirming the Next Ride
                </p>
            </div>
            <div>
                <Video
                    thumbnail =  "./../../Waymo_Next.mov"
                />
            </div>
        </div>

        <div className = {styles.page}>
            <div>
                <p className = {styles.d}> 
                    Components
                </p>
            </div>
            <div>
                <Image
                   src = {W5}
                />
            </div>
        </div>

        </main>
        <Footer/>
        </div>
    )
}