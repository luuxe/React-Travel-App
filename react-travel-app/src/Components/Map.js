import React from 'react';
import { useState } from 'react'
import { GoogleMap, MarkerF } from '@react-google-maps/api';


const containerStyle = {
    width: '80vw',
    height: '50vh',
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
              <MarkerF
                position={center}
              />
          </GoogleMap>
        
      </div>
      )
};

export default Map;