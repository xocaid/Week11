import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import { config } from 'dotenv';
config();
import fetch from "node-fetch";

//ROUTES
import db from './db/db-connection.js';
import usersRouter from './routes/users.js';
import favoritesRouter from './routes/favorites.js';
import imagesRouter from './routes/images.js';

const app = express();
const PORT = 5003;

app.use(cors());
app.use(bodyParser.json());
app.use('/users', (usersRouter));
app.use('/favorites', (favoritesRouter));
app.use('/images', (imagesRouter));


app.get('/', (req, res) => {
  res.json('This is the WeatherApp2 BACKEND.')
});

//GET request
//Displays 2 days by ZIP CODE
const MY_KEY = process.env.REACT_APP_API_KEY;

//DEFAULT LOCATION 
app.get('/weather', (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?zip=90016,us&APPID=${MY_KEY}&units=imperial&cnt=3`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
})

//FAVORITE LOCATION 
app.get('/favorite', (req, res) => {
  const favoriteURL = `https://api.openweathermap.org/data/2.5/forecast/daily?zip=53511,us&APPID=${MY_KEY}&units=imperial&cnt=3`;

  fetch(favoriteURL)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
})


app.listen(PORT, () => console.log(`Server is running on port: ${PORT}.`));