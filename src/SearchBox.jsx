import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import "./Weather.css";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "3b61837f6f436e02fd0e90cf8bf8e65b";

    const getweatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error("City not found");
            }
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
                windSpeed: jsonResponse.wind.speed,
            };
            setError("");
            return result;
        } catch (err) {
            setError(err.message);
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let newInfo = await getweatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="Enter City" variant="outlined" value={city} onChange={handleChange} required />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <br /><br />
                <Button variant="contained" type='submit' startIcon={<SearchIcon />}>Search</Button>
            </form>
        </div>
    );
}
