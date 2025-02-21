import { patientInfo } from "../actions";
import PendingCases from "./pendingcases";

const PendingTable = () => {
    const tableItems = patientInfo.map(patient => (
        <PendingCases
         key={patient.id}
         id={patient.id}
         name={patient.name}
         diagnosis={patient.diagnosis}
         date={patient.date}
         status={patient.status}
         bgColor={patient.bgColor}
         statusColor={patient.statusColor}
         statusText={patient.statusText}
        />
    ))
    return(
        <div>
            {tableItems}
        </div>
    )
}

export default PendingTable