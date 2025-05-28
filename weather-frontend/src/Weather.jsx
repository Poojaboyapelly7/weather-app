import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Hyderabad');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };
    fetchWeather();
  }, [city]);

  return (
    <>
     {/* <div>
      <h1>Weather in {weather?.name || city}</h1>
      {weather ? (
        <div>
          <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
          <p><strong>Feels Like:</strong> {weather.main.feels_like} °C</p>
          <p><strong>Condition:</strong> {weather.weather[0].description}</p>
          <p><strong>Humidity:</strong> {weather.main.humidity}%</p>
          <p><strong>Wind:</strong> {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div> */}
    <div>
      <h1>Enter the city </h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      {weather ? (
        <>
          <h1>Weather in {weather.name}</h1>

          
          <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
          <p><strong>Temperature:</strong> {weather.main.temp} °C</p>
          </Grid>
          <Grid item xs={12} sm={2}>
          <p><strong>Feels Like:</strong> {weather.main.feels_like} °C</p>
          </Grid>
          <Grid item xs={12} sm={2}><p><strong>Condition:</strong> {weather.weather[0].description}</p></Grid>
          
          <Grid item xs={12} sm={2}><p><strong>Humidity:</strong> {weather.main.humidity}%</p></Grid>
          
          <Grid item xs={12} sm={2}><p><strong>Wind:</strong> {weather.wind.speed} m/s</p></Grid>
          
          </Grid>
        </>
      ) : (
        <>
          <p>Loading weather data...</p>
        </>
      
      )}
    </div>

    </>
   

  );
};

export default Weather;
