
//stylesheets
import './App.css';
import '../src/Components/Components.css'
import '../src/Components/Images.css'
import '../src/Components/nav-footer.css'
import videoBackground from '../src/assets/videoBackground.mp4'


//Components
import Destinations from './Components/Destinations';
import Welcome from './Components/Welcome';
import { LoadScript } from '@react-google-maps/api';
import { destinationsData } from './data.js'
import { useState } from "react";


const destinationName = destinationsData.map((destination) => {
  return destination.name
})
const latitude =  destinationsData.map((destination) => {
  return destination.lat
})
const longitude =  destinationsData.map((destination) => {
  return destination.lng
})

const randomIndex = Math.floor(Math.random() * destinationName.length - 1)

function App() {

  //state for destination title
  const [destinationResult, setDestinationResult] = useState(destinationName[randomIndex])

  //state for incrementing data to return new destination
  const [i, incrementIndex] = useState(randomIndex)

    //state for images
  const [images, setImages] = useState([])
  
  //state for location query param in url
  const [location, setLocation] = useState(destinationResult)

    //state for map center coords
    const [center, setCenter] = useState({
      lat: Number(latitude[i]),
      lng: Number(longitude[i])
    })
  
  console.log(center)

  function handleSubmit(e) {
    incrementIndex(i + 1)
    if (i === destinationName.length) {
     incrementIndex(0)
    } else {
    setDestinationResult(destinationName[i])
    setLocation(destinationName[i])
    setCenter({ 
        lat: Number(latitude[i]),
        lng: Number(longitude[i])
       })
    }
  }
  
  function handleChange() {
    setDestinationResult(destinationName[Math.floor(Math.random() * destinationName.length)])
  }

  //loop through destinationName array, return destination index, increment by one, if index is greater than last index in array, return to index of 0.
  
  const [welcomeToggle, setWelcomeToggle] = useState(true)
  const [destinationsToggle, setDestinationsToggle] = useState(false)

  return (
    <div className="App">
      <video src={videoBackground} autoPlay playsInline loop muted controls='false' />
      <div className='App-container'>
      </div>
     
      {welcomeToggle && <Welcome
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          location={location}
          destinationResult={destinationResult}
          center={center}
          welcomeToggle={welcomeToggle}
          setWelcomeToggle={setWelcomeToggle}
          destinationsToggle={destinationsToggle}
          setDestinationsToggle={setDestinationsToggle}   
      />}  
      
      {destinationsToggle && <Destinations
                    destinationResult={destinationResult}
                    center={center}
                    handleSubmit={handleSubmit}
                    // handleChange={handleChange}
                    location={location}
             />}
      
      <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} />    
    </div>
  );
}

export default App;
