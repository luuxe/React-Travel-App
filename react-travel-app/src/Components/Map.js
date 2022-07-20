import React from 'react';
import { useState } from 'react'
import { GoogleMap, MarkerF, LoadScript } from '@react-google-maps/api';



const containerStyle = {
    width: '100vw',
    height: '40vh',
  };
  

const Map = ({center}) => {
  
      return (
        <>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={9}
          >
              <MarkerF
              position={center} 
              />
          </GoogleMap>
      </>
      )
};

export default Map;