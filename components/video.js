import styles from "../styles/Projects.module.css"; 
import React, {useState, useEffect, useRef, Component } from 'react';

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


function Video(props){
    const videoRef = useRef(null);
    const size = useWindowDimensions();
    let width = size.width; 
    let temp = size.width; 

    // useEffect(() => {
    //     if (videoRef.current) {
    //       if (videoRef.current.paused) {
    //         videoRef.current.play();
    //       }
    //     }
    //   }, [videoRef]);

    if (width <= 600){
        temp = 250; 
    }
    else if (width > 600 && width <= 700){
        temp = 100; 
    }
    else if (width > 700 && width <= 800){
        temp = 175; 
    }
    else if (width > 800 && width <= 900){
        temp = 200; 
    }
    else if (width > 900 && width <= 1100){
        temp = 250; 
    }
    else
    {
        temp = 350; 
    }

    return(
        <video
            ref={videoRef}
            width="100%"
            muted
            loop
            playsInline
            autoPlay
            onLoadedData={(e) => {
                if (e.target.paused) {
                    e.target.play();
                }
            }}
        >
            <source src={props.thumbnail} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}

export default Video; 