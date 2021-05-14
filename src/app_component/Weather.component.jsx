import React,{useState} from 'react';
const Weather=(props)=>{

    // console.log(props.minTemp);

    return (
        <div className="container">
            <div className ="cards text-center">
                {props.fetchCityWeather()}
                <h3 className="py-4">{props.city}</h3>
                {/* <button onClick={props.fetchCityWeather}>London</button> */}
                <h5 className = "py-4">
                    <i className ={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                <h1 className ="py-2">{props.currentTemp}&deg;</h1>
                {minmaxTemp(props.minTemp,props.maxTemp)}
               <h4 className="py-3">{props.description}</h4>
            </div>
        </div>
    );
}

function minmaxTemp(min,max){
    console.log("hie i am inside ");
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    )
}
export default Weather