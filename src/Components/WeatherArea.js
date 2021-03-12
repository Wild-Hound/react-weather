import React, {useEffect, useState} from 'react'
import CurrentWeather from './CurrentWeather'
import DailyWeather from './DailyWeather'
import './WeatherArea.css'

function WeatherArea() {

    const [weatherData, setWeatherData] = useState({})

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=23.8103&lon=90.4125&exclude=minutely&units=metric&appid=c7d09563711de4f6fd1d655b621ea88a')
        .then(res => res.json())
        .then(data => {
            setWeatherData(data)
        })
    }, [])
    return (
        <>
            {weatherData.current ? <CurrentWeather data = {weatherData.current}></CurrentWeather>: null}
            <div className="dailyArea">
                {weatherData.current ? weatherData.daily.map((day) =><DailyWeather data = {day}></DailyWeather>) : null}
            </div>
            
        </>
    )
}

export default WeatherArea
