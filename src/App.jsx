import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import LocationForm from './components/Location';
import Map from './components/Map';
import ErrorAlert from './components/ErrorAlert';
const LOCATION_API_KEY = import.meta.env.VITE_LOCATION_API_KEY;
const WEATHER_API = import.meta.env.VITE_WEATHER_API_URL;


function App() {
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  
  function handleExploreCity(cityInput) {
    getLocation(cityInput);
  }

  async function getLocation(cityName){
    let url = `https://us1.locationiq.com/v1/search?key=${LOCATION_API_KEY}&q=${cityName}&format=json`;
    console.log(url);
    try {
      let response = await axios.get(url);
      setCity(response.data[0].display_name)
      setLatitude(response.data[0].lat);
      setLongitude(response.data[0].lon);
      console.log(response.data[0].lat);
    } catch(error) {
      setErrorMessage(error.message);
    }
  }

  async function getWeatherData(type) {
    try {
      let response = await axios.get(`${WEATHER_API}/weather?type=${type}`);
      console.log(response);
      setWeatherData(response.data);
    } catch(error) {
      console.error(error.message);
    }
  }

  function getLat() {
    // ?type=food
    getWeatherData("food");
  }

  function getLong() {
    // type=supplies
    getWeatherData("supplies");
  }

  return (
    <>
      <h1>City Explorer</h1>
      <div>
        <LocationForm city={city} handleExploreCity={handleExploreCity} lat={latitude} long={longitude} />
        <Map lat={latitude} long={longitude} />
        <ErrorAlert errorMessage={errorMessage} />
      </div>
    </>
  )
}

export default App
