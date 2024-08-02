import React from "react";

function Current({forecast,location}){
    const datePart = new Date(forecast.dt_txt).toLocaleDateString();
return(
<div className="bg-gray-500 flex justify-between items-center py-2 rounded-md">
    <div className="mx-5 space-y-1">
    <h1 className="text-white text-2xl font-semibold">{location||'Biratnagar'} ({datePart})</h1>
    <h1 className="text-2xl text-white font-semibold">Temp:{((forecast.main.temp - 273.15).toFixed(1))} °C</h1>
    <h1 className="text-2xl text-white font-semibold">Wind:{forecast.wind.speed} m/s</h1>
    <h1 className="text-2xl text-white font-semibold">Humidity:{forecast.main.humidity} %</h1>
    </div>
    <div className="mx-5 flex flex-col">
        <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@4x.png`} alt="" className="h-28" />
        <h1 className="text-center text-white text-md">{forecast.weather[0].description}</h1>
    </div>
</div>
)
}
export default Current