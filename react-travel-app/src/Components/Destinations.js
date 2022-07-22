
import Map from './Map'
import Images from './Images';
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice, faMapLocationDot, faHeart } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer'

const Destinations = ({ destinationResult, center, handleSubmit, location }) => {

    const [mapToggle, setMapToggle] = useState(false)
    const [imagesToggle, setImagesToggle] = useState(true)
    const [destinationTitle, setDestinationTitle] = useState(true)
    const [liked, setLiked] = useState(false)

    const addFav = () => {
        setLiked(true)
    }

        setTimeout(function () {
          setLiked(false);
        }, 1000);

    return (
        <>
        <div className='wrapper'>
        <div className='card-container'>
            <nav className='destinations-nav'>
                <FontAwesomeIcon icon={faDice} className='dice-btn' onClick={handleSubmit} />
                        <FontAwesomeIcon icon={faMapLocationDot} className='map-btn' onClick={() => {
                            setMapToggle(!mapToggle)
                            setImagesToggle(!imagesToggle)
                            setDestinationTitle(!destinationTitle)
                        }} />
                        <FontAwesomeIcon icon={faHeart} className='like-btn' onClick={addFav} />
            </nav>
                    
                    {!imagesToggle && mapToggle && <Map center={center} />}
            
                <div className='destinations-content'>

                        {imagesToggle && <Images location={location} />}
                        {liked ? <p className='addToFav' style={{
                            color: 'red',
                            padding: 0,
                            margin: 0,
                            fontSize: 12,
                            textAlign: 'center',
                            display: liked ? 'block' : 'none',
                        }}
                        >Added to favorites!</p> : null}
                    
                        {destinationTitle && <h1 className="destination-title"> {destinationResult}</h1>}               

            </div>
                </div>
            </div>
            <Footer
            />
    </>
    );
};

export default Destinations;