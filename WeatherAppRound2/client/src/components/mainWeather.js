import { useState, useEffect } from "react";

const MainWeather = () => {

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
    <div>
    <h1>WeatherMain</h1>

    </div>
  )
  }
}
export default MainWeather;