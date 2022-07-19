import { useState, useEffect } from "react";
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Results = ({ destinationResult, onLoad, location, images }) => {
    
// const [images, setImages] = useState([])

//  const searchPhotos = {
//     key: process.env.REACT_APP_UNSPLASH_API_KEY,
//     api: 'https://api.unsplash.com/search/photos/?',
//  }
    
//     const getImages = async () => {
//     const res = await fetch(`${searchPhotos.api}page=1&query=${location}&client_id=${searchPhotos.key}`)
//         const data = await res.json()
//         setImages(data.results)
//         console.log(images)
     
//     }

//     useEffect(() => {
//         getImages()
//     }, [])
    
    
    return (
        <div>
            <FontAwesomeIcon icon={faDice} className='destination-btn' onClick={onLoad} />
            <h1 className="destination-title">{destinationResult.toUpperCase()}</h1>
            <div className='images-container'>
                <img src={images[0].urls.small} alt='paris' />
            </div>
        </div>
    );
};

export default Results;