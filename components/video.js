import styles from "../styles/Projects.module.css"; 
import React, { useState, useEffect, useRef } from 'react';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

function Video({ thumbnail }) {
    const videoRef = useRef(null);
    const size = useWindowDimensions();
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState("0:00");

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (video) {
            const percent = (video.currentTime / video.duration) * 100;
            setProgress(percent);
            setCurrentTime(formatTime(video.currentTime));
        }
    };

    const handleSeek = (e) => {
        const video = videoRef.current;
        if (!video) return;
        const rect = e.target.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newTime = (clickX / rect.width) * video.duration;
        video.currentTime = newTime;
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60).toString().padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    return (
        <div className={styles.videoContainer}>
            <video
                ref={videoRef}
                width="100%"
                muted
                loop
                playsInline
                autoPlay
                onTimeUpdate={handleTimeUpdate}
                onLoadedData={(e) => {
                    if (e.target.paused) e.target.play();
                }}
            >
                <source src={thumbnail} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Custom Progress Bar */}
            <div style={{display:"flex", justifyContent:"center"}}>
                <div className={styles.progressContainer} onClick={handleSeek}>
                    <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
    );
}

export default Video;
