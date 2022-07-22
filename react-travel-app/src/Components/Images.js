import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Images = ({ location, destinationResult }) => {

    const [images, setImages] = useState([])

    const searchPhotos = {
        key: process.env.REACT_APP_UNSPLASH_API_KEY,
        api: 'https://api.unsplash.com/search/photos/?',
        page: Math.floor(Math.random() * 5),
        location: location
      }
    
        //  const getImages = async () => {
        //  const res = await fetch(`${searchPhotos.api}page=${searchPhotos.page}&query=${searchPhotos.location}&orientation=portrait&client_id=${searchPhotos.key}`)
        //      const data = await res.json()
        //      setImages(data.results)
        //      console.log(searchPhotos.location)
        //  }
    
    const getImages = () => {
        fetch(`${searchPhotos.api}page=${searchPhotos.page}&per_page=5&query=${searchPhotos.location}&orientation=portrait&client_id=${searchPhotos.key}`)

            .then(res => {
            return res.json()
            })
            .then(data => {
                setImages(data.results)
            })
            .catch(err => {
            console.log(err)
        })

    }
    
         useEffect(() => {
          getImages()
         }, [location])

    return (
        <div className='card'>
            <Carousel className='carousel' autoPlay={true} infiniteLoop={true} interval={2000} showThumbs={false} >
                {images.map((image) => (
                    //key must be in parent element
                    <div key={image.id} className='card-body'>
                        <img
                            src={image.urls.regular}
                            alt={image.alt_description}
                            height='inherit'
                            /> 
                    </div>
                ))} 
                </Carousel>
        </div>
    );
};

export default Images;