import { useState, useEffect } from "react";

const ViewUserWeather = () => {

  const [favWeather, setFavWeather] = useState(null)
  // const [viewUserWeather, setViewUserWeather] = useState(false);

  // FETCH Request
  const loadData = () => {
    fetch('http://localhost:5003/favorite')
      .then((response) => response.json())
      .then(
        (data) => {
          console.log(data);
          setFavWeather(data);
        }
      );
  };

  useEffect(() => {
    loadData();
  }, []);

  // //SEE USERS INFO - TOGGLE
  // const handleView = () => {
  //   setViewUserWeather(!viewUserWeather);
  // }

  //CATCH 
  if (!favWeather) {
    return <div>Loading...</div>
  } else {



    return (
      <div>
        <h1>{favWeather.city.name}</h1>

        <ul className="weather-day" id="1">
          {/* <li><img src={sunny} className="icon" alt="sunny" /></li> */}
          <br />
          <li>{favWeather.list[0].weather[0].description}</li>
          <li className="city">{favWeather.city.name}<br /></li>
          <li>Min Weather {favWeather.list[0].temp.min}</li>
          <li>Current {favWeather.list[0].temp.day}</li>
          <li> MaxWeather {favWeather.list[0].temp.max}</li>
          <li>Sunrise {new Date(favWeather.list[0].sunrise).toUTCString().slice(-12, -4)}AM</li>
          <li>Sunset {new Date(favWeather.list[0].sunset).toUTCString().slice(-12, -4)}PM</li>
          <li>Feels Like {favWeather.list[0].feels_like.day}</li>
        </ul>

        <ul className="weather-day" id="2">
          {/* <li><img src={clearSky} className="icon" alt="clearSky" /></li> */}
          <br />
          <li>{favWeather.list[1].weather[0].description}</li>
          <li className="city">{favWeather.city.name}<br /></li>
          <li>Min Weather {favWeather.list[1].temp.min}</li>
          <li>Current {favWeather.list[1].temp.day}</li>
          <li> MaxWeather {favWeather.list[1].temp.max}</li>
          <li>Sunrise {new Date(favWeather.list[1].sunrise).toUTCString().slice(-12, -4)}AM</li>
          <li>Sunset {new Date(favWeather.list[1].sunset).toUTCString().slice(-12, -4)}PM</li>
          <li>Feels Like {favWeather.list[1].feels_like.day}</li>
        </ul>

        <ul className="weather-day" id="3">
          {/* <li><img src={clearSky} className="icon" alt="clearSky" /></li> */}
          <br />
          <li>{favWeather.list[2].weather[0].description}</li>
          <li className="city">{favWeather.city.name}<br /></li>
          <li>Min Weather {favWeather.list[2].temp.min}</li>
          <li>Current {favWeather.list[2].temp.day}</li>
          <li> MaxWeather {favWeather.list[2].temp.max}</li>
          <li>Sunrise {new Date(favWeather.list[2].sunrise).toUTCString().slice(-12, -4)}AM</li>
          <li>Sunset {new Date(favWeather.list[2].sunset).toUTCString().slice(-12, -4)}PM</li>
          <li>Feels Like {favWeather.list[2].feels_like.day}</li>
        </ul>
      </div>
    )
  }
}
export default ViewUserWeather;