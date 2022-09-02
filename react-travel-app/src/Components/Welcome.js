import { motion } from 'framer-motion'
import Loading from './Loading'
import { useState, useEffect } from 'react'

const travelSayings = [
    'Pack your bags',
    'Jet, Set, Go',
    'Now boarding..',
    'Catch flights, not feelings',
    'Adventure is out there',
    'Not all those who wander are lost',
    'My happy place is a window seat',
    'An adventure a day keeps the doctor away'
]

const phraseIndex = Math.floor(Math.random() * travelSayings.length)


const Welcome = ({ welcomeToggle, setWelcomeToggle, destinationsToggle, setDestinationsToggle }) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])

    
    return (
        <>
            {!loading ? 
                <div className='Welcome-content'>
                <p className='Welcome-text'>{travelSayings[phraseIndex]}</p>

                <motion.button className='feeling-lucky-btn' whileTap={{ scale: 0.8 }} onClick={(() => {
                    setDestinationsToggle(!destinationsToggle);
                    setWelcomeToggle(!welcomeToggle)
                })}>Find my next destination</motion.button>
            </div>
            : <Loading /> }
            </>
    );
};

export default Welcome;