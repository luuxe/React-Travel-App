import { useState, useEffect } from "react";


const Results = ({destinationResult, onLoad}) => {
    const [images, setImages] = useState([])

 const searchPhotos = {
    key: process.env.REACT_APP_UNSPLASH_API_KEY,
    api: 'https://api.unsplash.com/search/photos/?',
    location: 'Eiffel'
 }
    
 const url = `${searchPhotos.api}page=1&query=${searchPhotos.location}&client_id=${searchPhotos.key}`
    
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
            <h1 className="destination-title">{destinationResult.toUpperCase()}</h1>
            <button className='destination-btn' onClick={onLoad}>Find another destination</button>
            <div className='images-container'>
            </div>
        </div>
    );
};

export default Results;