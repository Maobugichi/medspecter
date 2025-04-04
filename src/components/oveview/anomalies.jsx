import Button from "../Button";
import AnomalyTable from "./anomalytable";
import AnomalyHead from "../anomaly/anomlyhead";
import { motion } from "motion/react";

const Anomalies = ({show,setIsShow ,variants}) => {
 
    return(
        <motion.div  className=" lg:w-full w-[95%] mx-auto  gap-5 flex flex-col p-3 rounded-lg border border-solid border-[#E8E8E8] h-auto min-h-[300px]">
          <AnomalyHead/>
          <AnomalyTable
           isShow={show}
           variants={variants}
          />
          <Button
           setIsShow={setIsShow}
           content={show ?  "See Less" : "View all Flagged Anomalies (20)"}
           className={"lg:w-[192px] w-[65%] h-[35px] bg-[#F9FAFB] border border-[#0000001A] text-[#535353] text-[12px] rounded-md ml-16"}
          />
        </motion.div>
    )
}

export default Anomalies