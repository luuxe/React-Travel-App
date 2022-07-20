
import Map from './Map'
import Images from './Images';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from '@fortawesome/free-solid-svg-icons'


const Destinations = ({ destinationResult, center, handleSubmit, handleChange, location }) => {

    const [mapToggle, setMapToggle] = useState(false)

    return (
        <div className='wrapper' >
            <nav>
                <Link to={"/"} className='nav' onClick={handleChange}>HOME</Link>
                <button onClick={() => setMapToggle(!mapToggle)}>MAP</button>
            </nav>
            
            <h1 className="destination-title">  {destinationResult}<span> <FontAwesomeIcon icon={faDice} className='destination-btn' onClick={handleSubmit} /></span></h1>
           
            {mapToggle && <Map center={center} />}

            <Images
                location={location}
                />
            

        </div>
    );
};

export default Destinations;