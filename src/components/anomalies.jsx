import AnomalyButton from "./anomalybutton"
import AnomalyTable from "./anomalytable"
import AnomalyHead from "./anomlyhead"
import { useState } from "react"

const Anomalies = () => {
    const [isShow, setIsShow] = useState(false)

    return(
        <div className=" w-full grid gap-2 h-[427px] p-3 rounded-md border border-[#E8E8E8]">
          <AnomalyHead/>
          <AnomalyTable
           isShow={isShow}
          />
          <AnomalyButton
           isShow={isShow}
           setIsShow={setIsShow}
          />
        </div>
    )
}

export default Anomalies