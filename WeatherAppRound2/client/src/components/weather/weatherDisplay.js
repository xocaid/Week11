import { useState, useEffect } from "react";
import LikeButton from "../likes";
import WeatherCard from "./weatherCard";


const WeatherDisplay = () => {

    return (
      <div className="weather-container">
        <WeatherCard/>
        <LikeButton/>
      </div>
    )
  }

export default WeatherDisplay;