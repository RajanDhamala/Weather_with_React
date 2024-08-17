import React from "react";

function Weathercard({location,time,message,temp,icon,humidity,wind}){
    return(
        <>
        <div className="mt-5 grid place-content-center w-auto">
        <div className="bg-[#f0f0f0] w-96 min-h-52 m-2 border-2 rounded-md">
            <h1 className="text-black text-2xl text-start ml-4 mt-2">{location}</h1>
            <div className="grid grid-cols-12 gap-2">
            <p className="pl-2 text-start ml-4 mt-2 col-span-5 ">{time}</p>
            <p className=" pl-2 text-start col-span-7 mt-2 ">{message}</p>
            </div>
            <div className="grid grid-cols-2 gap-y-7">
                <div className="flex justify-center items-center">
                <h1 className="text-3xl">{temp}°C</h1>
                </div>
                <div className="flex justify-center items-center mt-5">
                    <img src={icon} alt="" className="h-16" />
                </div>
            <div className="grid grid-rows-2 place-content-center">
                <img src={'https://previews.123rf.com/images/vectorstockcompany/vectorstockcompany1809/vectorstockcompany180901328/108988611-humidity-icon-water-level-down-concept-symbol-design-with-gradient-on-white-vector-illustration.jpg'} alt="" className="h-16" />
                <h1 className="text-center mt-2">{humidity}%</h1>
            </div>
            <div className="grid grid-rows-2 place-content-center">
                <img src={"https://cdn-icons-png.flaticon.com/512/1247/1247767.png"} alt="" className="h-16" />
                <h1 className="text-center mt-2">{wind} kmph</h1>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Weathercard