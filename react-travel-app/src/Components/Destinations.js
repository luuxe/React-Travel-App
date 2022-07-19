import React from 'react';
import Results from './Results';
import Map from './Map'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import photoBackground from '../assets/eiffel-test.jpeg'
const destinationsArr = [
    {
        city: 'Paris',
        country: 'France',
        lat: '48.8584',
        lng: '2.2945',
    } 
    // 'Bali, Indonesia',
    // 'Hanoi, Vietnam',
    // 'Koh Samui, Thailand',
    // 'Reykjavik, Iceland',
    // 'Mykonos, Greece',
    // 'Isla Mujeres, Mexico',
    // 'Cape Town, South Africa',
    // 'Marrakesh, Morocco', 
    // 'Lauterbrunnen, Switzerland',
    // 'Dubai, United Arab Emirates',
    // 'Auckland, New Zealand',
    // 'Kyoto, Japan'
]

const Destinations = () => {

    //state for destination result h1
    const [destinationResult, setDestinationResult] = useState(`${destinationsArr[0].city}, ${destinationsArr[0].country}`)

    //state for map center coords
    const [center, setCenter] = useState({
        lat: Number(destinationsArr[0].lat),
        lng: Number(destinationsArr[0].lng)
    })


    function onLoad() {
        console.log(destinationResult)
        // setDestinationResult(destinationsArr[Math.floor(Math.random() * destinationsArr.length)])
    }

    return (
        <div className='destinations-container' >
            <nav>
                <Link to={"/"} className='nav'>home</Link>
            </nav>
            <Results
                destinationResult={destinationResult}
                onLoad={onLoad} />
            <Map center={center}/>

        </div>
    );
};

export default Destinations;