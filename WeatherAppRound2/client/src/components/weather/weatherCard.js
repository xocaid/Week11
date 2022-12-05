import { useState, useEffect } from "react";
import sunny from "../images/sunny.png"
import clearSky from "../images/clearSky.png"

const WeatherCard = () => {

  //Weather API Information
  const [defaultWeather, setDefaultWeather] = useState(null);

  // FETCH Request
  const loadData = () => {
    fetch('http://localhost:5003/weather')
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
          setDefaultWeather(data);
        }
      );
  };
  //useEffect allows you to perform side effects: fetch data, updating the DOM & timers.
  //Working with Fetch request
  useEffect(() => {
    loadData();
  }, []);

  //CATCH 
  if (!defaultWeather) {
    return <div>Loading...</div>
  } else {

    return (
      <div className="weather-container">
        <h1>{defaultWeather.city.name}</h1>

        <ul className="weather-day" id="1">
          <li><img src={sunny} className="icon" alt="sunny" /></li>
          <br />
          <li>{defaultWeather.list[0].weather[0].description}</li>
          <li className="city">{defaultWeather.city.name}<br /></li>
          <li>Min Weather {defaultWeather.list[0].temp.min}</li>
          <li>Current {defaultWeather.list[0].temp.day}</li>
          <li> MaxWeather {defaultWeather.list[0].temp.max}</li>
          <li>Sunrise {new Date(defaultWeather.list[0].sunrise).toUTCString().slice(-12, -4)}AM</li>
          <li>Sunset {new Date(defaultWeather.list[0].sunset).toUTCString().slice(-12, -4)}PM</li>
          <li>Feels Like {defaultWeather.list[0].feels_like.day}</li>
        </ul>

        <ul className="weather-day" id="2">
          <li><img src={clearSky} className="icon" alt="clearSky" /></li>
          <br />
          <li>{defaultWeather.list[1].weather[0].description}</li>
          <li className="city">{defaultWeather.city.name}<br /></li>
          <li>Min Weather {defaultWeather.list[1].temp.min}</li>
          <li>Current {defaultWeather.list[1].temp.day}</li>
          <li> MaxWeather {defaultWeather.list[1].temp.max}</li>
          <li>Sunrise {new Date(defaultWeather.list[1].sunrise).toUTCString().slice(-12, -4)}AM</li>
          <li>Sunset {new Date(defaultWeather.list[1].sunset).toUTCString().slice(-12, -4)}PM</li>
          <li>Feels Like {defaultWeather.list[1].feels_like.day}</li>
        </ul>

        <ul className="weather-day" id="3">
          <li><img src={clearSky} className="icon" alt="clearSky" /></li>
          <br />
          <li>{defaultWeather.list[2].weather[0].description}</li>
          <li className="city">{defaultWeather.city.name}<br /></li>
          <li>Min Weather {defaultWeather.list[2].temp.min}</li>
          <li>Current {defaultWeather.list[2].temp.day}</li>
          <li> MaxWeather {defaultWeather.list[2].temp.max}</li>
          <li>Sunrise {new Date(defaultWeather.list[2].sunrise).toUTCString().slice(-12, -4)}AM</li>
          <li>Sunset {new Date(defaultWeather.list[2].sunset).toUTCString().slice(-12, -4)}PM</li>
          <li>Feels Like {defaultWeather.list[2].feels_like.day}</li>
        </ul>
      </div>
    )
  }
}
export default WeatherCard;