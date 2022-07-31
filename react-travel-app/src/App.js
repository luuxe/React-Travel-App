

//stylesheets
import './App.css';
import '../src/Components/Destinations.css'
import '../src/Components/Images.css'
import videoBackground from '../src/assets/videoBackground.mp4'

//Components
import Destinations from './Components/Destinations';
import Welcome from './Components/Welcome';
import { LoadScript } from '@react-google-maps/api';
import { destinationsData } from './data.js'
import { useEffect, useState } from "react";


const destinationName = destinationsData.map((destination) => {
  return destination.name
})
const latitude =  destinationsData.map((destination) => {
  return destination.lat
})
const longitude =  destinationsData.map((destination) => {
  return destination.lng
})

const randomIndex = Math.floor(Math.random() * (destinationName.length - 1))

function App() {

  const [destinationResult, setDestinationResult] = useState(destinationName[randomIndex])

  const [i, incrementIndex] = useState(randomIndex)

  const [location, setLocation] = useState(destinationResult)

    const [center, setCenter] = useState({
      lat: Number(latitude[i]),
      lng: Number(longitude[i])
    })
  
  
  
  function handleSubmit() {
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

//set favs list mount/unmount
const [favsToggle, setFavsToggle] = useState(false)
    
  
  function getFav(e) {
    //get destination name
    const clickedFav = e.target.innerText
    //find destination name in destinations array, return index 
    const foundIndex = destinationName.findIndex(el => el === clickedFav)
    //set state of images, title, and map to matching index
    setDestinationResult(destinationName[foundIndex])
    setLocation(destinationName[foundIndex])
    setCenter({ 
        lat: Number(latitude[foundIndex]),
        lng: Number(longitude[foundIndex])
    })
    setFavsToggle(!favsToggle)
}


  const [welcomeToggle, setWelcomeToggle] = useState(true)
  const [destinationsToggle, setDestinationsToggle] = useState(false)


  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <div className="App">
          <video
              loop
              muted
              autoPlay
              playsInline
              src={videoBackground} />
          
            {welcomeToggle && <Welcome
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
        location={location}
        destinationsToggle={destinationsToggle}
        setDestinationsToggle={setDestinationsToggle} 
        getFav={getFav}
        setFavsToggle={setFavsToggle}
        favsToggle={favsToggle}

      />}
        
      
      <LoadScript
                googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} />    
    </div>
  );
}

export default App;


