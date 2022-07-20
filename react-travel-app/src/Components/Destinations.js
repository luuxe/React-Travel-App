
import Map from './Map'
import Images from './Images';
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from '@fortawesome/free-solid-svg-icons'


const Destinations = ({ destinationResult, center, handleSubmit, handleChange, location }) => {

    const [mapToggle, setMapToggle] = useState(false)

    return (
        <div className='wrapper' >
            <nav>
            <span> <FontAwesomeIcon icon={faDice} className='destination-btn' onClick={handleSubmit} /></span>
                <button onClick={() => setMapToggle(!mapToggle)}>MAP</button>
            </nav>
            
           
            {mapToggle && <Map center={center} />}

            <Images
                location={location}
                />
            
            <h1 className="destination-title">  {destinationResult}</h1>

        </div>
    );
};

export default Destinations;