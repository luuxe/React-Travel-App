import React from 'react';
import { useState } from 'react'


const destinationsArr = [
    'Paris, France', 
    'Bali, Indonesia',
    'Hanoi, Vietnam',
    'Koh Samui, Thailand',
    'Reykjavik, Iceland',
    'Mykonos, Greece',
    'Isla Mujeres, Mexico',
    'Cape Town, South Africa',
    'Marrakesh, Morocco', 
    'Lauterbrunnen, Switzerland',
    'Dubai, United Arab Emirates',
    'Auckland, New Zealand',
    'Kyoto, Japan'
]

const Results = () => {

    const [destinationResult, setDestinationResult] = useState(destinationsArr[0])
    

    function onLoad() {
        console.log(destinationResult)
        setDestinationResult(destinationsArr[Math.floor(Math.random() * destinationsArr.length)])
    }

    return (
        <div>
            <h1>{destinationResult}</h1>
            <button onClick={onLoad}>Find another destination</button>
        </div>
    );
};

export default Results;