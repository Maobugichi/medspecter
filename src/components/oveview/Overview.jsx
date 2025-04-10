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
        <div className={`xl:w-[85%] h-full  flex flex-col xl:flex-row gap-5 w-full md:pb-10 ${!theme ? "text-white" : "text-[]"} `}>
            <div className="xl:w-[65%] w-[95%]  h-1/2 flex flex-col mx-auto gap-5">
                <h1 className="text-[24px] font-semibold">{greet} name</h1>
                <div className="flex flex-col gap-14 xl:justify-between h-[85%]  limitedSize:h-[85%] ">
                 <WeekInfo
                  variants={variants}
                 />
                 <Pending
                  variants={variants}
                  theme={theme}
                 />
                </div>
                
            </div>
            <div className="xl:w-[35%]   md:gap-10  xl:mt-14 w-full flex flex-col gap-5 h-1/2 justify-between">
                <Anomalies
                 show={isShow}
                 setIsShow={setIsShow}
                 variants={variants}
                 theme={theme}
                />
                <DetailsBox
                 info="System Performance overview"
                 extra={true}
                 theme={theme}
                 className="h-[40%] md:h-[45%] pb-4 rounded-lg"
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