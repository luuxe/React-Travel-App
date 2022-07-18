import React from 'react';
import videoBackground from '../assets/videoBackground.mp4'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className='Welcome-container'>
            <video src={videoBackground} autoPlay loop muted />
            <div className = 'Welcome-content'>
                        <p className='Welcome-text'>Not sure where to travel next? Let us help.</p>
                        
                <Link to={"/destinations/"}>
                <button className='feeling-lucky-btn'>Find my next destination</button>
                    </Link>
                </div>
            
        </div>
    );
};

export default Welcome;