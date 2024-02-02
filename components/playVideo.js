import React, {useState, useEffect, useRef, Component } from 'react';
import styles from "../styles/Projects.module.css"; 

function PlayVideo(link) {
    const videoRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Play the video when the video element comes into view
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          });
        },
        {
          threshold: 0.5, // 50% of the video must be visible to trigger play
          rootMargin: '0px', // Margin around the root
        }
      );
  
      if (videoRef.current) {
        observer.observe(videoRef.current);
      }
  
      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    }, [videoRef]);
  
    return (
      <div className={styles.container}>
        <video
          ref={videoRef}
          width="100%"
          muted
          loop
          playsInline
          preload="none"
          className={styles.video}
        >
          <source src={link} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  export default PlayVideo; 