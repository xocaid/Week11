import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();
import fetch from "node-fetch";

const app = express();
const PORT = 5003;

app.use(cors());

app.get('/', (req, res) => {
  res.json('This is the BACKEND.')
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