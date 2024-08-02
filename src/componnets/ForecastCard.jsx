import React,{useState} from "react";
function Forecastcard({forecast}){
    const datePart = new Date(forecast.dt_txt).toLocaleDateString();
    return(
        <>
        <div className="rounded-md bg-gray-00/50 backdrop-blur-sm w-full  px-4 py-3">
        <h1 className="text-start text-white text-2xl">{datePart}</h1>
            <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png`} alt="" className="h-20 " />
        <div className="">
        <h1 className="text-white text-lg font-mono">
    Temp: {((forecast.main.temp - 273.15).toFixed(1))}°C
</h1>
            <h1 className="text-white text-lg font-mono">Wind:{forecast.wind.speed}m/s</h1>
            <h1 className="text-white text-lg font-mono">Humidity:{forecast.main.humidity}%</h1>
        </div>
        </div>
        </>
    )
}
export default Forecastcard