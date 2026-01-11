import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");

    let [error, seterror] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    const API_KEY = "cbe0339970196f8d1590cf8958eeb1a2";

    let getWeather = async ()=>{
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let data = await response.json();
            let result = {
                city : city,
                temp : data.main.temp,
                temp_min : data.main.temp_min,
                temp_max : data.main.temp_max,
                humidity : data.main.humidity,
                feels_like : data.main.feels_like,
                weather : data.weather[0].description,
            };
            console.log(result);
            return result;
        } catch(error) {
            throw(error)
        }
    };


    let handleChange = (event)=>{
        setCity(event.target.value);
    };
    let handleSubmit = async (event)=>{
        try {
            event.preventDefault();
            let info = await getWeather();
            updateInfo(info);
            seterror(false);
        } catch(err) {
            seterror(true);
        }
    };
    return (
        <div className='SearchBox'>
            <h1>Search Weather of your city</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="filled" required value={city} onChange={handleChange}/><br /><br />
                <Button variant="contained" type='submit' >Search</Button>
            </form>
            {error ? <h3 style={{color:"red"}}>Error while get your weather</h3> : ""}
        </div>
    )
}