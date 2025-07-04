import { useState, useEffect } from "react";
import '../Styles/WeatherWidget.css';

function WeatherWidget(){
    const [ipLocation, setIpLocation] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const cachedIp = localStorage.getItem('ipLocation');
        const cachedWeather = localStorage.getItem('weatherData');
        const cachedTime = localStorage.getItem('weatherDataTimestamp');
        const now = Date.now();

        const isFresh = cachedTime && (now - parseInt(cachedTime) < 30 * 60 * 1000);

        if (cachedIp && cachedWeather && isFresh) {
            setIpLocation(JSON.parse(cachedIp));
            setWeatherData(JSON.parse(cachedWeather));
            return;
        }


        const ipUrl = `https://ipapi.co/json/`;
        console.log(ipUrl);
        fetch(ipUrl)
        .then(received => received.json())
        .then(data => {
            setIpLocation(data);
            localStorage.setItem('ipLocation', JSON.stringify(data));
            return [data.latitude, data.longitude];
        })
        .then(coords => {
            const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=2295158bb94a493bbb664804250207&q=${coords[0]},${coords[1]}`;
            return fetch(weatherUrl);
        })
        .then(received => received.json())
        .then(data => {
            setWeatherData(data);
            localStorage.setItem('weatherData', JSON.stringify(data));
            localStorage.setItem('weatherDataTimestamp', Date.now().toString());
        })
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