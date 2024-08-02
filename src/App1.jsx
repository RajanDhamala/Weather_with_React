import React,{useState,useEffect} from "react";
import Forecastcard from "./componnets/ForecastCard";
import Current from "./componnets/Current";

function App1(){
const [city,Setcity]=useState('')
const [location,Setlocation]=useState('')
const [showcurrent,Setshowcurrent]=useState(false)
const [showforecastcard,Setshowdorecastcard]=useState(false)
const [lat,Setlat]=useState('')
const [long,Setlong]=useState('')
const [forecastdata,Setforecastdata]=useState('')

function getLocation(e){
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        Setlat(position.coords.latitude);
        Setlong(position.coords.longitude);
      }, (error) => {
        console.error('Error getting location:', error);
        alert('Error getting location. Please ensure location services are enabled.');
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
}

async function Weather(){
    try{
    const data3=await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=8d47a5f1d4b79887afebf652cebff23c`)
    const data=await data3.json()
    Setforecastdata(data.list)
    Setshowcurrent(true)
    Setshowdorecastcard(true)
    Setcity('')
}catch(error){
        console.log("Error",error)
    }
}
useEffect(()=>{
    if(lat && long !==''){
        Weather()
    }
},[lat,long])
function handleclick(e){
    e.preventDefault();
    async function latlong(){
        try { 
            const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=8d47a5f1d4b79887afebf652cebff23c`);
            const data = await response.json();
            Setlat(data[0].lat);
            Setlong(data[0].lon);
            console.log(data[0].lat, data[0].lon);
            Setlocation(data[0].name)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    latlong()
}
    return(
      <>
      <div className="bg-green-700 h-16 sm:h-20 mb-4">
        <div className="flex justify-center items-center h-full">
        <h1 className="text-white font-bold text-3xl sm:text-4xl ">Weather App</h1>
        </div>
      </div>
      <div className="md:flex md:justify-center items-center">
      <div className="mx-4 grid grid-row gap-2 mb-4 md:w-96 p-10 rounded-md md:bg-gray-800/50 md:backdrop-blur-sm">
      <label className="text-black font-bold text-2xl ">Enter a City Name</label>
      <input type="text" className="bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md pl-3 py-2 placeholder:text-black placeholder:font-semibold placeholder:text-opacity-60 delay-200" placeholder="palpa/biratnagar" value={city} onChange={(e)=>Setcity(e.target.value)} />
    <button className="mt-2 bg-green-500 hover:bg-green-600 text-white py-[4px] rounded-md"
    onClick={(e)=>{handleclick(e)}}>Search</button>

<div className="flex items-center">
  <div className="flex-grow border-t-2 border-t-gray-500"></div>
  <span className="mx-4 font-bold">or</span>
  <div className="flex-grow border-t-2 border-t-gray-500"></div>
</div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 rounded-md" onClick={(e)=>getLocation(e)}>Use Location</button>
    </div>
    </div>
    <div className="sm:grid-cols-2 md:w-full mt-5 flex items-center md:col-span-7">
       <div className="w-full mx-4">{showcurrent && <Current forecast={forecastdata[0]} location={location}/>}</div> </div>
      <div className="mt-5">{ showforecastcard &&
    <div className="grid grid-cols-2 gap-4 mx-3 sm:grid-cols-3 md:grid-cols-5 ">
        <Forecastcard forecast={forecastdata[7]}/>
        <Forecastcard forecast={forecastdata[15]}/>
        <Forecastcard forecast={forecastdata[24]}/>
        <Forecastcard forecast={forecastdata[34]}/>
        <Forecastcard forecast={forecastdata[38]}/>
    </div>}
    </div>
    <div className="mb-5"></div>
    </>
    )
}
export default App1