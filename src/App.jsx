import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import LocationForm from './components/Location';
import Map from './components/Map';
import ErrorAlert from './components/ErrorAlert';
const API_KEY = import.meta.env.VITE_LOCATION_API_KEY;


function App() {
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  function handleExploreCity(cityInput) {
    getLocation(cityInput);
  }

  async function getLocation(cityName){
    let url = `https://us1.locationiq.com/v1/search?key=${API_KEY}&q=${cityName}&format=json`;
    console.log(url);
    try {
      let response = await axios.get(url);
      setCity(response.data[0].display_name)
      setLatitude(response.data[0].lat);
      setLongitude(response.data[0].lon);
    } catch(error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div>
        <LocationForm city={city} handleExploreCity={handleExploreCity} lat={latitude} long={longitude} />
        <Map lat={latitude} long={longitude} />
        <ErrorAlert errorMessage={errorMessage} />
      </div>
    </>
  )
}

export default App
