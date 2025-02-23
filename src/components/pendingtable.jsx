import { patientInfo } from "../actions";
import PendingCases from "./pendingcases";

const PendingTable = () => {
    const tableItems = patientInfo.slice(0,9).map(patient => (
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
         width={patient.width}
        />
    ))
    return(
        <div>
            {tableItems}
        </div>
    )
}

export default PendingTable