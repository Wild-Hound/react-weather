import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

function CurrentWeather(props) {
    const {feels_like,weather,temp,humidity,wind_speed} = props.data
    console.log(props.hourly.forEach((hour, index) =>{
        if(index <= 5){
            console.log(hour)
        }
    }))
    
    return (
        <div className='curTopDiv'>
            <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
            className="curWeatherCard"
            >
                <FrontSide className="curWeatherFront">
                    <div className="currentWeather">
                        <div>
                            <h1>Today({props.day})<br/> {temp}&#8451; {weather[0].description.toUpperCase()}</h1>
                            <h3>Feels Like: {feels_like}&#8451;</h3>
                            <h3>Humidity: {humidity}%</h3>
                            <h4>Wind Speed: {wind_speed}km/h</h4>
                        </div>
                    </div>
                </FrontSide>

                <BackSide>
                    <div style={{ textAlign:'start'}}>
                <Timeline align="alternate">

                    {props.hourly.map((hour, index) =>{
                        let today = new Date();
                        let curHour = (today.getHours() + (index + 1)) % 12
                        let x = today.getHours() > 12 ? curHour+" PM" : curHour+" AM"
                        if(curHour === 0){
                            if(today.getHours() === 12){
                                x = "12 PM"
                            }else{
                                x = "12 AM"
                            }
                        }
                        
                        if(index < 5){
                            return (
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <p>{x}</p>
                            <p>{hour.weather[0].description}</p>
                            <p>{hour.temp}&#8451;</p>
                        </TimelineContent>
                    </TimelineItem>
                            )
                        }
                        else if(index === 5){
                            return(
                                <TimelineItem>
                                    <TimelineDot />
                                    <TimelineContent>
                                        <p>{x}</p>
                                        <p>{hour.weather[0].description}</p>
                                        <p>{hour.temp}&#8451;</p>
                                    </TimelineContent>
                                </TimelineItem>
                            )
                        }
                    })}

                    

                </Timeline>
            </div>
                </BackSide>
            </Flippy>
        </div>
    )
}

export default CurrentWeather
