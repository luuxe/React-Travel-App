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
    const getImages = async () => {
      const res = await fetch(url)
      const data = await res.json()
    //   console.log(data.results[0].urls.small)
        setImages(data.results)
        for (let i = 0; i < data.results.length; i++){
            console.log(data.results[i])
        }
    }

    getImages()
}, [])

    return (
        <div>
            <h1>{destinationResult}</h1>
            <button onClick={onLoad}>Find another destination</button>
            <h2>Image results: {images.length}</h2>
            <div className='images-container'>
            
            </div>
        </div>
    );
};

export default Results;