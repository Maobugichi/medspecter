import { useEffect, useState } from "react";
import WeekInfo from "./WeekInfo";

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
        <div className="bg-red-200 w-full h-[100vh]">
             <h1>{greet} name</h1>
             <WeekInfo/>
        </div>
       
    )
}

export default Overview