import { useEffect, useState } from "react";
import { patientInfo } from "../../actions";
import PendingCases from "../pendingcases";

const PendingTable = () => {
    const [info, setInfo] = useState(patientInfo.slice(0,9))
    const [windowWidth , setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize',handleResize)
        } 
       
    },[])

    useEffect(() => {
        if (windowWidth < 600) {
            setInfo(patientInfo.slice(0,9))
        }
    },[windowWidth])
    const tableItems = info.map(patient => (
        <PendingCases
         key={patient.id}
         id={patient.id}
         name={patient.name}
         diagnosis={patient.diagnosis}
         date={patient.date}
         status={ patient.status}
         bgColor={ patient.bgColor}
         statusColor={patient.statusColor}
         statusText={patient.statusText}
         width={patient.width}
         spacing="justify-between gap-3"
        />
    ))
    return(
        <div className="h-[80%] grid">
            {tableItems}
        </div>
    )
}

export default PendingTable