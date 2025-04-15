import { useContext, useEffect, useState } from "react";
import WeekInfo from "./WeekInfo";
import Pending from "./pending";
import Anomalies from "./anomalies";
import { ShowContext } from "../ContextProvider";
import SystemOverview from "./systemoverview";
const Overview = () => {
    const [greet,setGreet] = useState("")
    const [isShow,setIsShow] = useState(false)
    const { theme } = useContext(ShowContext)
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
    },[])

    const variants = {
        visible: {opacity: [0 , 0.5 , 1] , scale : [0 , 0.5 , 1] } ,
        hidden: {opacity: 0, scale: 0}
    }


  
    return(
        <div className={`mx-auto md:w-[85%] h-auto md:min-h-[120vh] overflow-hidden pb-4 mt-24 3xl:w-[80%] xl:h-full overflow-x-hidden  flex flex-col xl:flex-row gap-5 w-full ${!theme ? "text-white" : "text-[]"} `}>
            <div className="xl:w-[65%] w-[95%] h-full  flex flex-col mx-auto gap-5">
                <h1 className="text-[24px] font-semibold">{greet} name</h1>
                <div className="flex flex-col xl:h-[95%] 3xl:h-[75%]  gap-14 xl:gap-10">
                 <WeekInfo
                  variants={variants}
                 />
                 <Pending
                  variants={variants}
                  theme={theme}
                 />
                </div>
                
            </div>
            <div className="xl:w-[35%] md:gap-10  xl:mt-14 w-full flex flex-col gap-5 xl:h-[85%] 3xl:h-[68%] ">
                <Anomalies
                 show={isShow}
                 setIsShow={setIsShow}
                 variants={variants}
                 theme={theme}
                />
               <SystemOverview
                theme={theme}
               />
            </div>
        </div>
       
    )
}

export default Overview