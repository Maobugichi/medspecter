import { useEffect, useState } from "react";
import PendingCases from "../pendingcases";

const PendingTable = ({variants, isInfo}) => {

    const [info, setInfo] = useState(isInfo)
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

   


    const tableItems = info.map((patient, i) => (
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
         spacing="justify-between gap-3 h-[41px]"
         variants={variants}
         transition={{
            duration: 0.3,
            delay: (i * 0.3),
          }}
        />
    ))
    return(
        <div className="h-[90%] grid gap-3">
            {tableItems}
        </div>
    )
}

export default PendingTable