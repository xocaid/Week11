import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
import { config } from "dotenv";
config();
import fetch from "node-fetch";

//ROUTES
import db from "./db/db-connection.js";
import usersRouter from './routes/users.js';
import favoritesRouter from "./routes/favorites.js";

const app = express();
const PORT = 5003;

app.use(cors());
app.use(bodyParser.json());
app.use('/users', (usersRouter));
app.use('/favorites', (favoritesRouter));


app.get('/', (req, res) => {
  res.json('This is the WeatherApp2 BACKEND.')
});

const MY_KEY = process.env.REACT_APP_API_KEY;

//GET request
//Displays 2 days by ZIP CODE
app.get('/weather', (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?zip=90016,us&APPID=${MY_KEY}&units=imperial&cnt=2`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
})


app.listen(PORT, () => console.log(`Server is running on port: ${PORT}.`));