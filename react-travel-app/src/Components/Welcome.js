import React from 'react';
import videoBackground from '../assets/videoBackground.mp4'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import { LoadScript } from '@react-google-maps/api';
import Destinations from './Destinations';

const Welcome = ({ handleChange, handleSubmit, location, destinationResult, center }) => {
    
    const [destinationsToggle, setDestinationsToggle] = useState(false)

    return (
        <>
            <video src={videoBackground} autoPlay loop muted />
            <div className = 'Welcome-content'>
                        <p className='Welcome-text'>Not sure where to travel next? Let us help.</p>
                        

                <button className='feeling-lucky-btn' onClick= {(() => {
                    setDestinationsToggle(!destinationsToggle);
                })}>Find my next destination</button>

                {destinationsToggle && <Destinations
          destinationResult={destinationResult}
          center={center}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          location={location}
        />}

                </div>
        </>
    );
};

export default Welcome;