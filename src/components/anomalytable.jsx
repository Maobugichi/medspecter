import { anomalyPatient } from "../actions"
import AnomalyPatients from "./anomalypatients"

const AnomalyTable = ({isShow}) => {
    const anomaly = anomalyPatient.slice(0,7).map(item => (
        <AnomalyPatients
         id={item.id}
         name={item.name}
         d={item.d}
         content={item.content}
        />
    ))

    const anomalyCont = anomalyPatient.slice(7).map(item => (
        <AnomalyPatients
         id={item.id}
         name={item.name}
         d={item.d}
         content={item.content}
        />
    ))
    return(
        <div className="h-auto grid gap-1">
            {anomaly}
            {isShow && anomalyCont}
        </div>
    )
}

export default AnomalyTable