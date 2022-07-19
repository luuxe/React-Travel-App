import { useState, useEffect } from "react";
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Results = ({ destinationResult, onLoad, location }) => {
    const [images, setImages] = useState([])

 const searchPhotos = {
    key: process.env.REACT_APP_UNSPLASH_API_KEY,
    api: 'https://api.unsplash.com/search/photos/?',
 }
    
 const url = `${searchPhotos.api}page=1&query=${location}&client_id=${searchPhotos.key}`
    
 useEffect(() => {
    getImages()
}, [])


    const getImages = async () => {
      const res = await fetch(url)
      const data = await res.json()
    
        const dataArr = data.results
        setImages(dataArr)
     
    }
    
    console.log(images)
    
    return (
        <div>
            <FontAwesomeIcon icon={faDice} className='destination-btn' onClick={onLoad} />
            <h1 className="destination-title">{destinationResult.toUpperCase()}</h1>
            <div className='images-container'>
            </div>
        </div>
    );
};

export default Results;