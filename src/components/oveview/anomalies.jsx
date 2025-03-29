import Button from "../Button"
import AnomalyTable from "./anomalytable"
import AnomalyHead from "../anomaly/anomlyhead"

const Anomalies = ({show,setIsShow}) => {
    return(
        <div className=" lg:w-full w-[95%] mx-auto grid gap-2  bg-amber-400 p-3 rounded-md border border-[#E8E8E8] ">
          <AnomalyHead/>
          <AnomalyTable
           isShow={show}
          />
          <Button
           setIsShow={setIsShow}
           content={show ?  "See Less" : "View all Flagged Anomalies (20)"}
           className={"lg:w-[192px] w-[65%] h-[35px] bg-[#F9FAFB] border border-[#0000001A] text-[#535353] text-[12px] rounded-md ml-16"}
          />
        </div>
    )
}

export default Anomalies