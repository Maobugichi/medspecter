import { anomalyPatient } from "../actions"
import AnomalyPatients from "./anomalypatients"

const AnomalyTable = () => {
    const anomaly = anomalyPatient.map(item => (
        <AnomalyPatients
         id={item.id}
         name={item.name}
         d={item.d}
         content={item.content}
        />
    ))
    return(
        <div className="h-full ">
            {anomaly}
        </div>
    )
}

export default AnomalyTable