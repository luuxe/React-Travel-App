
import Map from './Map'
import Images from './Images';
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice, faMapLocationDot, faHeart } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer';

const Destinations = ({ destinationResult, center, handleSubmit, handleChange, location }) => {

    const [mapToggle, setMapToggle] = useState(false)
    const [imagesToggle, setImagesToggle] = useState(true)

    return (
        <>
        <div className='wrapper'>
        <div className='card-container'>
            <nav className='destinations-nav'>
                <FontAwesomeIcon icon={faDice} className='dice-btn' onClick={handleSubmit} />
                <FontAwesomeIcon icon={faMapLocationDot} className='map-btn' onClick={() => {
                    setMapToggle(!mapToggle)
                    setImagesToggle(!imagesToggle)
                        }} />
                <FontAwesomeIcon icon={faHeart} className='like-btn' />
            </nav>
            
           
            {!imagesToggle && mapToggle && <Map center={center} />}
                        {console.log(center)}
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