import React from 'react';
import { useState } from 'react'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

//lat: 48.8584,
    //lng: 2.2945,

const containerStyle = {
    width: '50vw',
    height: '50vh',
    border: '2px solid black',
  };
  

const Map = () => {

  const [center, setCenter] = useState({
    lat: 48.8485,
    lng: 2.2945
  })
  
  console.log(center.lat, center.lng)
    
      return (
          <div className='Map-container'>
          <div>
          <h1>in Map.js</h1>
          <LoadScript
          googleMapsApiKey={ process.env.REACT_APP_GOOGLE_MAPS_API_KEY }
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={6}
          >
            { /* Child components, such as markers, info windows, etc. */ }
              <MarkerF
                position={center}
              />
          </GoogleMap>
        </LoadScript>
        </div>
      </div>
      )
};

export default Map;