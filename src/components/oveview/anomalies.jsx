import Button from "../Button"
import AnomalyTable from "./anomalytable"
import AnomalyHead from "../anomaly/anomlyhead"

const Anomalies = ({show,setIsShow}) => {
    return(
        <div className=" w-full grid gap-2 h-[427px] p-3 rounded-md border border-[#E8E8E8] ">
          <AnomalyHead/>
          <AnomalyTable
           isShow={show}
          />
          <Button
           setIsShow={setIsShow}
           content={show ?  "See Less" : "View all Flagged Anomalies (20)"}
           className={"w-[192px] h-[35px] bg-[#F9FAFB] border border-[#0000001A] text-[#535353] text-[12px] rounded-md ml-16"}
          />
        </div>
    )
}

export default Anomalies