
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
import { destinationsData } from './data.js'
import { useState, useEffect } from "react";


const destinationName = destinationsData.map((destination) => {
  return destination.name
})

const latitude =  destinationsData.map((destination) => {
  return destination.lat
})
const longitude =  destinationsData.map((destination) => {
  return destination.lng
})

function App() {

  //state for incrementing data to return new destination
  const [i, incrementIndex] = useState(0)

  //state for destination title
  const [destinationResult, setDestinationResult] = useState(destinationName[Math.floor(Math.random() * destinationName.length)])

    //state for images
  const [images, setImages] = useState([])
  
  //state for location query param in url
  const [location, setLocation] = useState(destinationResult)

    //state for map center coords
    const [center, setCenter] = useState({
      lat: Number(latitude[i]),
      lng: Number(longitude[i])
    })
  

  function handleSubmit(e) {
    incrementIndex(i + 1)
    if (i === destinationName.length) {
     incrementIndex(0)
    } else {
    setDestinationResult(destinationName[i])
      setLocation(destinationName[i])
      setCenter({ 
        lat: Number(latitude[i]),
        lng: Number(longitude[i])
       })
    }
  }
  
  function handleChange() {
    setDestinationResult(destinationName[Math.floor(Math.random() * destinationName.length)])
  }

  //loop through destinationName array, return destination index, increment by one, if index is greater than last index in array, return to index of 0.

  return (
    <div className="App">
      <div className='App-container'>
      </div>
      <Routes>
        <Route path="/" element={<Welcome
          handleChange={handleChange}
          handleSubmit={handleSubmit}/>} />
        <Route path="/destinations" element={<Destinations
          images={images}
          location={location}
          destinationResult={destinationResult}
          center={center}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />} />
        
      </Routes> 
      <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} />
            
    </div>
  );
}

export default App;
