
import Map from './Map'
import Images from './Images';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { LoadScript } from '@react-google-maps/api';


const Destinations = ({ destinationResult, center, handleSubmit, handleChange, location }) => {


    return (
        <div className='destinations-container' >
            <nav>
                <Link to={"/"} className='nav' onClick={handleChange}>HOME</Link>
            </nav>
            
            <h1 className="destination-title">  {destinationResult}<span> <FontAwesomeIcon icon={faDice} className='destination-btn' onClick={handleSubmit} /></span></h1>
           
            <Images
                location={location}
            />
          <Map center={center} />
            

        </div>
    );
};

export default Destinations;