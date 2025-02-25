'use client'

import React, { useState, useEffect } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Detect if the device is a touch device
  const isTouchDevice = () => {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  };

  // Move function to update position
  const move = (e) => {
    try {
      const x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
      const y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
      setPosition({ x: x - 50, y: y - 50 });
    } catch (e) {}
  };

  useEffect(() => {
    // Mouse move event listener
    const mouseMoveHandler = (e) => move(e);

    // Touch move event listener
    const touchMoveHandler = (e) => move(e);

    // Add event listeners
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("touchmove", touchMoveHandler);

    // Cleanup event listeners when the component is unmounted
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("touchmove", touchMoveHandler);
    };
  }, []);

  const circleStyle = {
    position: "absolute",
    left: `${position.x - 100}px`,  
    top: `${position.y - 100}px`,   
    width: "300px",  
    height: "300px", 
    opacity: "20%",
    background: "conic-gradient(from 180deg at 50% 50%,rgb(0, 255, 204) 0deg,rgb(0, 26, 255) 60deg,rgb(174, 0, 255)", 
    borderRadius: "50%", 
    filter: "blur(80px)", 
    pointerEvents: "none", 
  };

  return <div style={circleStyle}></div>;
};

export default MouseFollower;
