import React from 'react'
import './dailyWeather.css'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

function DailyWeather(props) {
    const {humidity,feels_like,temp,weather} = props.data
    const {description} = weather[0]
    return (
            <Flippy
                flipOnHover={true}
                flipOnClick={true}
                flipDirection="horizontal"
                >
                    <FrontSide className="cardFront">
                        <div className='dailyHeading'>
                            <h1>{props.dayName}</h1>
                            <h3>{description}</h3>
                            <h4>Humidity: {humidity}%</h4>
                        </div>
                    </FrontSide>
                    <BackSide className="cardBack">
                        <ul className='dailyLists'>
                            <li>Morning: {temp.morn}&#8451; <br/> Feels Like:{feels_like.morn}&#8451;</li>
                            <li>Day: {temp.day}&#8451; <br/> Feels Like:{feels_like.day}&#8451;</li>
                            <li>Evening: {temp.eve}&#8451; <br/> Feels Like:{feels_like.eve}&#8451;</li>
                            <li>Night: {temp.night}&#8451; <br/> Feels Like:{feels_like.night}&#8451;</li>
                            <hr/>
                            <li className='min-max'> <span className='min'>Min:{temp.min}&#8451;</span><br/> <span className='max'>Max:{temp.max}&#8451;</span></li>
                        </ul>
                    </BackSide>
                </Flippy>
    )
}

export default DailyWeather
