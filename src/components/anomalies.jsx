import AnomalyButton from "./anomalybutton"
import AnomalyTable from "./anomalytable"
import AnomalyHead from "./anomlyhead"

const Anomalies = () => {
    return(
        <div className=" w-full grid gap-2 h-[427px] p-3 rounded-md border border-[#E8E8E8]">
          <AnomalyHead/>
          <AnomalyTable/>
          <AnomalyButton/>
        </div>
    )
}

export default Anomalies