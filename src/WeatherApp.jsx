import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./Weather.css";

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Sangli",
        temp: 24.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 50,
        feelsLike: 24.05,
        weather: "haze",
        windSpeed: 4.9,
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}
