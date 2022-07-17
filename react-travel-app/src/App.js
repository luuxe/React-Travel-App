import './App.css';
import Destinations from './Components/Destinations';
import Map from './Components/Map';
import Results from './Components/Results';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <div className='App-container'>
      </div>
      <Welcome />
      <Destinations />
      <Results />
      <Map />
    </div>
  );
}

export default App;
