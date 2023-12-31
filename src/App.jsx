import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import LocationForm from './components/Location';
import Map from './components/Map';
import Weather from './components/Weather';
import Movies from './components/Movies';
import ErrorAlert from './components/ErrorAlert';
const LOCATION_API_KEY = import.meta.env.VITE_LOCATION_API_KEY;
const SERVER = import.meta.env.VITE_RENDER_URL;


function App() {
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState(null);   
  const [longitude, setLongitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [movieData, setMovieData] = useState([]);
  
  function handleExploreCity(cityFormInput) {
    getLocation(cityFormInput);
    getMovieData(cityFormInput);
  }

  async function getLocation(cityName){
    let url = `https://us1.locationiq.com/v1/search?key=${LOCATION_API_KEY}&q=${cityName}&format=json`;
    console.log(url);
    try {
      let response = await axios.get(url);
      setCity(response.data[0].display_name)
      setLatitude(response.data[0].lat);
      setLongitude(response.data[0].lon);
      getWeatherData(response.data[0].lat, response.data[0].lon);
      console.log(response.data[0].lat);
    } catch(error) {
      setErrorMessage(error.message);
    }
  }

  async function getWeatherData(lat, lon) {
    console.log(`${SERVER}/weather`)
    try {
      let response = await axios.get(`${SERVER}/weather?lat=${lat}&lon=${lon}`);
      console.log(response);
      setWeatherData(response.data);
      console.log(response.data);
    } catch(error) {
      console.error(error.message);
    }
  }

  async function getMovieData(city) {
    const cityName = city.split(',')[0].trim();
    try {
      let response = await axios.get(`${SERVER}/movies?city=${cityName}`);
      // console.log(response);
      setMovieData(response.data);
      console.log(response.data);
    } catch(error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <h1>City Explorer</h1>
      <div>
        <LocationForm city={city} handleExploreCity={handleExploreCity} lat={latitude} long={longitude} />
        <Map lat={latitude} long={longitude} />
        <ErrorAlert errorMessage={errorMessage} />
        <Weather weatherData={weatherData} />
        <Movies movieData={movieData} />
      </div>
    </>
  )
}

export default App
