

const Welcome = ({welcomeToggle, setWelcomeToggle, destinationsToggle, setDestinationsToggle }) => {

    return (
            <div className = 'Welcome-content'>
                <p className='Welcome-text'>Not sure where to go next? Let us help.</p>
                        

                <button className='feeling-lucky-btn' onClick={(() => {
                    setDestinationsToggle(!destinationsToggle);
                    setWelcomeToggle(!welcomeToggle)
                })}>Find my next destination</button>


            </div>
    );
};

export default Welcome;