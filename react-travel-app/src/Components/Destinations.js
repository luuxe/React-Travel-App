
import Map from './Map'
import Images from './Images';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from '@fortawesome/free-solid-svg-icons'


const Destinations = ({ images, destinationResult, center, handleSubmit, handleChange }) => {


    return (
        <div className='destinations-container' >
            <nav>
                <Link to={"/"} className='nav' onClick={handleChange}>HOME</Link>
            </nav>
            
                <h1 className="destination-title">  {destinationResult}<span> <FontAwesomeIcon    icon={faDice} className='destination-btn'  onClick={handleSubmit} /></span></h1>
           
            {/* <Images images={images}
            /> */}
        
            <Map center={center}/>

        </div>
    );
};

export default Destinations;