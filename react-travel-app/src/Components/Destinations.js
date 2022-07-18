import React from 'react';
import Results from './Results';
import Map from './Map'

const Destinations = () => {

    function onLoad() {
    console.log('find a new destination')
}
    return (
        <div className='destinations-container'>
            <Map />
            <Results />
            <button onClick={onLoad}>Find another destination</button>
        </div>
    );
};

export default Destinations;