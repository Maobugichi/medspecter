import AnomalyButton from "./anomalybutton"
import AnomalyTable from "./anomalytable"
import AnomalyHead from "./anomlyhead"

const Anomalies = () => {
    return(
        <div className=" w-full h-[427px] p-2 grid rounded-md border border-[#E8E8E8]">
          <AnomalyHead/>
          <AnomalyTable/>
          <AnomalyButton/>
        </div>
    )
}

export default Anomalies