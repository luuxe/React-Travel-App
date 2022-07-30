
import Map from './Map'
import Images from './Images';
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice, faMapLocationDot, faHeart } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer'
import Loading from './Loading'

import { motion } from 'framer-motion'

const Destinations = ({ destinationResult, center, handleSubmit, location }) => {
    const [loading, setLoading] = useState(true)
    const [mapToggle, setMapToggle] = useState(false)
    const [imagesToggle, setImagesToggle] = useState(true)
    const [destinationTitle, setDestinationTitle] = useState(true)
    const [liked, setLiked] = useState(false)
    const [favs, setFavs] = useState([])

    console.log(favs)

    const addFav = () => {
        setLiked(true)
        console.log(destinationResult)
        if (favs.includes(destinationResult)) {
            console.log(`${destinationResult} already in favorites`)
            } else {
            setFavs([...favs, destinationResult])
        }
    }

        setTimeout(function () {
          setLiked(false);
        }, 2000);
    
        useEffect(() => {
            setTimeout(() => setLoading(false), 1000)
          }, [])

    return (
        <>

            <div className='wrapper'>
            
                <motion.div className='card-container'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
                >
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
            
                     {loading === false ? (
                    <div className='destinations-content'>
                        {imagesToggle && <Images location={location} />}
                        {liked ? <p className='addToFav' style={{
                            display: liked ? 'block' : 'none',
                        }}
                        >Added to favorites!</p> : null}
                        {destinationTitle && <h1 className="destination-title"> {destinationResult}</h1>}

                    </div>
                   ) : (
                    <Loading />
                  )}  

                </motion.div>
            </div>
            <Footer
            />
    </>
    );
};

export default Destinations;