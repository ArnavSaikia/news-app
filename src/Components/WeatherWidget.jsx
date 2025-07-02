import { useState, useEffect } from "react";
import '../Styles/WeatherWidget.css';

function WeatherWidget(){
    const [ipLocation, setIpLocation] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const ipUrl = `https://ipapi.co/json/`;
        fetch(ipUrl)
        .then(received => received.json())
        .then(data => {
            setIpLocation(data);
            return [data.latitude, data.longitude];
        })
        .then(coords => {
            const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=2295158bb94a493bbb664804250207&q=${coords[0]},${coords[1]}`;
            return fetch(weatherUrl);
        })
        .then(received => received.json())
        .then(data => setWeatherData(data))
        .catch(err => console.log(err));
    },[]);

    if(!ipLocation || !weatherData) return(
        <div className='fail-safe-default'>
            Loading Weather Data
        </div>
    )

    return(
        <div className="weather-widget">
            <img src={weatherData.current.condition.icon}/>
            <div className="temp">
                {weatherData.current.temp_c}° C
            </div>
            <span>|</span> 
            <div className="location">
                {ipLocation.city},&nbsp;<span>{ipLocation.region_code}</span>
            </div>
        </div>
    )
}

export default WeatherWidget;