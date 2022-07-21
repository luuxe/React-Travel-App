import videoBackground from '../assets/videoBackground.mp4'

const Welcome = ({ handleChange, welcomeToggle, setWelcomeToggle, destinationsToggle, setDestinationsToggle }) => {
    
    {/* <video src={videoBackground} autoPlay loop muted /> */}

    return (
            <div className = 'Welcome-content'>
                        <p className='Welcome-text'>Not sure where to travel next? Let us help.</p>
                        

                <button className='feeling-lucky-btn' onClick={(() => {
                    setDestinationsToggle(!destinationsToggle);
                    setWelcomeToggle(!welcomeToggle)
                })} onChange={handleChange}>Find my next destination</button>


            </div>
    );
};

export default Welcome;