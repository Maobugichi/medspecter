import { useContext, useEffect, useState } from "react";
import WeekInfo from "./WeekInfo";
import guage from "../../assets/guages.svg"
import Pending from "./pending";
import Anomalies from "./anomalies";
import { ShowContext } from "../ContextProvider";
import DetailsBox from "../detailsbox";
import clock from "../../assets/clocks.svg";
import lightning from "../../assets/lightning.svg";
import pulse from "../../assets/pulse.svg";
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
        <div className="xl:w-[85%] h-auto min-h-[130vh] limitedSize:h-full  flex flex-col xl:flex-row gap-5 w-full md:pb-10">
            <div className="xl:w-[65%] w-[95%]  h-auto min-h-[120vh] md:min-h-[80vh] lg:min-h-[130vh] smallSize:bg-amber-400 bg-yellow-200 limitedSize:h-[80vh] flex flex-col mx-auto gap-5">
                <h1 className="text-[24px] font-semibold">{greet} name</h1>
                <div className="flex flex-col gap-10 xl:justify-between h-[85%]  limitedSize:h-[85%] ">
                 <WeekInfo/>
                 <Pending/>
                </div>
                
            </div>
            <div className="xl:w-[35%]   xl:h-[115vh] limitedSize:h-[85vh] md:gap-10  xl:mt-14 w-full flex flex-col justify-between">
                <Anomalies
                 show={isShow}
                 setIsShow={setIsShow}
                />
                <DetailsBox
                 info="System Performance overview"
                 extra={true}
                 className="h-[40%] md:h-[45%]"
                >
                 <div className="flex flex-col items-center justify-center  h-[75%] ">
                    <img className="w-[65%] h-[65%]" src={guage} alt="" />
                    <div className="text-[12px] w-[80%] flex gap-2 flex-wrap  justify-center">
                       
                         <div className="flex gap-2">
                            <img src={clock} alt="clock" />
                            <p>Response time:  4.8Secs</p>
                         </div>

                         <div className="flex gap-2">
                            <img src={lightning} alt="lighteing" />
                            <p>Up Time:  78%</p>
                         </div>

                         <div className="flex gap-2">
                            <img src={pulse} alt="pulse" />
                            <p>Server Health: 80%</p>
                        </div>   
                    </div>
                 </div>
                </DetailsBox>
            </div>
        </div>
       
    )
}

export default Overview