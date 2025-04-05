import warning from "../../assets/warningCircle.svg";
import AnomalyFlex from "./anomalyblocflex";
const AnomalyHead = () => {
    return(
        <div className="h-20 flex flex-col gap-4  w-full mx-auto ">
          <div className="flex justify-between  items-center ">
            <div className="flex items-center gap-2">
                <img src={warning} alt="warning sign" />
                <p className="text-[14px]">Flagged Anomalies</p>
            </div>

            <span className="text-[16px] text-[#FC485A] font-semibold">12</span>
            
          </div>
          <AnomalyFlex/>
        </div>
        
    )
}

export default AnomalyHead