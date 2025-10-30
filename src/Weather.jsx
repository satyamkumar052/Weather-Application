import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function Weather() {

    const [weatherInfo, setWeatherInfo] = useState({
        city : "Mumbai",
        feels_like: 31.19,
        humidity: 74,
        temp:27.99,
        temp_max:27.99,
        temp_min:27.99,
        weather:"overcast clouds",
    });

    let updateInfo = (info)=>{
        setWeatherInfo(info);
    };


    return (
        <>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </>
    )
}