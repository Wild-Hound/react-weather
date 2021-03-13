import React, {useEffect, useState} from 'react'
import CurrentWeather from './CurrentWeather'
import DailyWeather from './DailyWeather'
import './WeatherArea.css'

function WeatherArea() {

    

    const [weatherData, setWeatherData] = useState({})
    const [days, setDays] = useState([])
    let temp_days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=23.8103&lon=90.4125&exclude=minutely&units=metric&appid=c7d09563711de4f6fd1d655b621ea88a')
        .then(res => res.json())
        .then(data => {
            setWeatherData(data)
        })
        sortDays()
    }, [])

    function sortDays() {
        let return_days = []
        let x = new Date()
        let y = []

        for(let i = 1; i <= 8; i++){
            y.push(x.getDay())
            x.setDate(x.getDate() + 1)
            }
            y.forEach((day) =>{
            return_days.push(temp_days[day])
        })
        setDays(return_days)
    }


    return (
        <>
            {weatherData.current ? <CurrentWeather data = {weatherData.current} day={temp_days[(new Date().getDay()-1)]}></CurrentWeather>: null}
            <div className="dailyArea">
                {weatherData.current ? weatherData.daily.map((day, index) =><DailyWeather data = {day} dayName={days[index]} key={day.dt}></DailyWeather>) : null}
            </div>
            
        </>
    )
}

export default WeatherArea
