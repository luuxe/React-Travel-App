import React from 'react';
// import Results from './Results';
import Map from './Map'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from '@fortawesome/free-solid-svg-icons'


const Destinations = ({ images, destinationResult, center, onLoad }) => {


    return (
        <div className='destinations-container' >
            <nav>
                <Link to={"/"} className='nav'>home</Link>
            </nav>
            <div>
            <h1 className="destination-title">{destinationResult}<span> <FontAwesomeIcon icon={faDice} className='destination-btn' onClick={onLoad} /></span></h1>
            <div className='images-container'>
            {images.map((image) => (
                <img
                    src={image.urls.small}
                    alt='paris'
                    key={image.urls.small}
                />
            ))}
            </div>
        </div>
            <Map center={center}/>

        </div>
    );
};

export default Destinations;