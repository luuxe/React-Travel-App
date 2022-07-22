import React from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';



const containerStyle = {
    
    width: '100vw',
    height: '70vh',
  };
  

const Map = ({center}) => {
  
      return (
        <div className='map-container'>
          <GoogleMap
            className='google-map'
            mapContainerStyle={containerStyle}
            center={center}
            zoom={9}
          >
              <MarkerF
              position={center} 
              />
          </GoogleMap>
      </div>
      )
};

export default Map;