import React from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';



const containerStyle = {
    width: '100%',
    height: '400px',
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