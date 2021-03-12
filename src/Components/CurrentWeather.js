import React from 'react'

function CurrentWeather(props) {
    const {feels_like,weather,temp,humidity,wind_speed} = props.data
    
    return (
        <div>
            <h1>Today({props.day}): {temp}&#8451; {weather[0].description.toUpperCase()}</h1>
            <h3>Feels Like: {feels_like}&#8451;</h3>
            <h3>Humidity: {humidity}%</h3>
            <h4>Wind Speed: {wind_speed}km/h</h4>
        </div>
    )
}

export default CurrentWeather
