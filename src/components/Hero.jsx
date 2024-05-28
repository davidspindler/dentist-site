import React from 'react';
import './Hero.css'; // Create and style this CSS file

const Hero = () => {
    return (
        <div className="hero-container">
         
            <video className="hero-video" width="500" height="500" autoPlay loop muted>
                <source src="/vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-content">
                <h1>Welcome to Our Website</h1>
                <p>Your journey starts here</p>
            </div>
        </div>
    );
};

export default Hero;