import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';// installed git hub projectin node module and using its icon
import './App.css';
// import Form from './app_component/Form.component'
import Weather from './app_component/Weather.component';
function App() {
  //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  // const weatherApiKey = "6554e8d17317b17fb51bffae9de0cc70";
  const [city,setCity] =useState("Jammu");
  const[icon,setIcon] = useState(undefined);
  const[weatherIcon,setWeatherIcon] = useState({
    Thunderstorm:"wi-thunderstorm",
    Drizzle:"wi-sleet",
    Rain:"wi-storm-showers",
    Snow:"wi-snow",
    Atomosphere:"wi-fog",
    Clear:"wi-day-sunny",
    Clouds:"wi-day-fog",
  });
  const[main,setMain] = useState(undefined);
  const[description ,setDiscription] = useState(undefined);
  const [currentTemp,setCurrent] = useState();
  const [minTemp,setMinTemp] = useState();
  const [maxTemp,setMaxTemp] = useState();

  const calculateCelsius = (temp)=>{
      let celsius = Math.floor(temp -273.15);
      return celsius;
  }
  const getWeatherIcon= (weatherIcon,rangeId)=>{
    // console.log("hiiii",weatherIcon);
    // console.log("range id",rangeId);
    switch(true){
      case rangeId >=200 && rangeId <=232:
        setIcon(weatherIcon.Thunderstorm)
        break;
        case rangeId >=300 && rangeId <=321:
          setIcon(weatherIcon.Drizzle)
          break;
        case rangeId >=500 && rangeId <=531:
            setIcon(weatherIcon.Rain)
            break;
        case rangeId >=600 && rangeId <=622:
            setIcon(weatherIcon.Snow)
            break;
        case rangeId >=701 && rangeId <=781:
            setIcon(weatherIcon.Atomosphere)
            break;
        case rangeId === 800:
            setIcon(weatherIcon.Clear)
            console.log(icon ,"iiiiiiiii");
            break;
        case rangeId >=801 && rangeId <=804:
            setIcon(weatherIcon.Clouds)
            console.log(icon ,"iiiiiiiii");
            break;
        default:
            setIcon(weatherIcon.Clouds)
            console.log(icon ,"iiiiiiiii");
            break;
    }
  }
  const fetchCityWeather = ()=>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6554e8d17317b17fb51bffae9de0cc70`
    ).then((response)=>response.json()).then(
      (data)=>{
        setCity(data.name);
        setCurrent(calculateCelsius(data.main.temp));
        setMinTemp(calculateCelsius(data.main.temp_min));
        setMaxTemp(calculateCelsius(data.main.temp_max));
        setDiscription(data.weather[0].description);
        getWeatherIcon(weatherIcon,data.weather[0].id);
        console.log(data);
        // console.log(data.weather[0].id);
        // console.log("this is " + data + " " + city);
      }
    ).catch((error)=>{console.log("error is ",error);})
  };
  return (
    <div className="App">
    
     <Weather fetchCityWeather = {fetchCityWeather} city ={city} currentTemp = {currentTemp}
     maxTemp = {maxTemp} minTemp ={minTemp} 
     description = {description} main ={main} weatherIcon ={icon}/>
     {/* <Form className="text-cener"/> */}
    </div>
  );
}

export default App;
