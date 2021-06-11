import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Weather from "./components/Weather";
import { usePosition } from "use-position";

function App() {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();
  const dil = navigator.language.split("-")[0];

  const getWeather = async (lat, lon) => {
    var key = process.env.REACT_APP_WEATHER_KEY;

    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=${dil}&units=metric`
      );
      setWeather(data);
      console.log("data", data);
    } catch (error) {}
  };
  useEffect(() => {
    latitude && longitude && getWeather(latitude, longitude);
  }, [latitude, longitude]);
  return (
    <React.StrictMode>
      <Header />
      <Weather weather={weather} />
    </React.StrictMode>
  );
}

export default App;
