
//stylesheets
import './App.css';
import './Components.css'

//Router
import { Routes, Route, Link } from 'react-router-dom'

//Components
import Destinations from './Components/Destinations';
import Welcome from './Components/Welcome';
import { LoadScript } from '@react-google-maps/api';

import { useState, useEffect } from "react";

const destinationsArr = [
  {
      city: 'Paris',
      country: 'France',
      lat: '48.8584',
      lng: '2.2945',
  },
  {
      city: 'Bali',
      country: 'Indonesia',
      lat: '-8.409518',
      lng: '115.188919',
  },
]



function App() {

  const [destinationResult, setDestinationResult] = useState(`${destinationsArr[0].city}, ${destinationsArr[0].country}`)

    const [location, setLocation] = useState(`${destinationsArr[0].city}`)

    //set variable for image urls

    //state for map center coords
    const [center, setCenter] = useState({
        lat: Number(destinationsArr[0].lat),
        lng: Number(destinationsArr[0].lng)
    })


    function onLoad() {
        console.log(destinationResult)
        const cities = destinationsArr[Math.floor(Math.random() * destinationsArr.length)]
        setDestinationResult(cities)
    }

  const [images, setImages] = useState([])

  const searchPhotos = {
     key: process.env.REACT_APP_UNSPLASH_API_KEY,
      api: 'https://api.unsplash.com/search/photos/?',
     location: 'paris',
  }
  
     const getImages = async () => {
     const res = await fetch(`${searchPhotos.api}page=1&query=${searchPhotos.location}&orientation=portrait&client_id=${searchPhotos.key}`)
         const data = await res.json()
         setImages(data.results)
        
     }
 
     useEffect(() => {
         getImages()
     }, [])
 

  return (
    <div className="App">
      <div className='App-container'>
      </div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/destinations" element={<Destinations
          images={images}
          destinationResult={destinationResult}
          location={location}
          center={center}
          onLoad={onLoad}
        />} />
        
      </Routes>
      <LoadScript
          googleMapsApiKey={ process.env.REACT_APP_GOOGLE_MAPS_API_KEY }
        / >
    </div>
  );
}

export default App;
