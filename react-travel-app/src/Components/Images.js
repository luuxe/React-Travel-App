import { useState, useEffect } from 'react'


const Images = ({ location }) => {

    const [images, setImages] = useState([])
  
    const searchPhotos = {
        key: process.env.REACT_APP_UNSPLASH_API_KEY,
        api: 'https://api.unsplash.com/search/photos/?',
        page: 1,
        location: location
      }
    
    
         const getImages = async () => {
         const res = await fetch(`${searchPhotos.api}page=${searchPhotos.page}&query=${searchPhotos.location}&orientation=portrait&client_id=${searchPhotos.key}`)
             const data = await res.json()
             setImages(data.results)
             console.log(searchPhotos.location)
         }
     
         useEffect(() => {
          getImages()
         }, [])

    return (
        <div className='carousel-container'>
            <div className='carousel'>
                {images.map((image) => (
                    //key must be in parent element
                    <div className='carousel-item' key={image.id}>
                    <img
                    src={image.urls.small}
                    alt={image.alt_description}
                        />
                    </div>
            ))}
            </div>
        </div>
    );
};

export default Images;