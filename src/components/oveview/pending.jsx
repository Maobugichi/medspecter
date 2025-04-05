import Keys from "../keys"
import PendingHead from "./pendinghead"
import PendingTable from "./pendingtable"
import { patientInfo } from "../../actions"
import { useState } from "react"
const Pending = ({variants}) => {
    const [ count , setCount ] = useState(4) 
    const [width, setWidth] = useState(["w-[130px]" , "w-[110px]","w-[110px]","w-[90px]"]);
    const [isInfo,setIsInfo] = useState(patientInfo.slice(0,9))
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="w-full h-[74%] lg:h-auto lg:min-h-[600px] lg:w-full lg:pl-4 lg:pr-4 rounded-lg border border-solid lg:text-[14px] border-[#E8E8E8] p-3 grid gap-3">
            <PendingHead
             isInfo={isInfo}
             setIsInfo={setIsInfo}
             isOpen={isOpen}
             setIsOpen={setIsOpen}
            />
            <Keys
             info={patientInfo}
             count={count}
             width={width}
             setCount={setCount}
             contWidth="w-full"
            />
            <PendingTable
             variants={variants}
             isInfo={isInfo}
            />
        </div>
    )
}

export default Pending