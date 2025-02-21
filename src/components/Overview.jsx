import { useEffect, useState } from "react";
import WeekInfo from "./WeekInfo";
import Pending from "./pending";
import Anomalies from "./anomalies";

const Overview = () => {
    const [greet,setGreet] = useState("")

    useEffect(() => {
        const date = new Date
        const hour = date.getHours();
        if (hour <= 12) {
            setGreet("Good morning")
        } else if (hour > 12 && hour <= 15) {
            setGreet("Good Afternoon")
        } else if (hour > 15) {
            setGreet("Good evening")
        }
    })
    return(
        <div className="w-full h-[100vh] flex gap-5">
            <div className="w-[65%]">
                <h1>{greet} name</h1>
                <WeekInfo/>
                <Pending/>
            </div>
            <div className="w-[35%]">
                <Anomalies/>
            </div>
        </div>
       
    )
}

export default Overview