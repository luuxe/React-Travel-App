
import Map from './Map'
import Images from './Images';
import Favs from './Favs'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice, faMapLocationDot, faHeart } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer'
import Loading from './Loading'

import { motion } from 'framer-motion'

const Destinations = ({ destinationResult, center, handleSubmit, location, setDestinationsToggle, destinationsToggle  }) => {
    const [loading, setLoading] = useState(true)
    const [mapToggle, setMapToggle] = useState(false)
    const [imagesToggle, setImagesToggle] = useState(true)
    const [destinationTitle, setDestinationTitle] = useState(true)
    const [liked, setLiked] = useState(false)
    const [favsList, setFavsList] = useState([])
    const [favsToggle, setFavsToggle] = useState(false)


    const addFav = () => {
        setLiked(true)
        console.log(destinationResult)
        if (favsList.includes(destinationResult)) {
            console.log(`${destinationResult} already in favorites`)
            console.log(favsList)
            } else {
            setFavsList([...favsList, destinationResult])
        }
    }


        setTimeout(function () {
          setLiked(false);
        }, 2000);
    
        useEffect(() => {
            setTimeout(() => setLoading(false), 1000)
          }, [])

    //toggle Favs component
    //on button click create a function to set state to true
    //if state = true, render Favs component, else null
    
    
    return (
        <>

            <div className='wrapper'>
                <h2 className='favs-nav' onClick={() => {
                    setFavsToggle(!favsToggle)
                }}>Favs</h2>

                {favsToggle ? <Favs favsList={favsList} /> : null }
            
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