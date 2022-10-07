import { useState, useEffect } from "react";
import sunny from "../images/sunny.png"
import clearSky from "../images/clearSky.png"

const WeatherCard = () => {

  //Weather API Information
  const [zipWeather, setZipWeather] = useState(null);

  // FETCH Request
  const loadData = () => {
    fetch('http://localhost:5003/weather')
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
          setZipWeather(data);
        }
      );
  };
  //useEffect allows you to perform side effects: fetch data, updating the DOM & timers.
  //Working with Fetch request
  useEffect(() => {
    loadData();
  }, []);

  //CATCH 
  if (!zipWeather) {
    return <div>Loading...</div>
  } else {

    return (
      <div className="weather-container">
        <h1>{zipWeather.city.name}</h1>

        <ul className="weather-day" id="1">
          <li><img src={sunny} className="icon" alt="sunny" /></li>
          <br />
          <li>{zipWeather.list[0].weather[0].description}</li>
          <li className="city">{zipWeather.city.name}<br /></li>
          <li>Min Weather {zipWeather.list[0].temp.min}</li>
          <li>Current {zipWeather.list[0].temp.day}</li>
          <li> MaxWeather {zipWeather.list[0].temp.max}</li>
          <li>Sunrise {new Date(zipWeather.list[0].sunrise).toUTCString().slice(-12, -4)}AM</li>
          <li>Sunset {new Date(zipWeather.list[0].sunset).toUTCString().slice(-12, -4)}PM</li>
          <li>Feels Like {zipWeather.list[0].feels_like.day}</li>
        </ul>

        <ul className="weather-day" id="2">
          <li><img src={clearSky} className="icon" alt="clearSky" /></li>
          <br />
          <li>{zipWeather.list[1].weather[0].description}</li>
          <li className="city">{zipWeather.city.name}<br /></li>
          <li>Min Weather {zipWeather.list[1].temp.min}</li>
          <li>Current {zipWeather.list[1].temp.day}</li>
          <li> MaxWeather {zipWeather.list[1].temp.max}</li>
          <li>Sunrise {new Date(zipWeather.list[1].sunrise).toUTCString().slice(-12, -4)}AM</li>
          <li>Sunset {new Date(zipWeather.list[1].sunset).toUTCString().slice(-12, -4)}PM</li>
          <li>Feels Like {zipWeather.list[1].feels_like.day}</li>
        </ul>

        <ul className="weather-day" id="3">
          <li><img src={clearSky} className="icon" alt="clearSky" /></li>
          <br />
          <li>{zipWeather.list[2].weather[0].description}</li>
          <li className="city">{zipWeather.city.name}<br /></li>
          <li>Min Weather {zipWeather.list[2].temp.min}</li>
          <li>Current {zipWeather.list[2].temp.day}</li>
          <li> MaxWeather {zipWeather.list[2].temp.max}</li>
          <li>Sunrise {new Date(zipWeather.list[2].sunrise).toUTCString().slice(-12, -4)}AM</li>
          <li>Sunset {new Date(zipWeather.list[2].sunset).toUTCString().slice(-12, -4)}PM</li>
          <li>Feels Like {zipWeather.list[2].feels_like.day}</li>
        </ul>
      </div>
    )
  }
}
export default WeatherCard;