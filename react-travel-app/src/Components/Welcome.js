import videoBackground from '../assets/videoBackground.mp4'

const Welcome = ({ handleChange, handleSubmit, location, destinationResult, center, welcomeToggle, setWelcomeToggle, destinationsToggle, setDestinationsToggle }) => {
    

    return (
        <div className='welcome-container'>
            <video src={videoBackground} autoPlay loop muted />
            <div className = 'Welcome-content'>
                        <p className='Welcome-text'>Not sure where to travel next? Let us help.</p>
                        

                <button className='feeling-lucky-btn' onClick= {(() => {
                    setDestinationsToggle(!destinationsToggle);
                    setWelcomeToggle(!welcomeToggle)
                })}>Find my next destination</button>


                </div>
        </div>
    );
};

export default Welcome;