import { useState, useEffect } from "react";
import User from "./users/user";

const MainWeather = () => {

//Weather API Information
  const [zipWeather, setZipWeather] = useState(null);

  //SEARCH BAR - create variable
  // const [searchInput, setSearchInput] = useState('');

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
<User />
    </div>
  )
  }
}
export default MainWeather;