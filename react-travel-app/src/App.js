
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


function App() {

  const [images, setImages] = useState([])

  const searchPhotos = {
     key: process.env.REACT_APP_UNSPLASH_API_KEY,
      api: 'https://api.unsplash.com/search/photos/?',
     location: 'paris',
  }
  
     const getImages = async () => {
     const res = await fetch(`${searchPhotos.api}page=1&query=${searchPhotos.location}&client_id=${searchPhotos.key}`)
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
        <Route path="/destinations" element={<Destinations images={images} />} />
        
      </Routes>
      <LoadScript
          googleMapsApiKey={ process.env.REACT_APP_GOOGLE_MAPS_API_KEY }
        / >
    </div>
  );
}

export default App;
