import { motion } from 'framer-motion'
const Welcome = ({welcomeToggle, setWelcomeToggle, destinationsToggle, setDestinationsToggle }) => {

    return (
            <div className = 'Welcome-content'>
                <p className='Welcome-text'>Not sure where to go next? Let us help.</p>

                <motion.button className='feeling-lucky-btn' whileTap={{ scale: 0.8 }} onClick={(() => {
                    setDestinationsToggle(!destinationsToggle);
                    setWelcomeToggle(!welcomeToggle)
                })}>Find my next destination</motion.button>


            </div>
    );
};

export default Welcome;