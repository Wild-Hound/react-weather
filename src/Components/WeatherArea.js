import React, {useEffect, useState} from 'react'
import CurrentWeather from './CurrentWeather'
import DailyWeather from './DailyWeather'
import SearchBar from './SearchBar'
import './WeatherArea.css'


function WeatherArea() {

    

    const [weatherData, setWeatherData] = useState({})
    const [days, setDays] = useState([])
    const [cityApi, setCityApi] = useState("https://api.openweathermap.org/geo/1.0/direct?q=dhaka&appid=c7d09563711de4f6fd1d655b621ea88a")
    const [weatherApi, setWeatherApi] = useState("")
    const [noResFound, setNoResFound] = useState(false)
    const [citysuggestion, setCitySuggestion] = useState([])
    let temp_days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']


    useEffect(() => {
            fetch(cityApi)
            .then(res => res.json())
            .then(data => {

                if(data[0]?.lat && data[0]?.lon){
                    let cityUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=minutely&units=metric&appid=c7d09563711de4f6fd1d655b621ea88a`
                setWeatherApi(cityUrl)
                setNoResFound(false)
                }else{
                    let cityUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=23.7104&lon=90.4074&exclude=minutely&units=metric&appid=c7d09563711de4f6fd1d655b621ea88a'
                setWeatherApi(cityUrl)
                setNoResFound(true)
                }
                
        })
    }, [cityApi])

    useEffect(() => {
        fetch(weatherApi)
        .then(res => res.json())
        .then(data => {
            setWeatherData(data)
        })
        sortDays()
    }, [weatherApi])

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

    const performSearch = () => {
        let cityName = document.getElementById("cityName").value
        cityName = cityName.toLowerCase()
        let cityUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=c7d09563711de4f6fd1d655b621ea88a`
        setCityApi(cityUrl)
        setCitySuggestion([])
    }

    const suggestCity = () => {
        let val = document.getElementById("cityName").value
        if(val.length > 2){
            fetch(`https://autocomplete.travelpayouts.com/places2?term=${val}&locale=en&types[]=city`)
            .then(res => res.json())
            .then((data) => {
                setCitySuggestion(data)
            })

        }
    }

    const searchItemAct = (e, cityName) =>{
        console.log(cityName)
        document.getElementById("cityName").value = cityName
    }


    return (
        <>
            <SearchBar func={performSearch} noResFound = {noResFound} btnUpfunc={suggestCity} suggestion={citysuggestion} itemAct={searchItemAct}></SearchBar>
            {weatherData.current ? <CurrentWeather data = {weatherData.current} day={temp_days[(new Date().getDay()-1)]}
            hourly={weatherData.hourly}></CurrentWeather>: null}
            <div className="dailyArea">
                {weatherData.current ? weatherData.daily.map((day, index) =><DailyWeather data = {day} dayName={days[index]} key={day.dt}></DailyWeather>) : null}
            </div>
            
            <div>
                
            </div>
            
        </>
    )
}

export default WeatherArea
