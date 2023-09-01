import  { useEffect, useState} from "react";
const WeatherApi = () => {

    const [weather, setWeather] = useState ([]);
    const [inputLocation, setInputLocation] = useState('');
    const [location, setLocation] = useState('Lagos');
    const [country, setCountry] = useState('NG');
    function loadWeatherApi() 
{
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${inputLocation}&appid=e5462d86c2d138948b927e06c3cb6871`)
    .then(res =>{
        if (!res.ok) {
            throw new Error("Network response was not okay.");
        }
        return res.json();
    })
    .then((data) => {
        setWeather(data.main.temp)
        setLocation(data.name)
        setCountry(data.sys.country)
    console.log(data)}
    )
    .catch(error => {
        console.error("Fetch error:", error)
    })


}

function handleLocationInputKeyDown(event) {
    if (event.key === "Enter") {
        // Prevent the default behavior of the Enter key (form submission)
        event.preventDefault();
        
        // Call the API to fetch weather data for the entered location
        loadWeatherApi();

        setInputLocation('')
    }

}
    useEffect(() => {loadWeatherApi()})

    return (
        <div className="container">
           <div className="search">
            <input
            value={inputLocation}
            onChange={event => setInputLocation(event.target.value)}
            type="text" 
            placeholder="Enter Location" 
            onKeyDown={handleLocationInputKeyDown}/>
            
           </div>
           <div className="location"> {location}, {country}</div>
           <div className="weath" >{weather} <span className="temp">°F</span></div>
        </div>
    );
};


export default WeatherApi;