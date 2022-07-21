
import Map from './Map'
import Images from './Images';
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer';
import videoBackground from '../assets/videoBackground.mp4'

const Destinations = ({ destinationResult, center, handleSubmit, handleChange, location }) => {

    const [mapToggle, setMapToggle] = useState(false)
    const [imagesToggle, setImagesToggle] = useState(true)

    return (
        <>
        <div className='wrapper'>
        <div className='card-container'>
            <nav className='destinations-nav'>
                <span> <FontAwesomeIcon icon={faDice} className='destination-btn' onClick={handleSubmit} /></span>
                <button onClick={() => {
                    setMapToggle(!mapToggle)
                    setImagesToggle(!imagesToggle)
                }}>SHOW MAP</button>
            </nav>
            
           
            {!imagesToggle && mapToggle && <Map center={center} />}

            {imagesToggle && <Images location={location} />}
            
                <div className='title-container'>
                    <h1 className="destination-title">  {destinationResult}</h1>
                </div>
            </div>
            </div>
        {/* <Footer /> */}
    </>
    );
};

export default Destinations;