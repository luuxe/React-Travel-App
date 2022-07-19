import React from 'react';
import { useState } from 'react'
import { GoogleMap, MarkerF, LoadScript } from '@react-google-maps/api';


const containerStyle = {
    width: '70vw',
    height: '40vh',
  };
  

const Map = ({center}) => {
  
      // return (
      //   <div className='Map-container'>
      //     <GoogleMap
      //       mapContainerStyle={containerStyle}
      //       center={center}
      //       zoom={6}
      //     >
      //         <MarkerF
      //         position={center} 
      //         />
      //     </GoogleMap>
      // </div>
      // )
};

export default Map;