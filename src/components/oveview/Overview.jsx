import { useContext, useEffect, useState } from "react";
import WeekInfo from "./WeekInfo";

import Pending from "./pending";
import Anomalies from "./anomalies";
import { ShowContext } from "../ContextProvider";

const Overview = () => {
    const [greet,setGreet] = useState("")
    const [isShow,setIsShow] = useState(false)
    
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
        <div className="lg:w-[85%] h-auto min-h-[100vh] flex flex-col lg:flex-row bg-red-200 w-full items-center gap-5">
            <div className="w-[65%] grid gap-8">
                <h1 className="text-[24px] font-semibold">{greet} name</h1>
                <WeekInfo/>
                <Pending/>
            </div>
            <div className="w-[35%]  h-[100vh] ">
                <Anomalies
                 show={isShow}
                 setIsShow={setIsShow}
                />
            </div>
        </div>
       
    )
}

export default Overview