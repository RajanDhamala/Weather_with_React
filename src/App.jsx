import React,{useState} from 'react'
import Weathercard from './componnets/WeatherCard'

function App() {
  function handelclick(e){
    e.preventDefault()
    async function hello(){
      try{
      const data1= await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`)
      const data=await data1.json()
      SetTemp(data.current.feelslike_c)
      Sethumidity(data.current.hudidity)
      Seticon(data.current.condition.icon)
      Setmessage(data.current.condition.text)
      Settime(data.location.localtime)
      Setlocation(data.location.name)
      Setwind(data.current.wind_kph)
      Sethumidity(data.current.humidity)
      Setshowcard(true)
      }catch(error){
        console.log("error in fetching data",error)
        if(city==""){
          alert("please enter the location")
        }else{
        alert("Please check for valid location")}
      }
    }
    hello()
  }
const apikey = 'b1dd851efecd4fd8a0090138242003'
const [temp,SetTemp]=useState('')
const [icon,Seticon]=useState(null)
const [humidity,Sethumidity]=useState('')
const [message,Setmessage]=useState('')
const [time,Settime]=useState('')
const [location,Setlocation]=useState('')
const [wind,Setwind]=useState('')
const [showcard,Setshowcard]=useState(false)
const [city,Setcity]=useState('')

  return (
    <>
    <div className='grid place-content-center mt-5'>
    <div className='grid justify-items-center gap-1 sm:grid-cols-2'>
      <label className='text-2xl mt-1 font-semibold text-gray-500 sm:mt-0'>Enter the name of City</label>
      <div className='w-96 sm:w-auto sm:mr-5'>
      <input type="text" value={city} onChange={(e)=>{ Setcity(e.target.value)}} className=' focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 font-semibold py-1 w-full bg-gray-400 placeholder-black'
      placeholder='Pokhara/palpa'/></div>
      </div>
      <div className='flex justify-center mt-3 mx-5'>
      <button className='bg-blue-500 hover:bg-blue-600 rounded-md px-2 sm:w-full text-white font-semibold w-24 ' onClick={(e)=>{
        handelclick(e)
      }}>Fetch info</button>
      </div>
      <div className='flex justify-center'>{
        showcard ==true &&(<Weathercard location={location} wind={wind} time={time} message={message} humidity={humidity} icon={icon} temp={temp}/>)}
      </div>
        </div>
    </>
  )
}
export default App
