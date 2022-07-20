
//stylesheets
import './App.css';
import '../src/Components/Components.css'
import '../src/Components/Images.css'

//Router
import { Routes, Route, Link } from 'react-router-dom'

//Components
import Destinations from './Components/Destinations';
import Welcome from './Components/Welcome';
import { LoadScript } from '@react-google-maps/api';

import { useState, useEffect } from "react";

const destinationsArr = [
  {
      name: 'Paris, France',
      city: 'Paris',
      country: 'France',
      lat: '48.8584',
      lng: '2.2945',
  },
  {
      name: 'Bali, Indonesia',
      city: 'Bali',
      country: 'Indonesia',
      lat: '-8.409518',
      lng: '115.188919',
  },
]


const destinationName = destinationsArr.map((destination) => {
  return destination.name
})
const latitude =  destinationsArr.map((destination) => {
  return destination.lat
})
const longitude =  destinationsArr.map((destination) => {
  return destination.lng
})


function App() {

  //state for destination title
  const [destinationResult, setDestinationResult] = useState(destinationName[0])

    //state for images
  const [images, setImages] = useState([])
  
  //state for location query param in url
  const [location, setLocation] = useState(destinationName[0])

    //state for map center coords
    const [center, setCenter] = useState({
      lat: Number(latitude[0]),
      lng: Number(longitude[0])
    })


  function onLoad(e) {
    e.preventDefault()
    const newDestination = destinationName[Math.floor(Math.random() * destinationName.length)]
    setDestinationResult(newDestination)
    setLocation(newDestination)
    console.log(newDestination)
    console.log(location)
  }
  

  //loop through destinationName array, return destination index, increment by one, if index is greater than last index in array, return to index of 0.


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
