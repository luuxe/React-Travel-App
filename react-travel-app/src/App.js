import './App.css';
import Destinations from './Components/Destinations';
import Map from './Components/Map';
import Results from './Components/Results';

function App() {
  return (
    <div className="App">
      <div className='App-container'>
        <h1>in App.js</h1>
      </div>
      <Destinations />
      <Results />
      <Map />
    </div>
  );
}

export default App;
