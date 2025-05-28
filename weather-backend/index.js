

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5000;
require('dotenv').config();
const API_KEY = process.env.WEATHER_API_KEY || '8ee457410637ccf101219c7bec1efa2e' ;  

app.get('/api/weather', async (req, res) => {
  const city = req.query.city ;
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
