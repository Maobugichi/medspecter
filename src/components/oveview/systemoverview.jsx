import DetailsBox from "../detailsbox";
import clock from "../../assets/clocks.svg";
import lightning from "../../assets/lightning.svg";
import pulse from "../../assets/pulse.svg";
import guage from "../../assets/guages.svg";

const SystemOverview = ({ theme }) => {
    return(
        <DetailsBox
        info="System Performance overview"
        extra={true}
        theme={theme}
        className="h-[40%]  md:h-[45%] xl:h-[41.5%]  grid p-4 rounded-lg "
       >
           <img className="w-[70%] h-[70%] mx-auto" src={guage} alt="guage" />
           <div className="text-[12px] w-[80%] flex gap-2 flex-wrap  mx-auto justify-center h-12 pb-4 ">
              
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
      
       </DetailsBox>
    )
}

export default SystemOverview