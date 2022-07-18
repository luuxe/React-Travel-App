
//stylesheets
import './App.css';

//Router
import { Routes, Route, Link } from 'react-router-dom'

//Components
import Destinations from './Components/Destinations';
import Map from './Components/Map';
import Results from './Components/Results';
import Welcome from './Components/Welcome';
import { LoadScript } from '@react-google-maps/api';

function App() {
  return (
    <div className="App">
      <div className='App-container'>
      </div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/destinations" element={<Destinations />} />

      </Routes>
      <LoadScript
          googleMapsApiKey={ process.env.REACT_APP_GOOGLE_MAPS_API_KEY }
       />
    </div>
  );
}

export default App;
