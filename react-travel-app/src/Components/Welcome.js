import React from 'react';
import videoBackground from '../assets/videoBackground.mp4'

const Welcome = () => {
    return (
        <div className='Welcome-container'>
            <video src={videoBackground} autoPlay loop muted />
            <div className = 'Welcome-content'>
                <h1>Welcome</h1>
                <button className='feeling-lucky-btn'>feeling lucky?</button>
            </div>
            
        </div>
    );
};

export default Welcome;