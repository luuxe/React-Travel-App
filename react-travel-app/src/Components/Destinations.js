
import Map from './Map'
import Images from './Images';
import Favs from './Favs'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice, faMapLocationDot, faHeart, faBars} from '@fortawesome/free-solid-svg-icons'
import HomeBtn from './HomeBtn'
import Loading from './Loading'

import { motion } from 'framer-motion'

const Destinations = ({ destinationResult, center, handleSubmit, location, getFav, favsToggle, setFavsToggle }) => {
    //set loading
    const [loading, setLoading] = useState(true)

    //set map component mount/unmount
    const [mapToggle, setMapToggle] = useState(false)

    //set image component mount/unmount
    const [imagesToggle, setImagesToggle] = useState(true)

    //set name of destination
    const [destinationTitle, setDestinationTitle] = useState(true)

    //set if destination was liked
    const [liked, setLiked] = useState(false)

    //set favsList, starts as empty array, returns destinations when clicked
    const [favsList, setFavsList] = useState([])

    //tracks if favs list is empty
    const [isEmpty, setIsEmpty] = useState(true)


    const addFav = () => {
        setLiked(true)
        setIsEmpty(false)
        //if favsList includes the liked destination, do nothing. If it is not included, update favs list array to add new destination
        if (favsList.includes(destinationResult)) {
            console.log(`${destinationResult} already in favorites`)
            } else {
            setFavsList([...favsList, destinationResult])
        }
    }

    //function to clear 'add to favs' tag
        setTimeout(function () {
          setLiked(false);
        }, 3000);
    
        useEffect(() => {
            setTimeout(() => setLoading(false), 1000)
          }, [])

    //toggle Favs component
    //on button click create a function to set state to true
    //if state = true, render Favs component, else null
    
    
    return (
        <>
            <nav className='favs-nav'>
                <p className='favs-toggle' onClick={() => {
                    setFavsToggle(!favsToggle)
                }}><FontAwesomeIcon icon={faBars} /></p>
                <HomeBtn
            />
                </nav>
                {favsToggle ? <Favs favsList={favsList} getFav={getFav} isEmpty={isEmpty} favsToggle={favsToggle} setFavsToggle={setFavsToggle} /> : null }
                
            <div className='wrapper'>
                <motion.div className='card-container'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
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
    </>
    );
};

export default Destinations;