import PendingCases from "./pendingcases";
import Keys from "./keys";
import { useState } from "react";
const PatientTable = ({isInfo,setIsInfo}) => {
    
    const tableList = isInfo.map(item => (
        <PendingCases
         id={item.id}
         name={item.name}
         date={item.date}
         diagnosis={item.diagnosis}
         treatment={item.treatment}
         status={item.status}
         doctor={item.doctor}
         number={item.number}
         bgColor={item.bgColor}
         statusColor={item.statusColor}
         statusText={item.statusText}
         width={item.width}
        />
    ))

    console.log(tableList)
    return(
        <div className="w-[97%] ">
            <Keys
             info={isInfo}
             check={true}
            />
            {tableList}
        </div>
    )
}

export default PatientTable