import React from 'react';
import { useState } from 'react'
import { GoogleMap, MarkerF } from '@react-google-maps/api';

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
  
      return (
          <div className='Map-container'>
      
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
        
      </div>
      )
};

export default Map;