import Keys from "../keys"
import PendingHead from "./pendinghead"
import PendingTable from "./pendingtable"
import { patientInfo } from "../../actions"
import { useState } from "react"
const Pending = ({variants,theme}) => {
    const [ count , setCount ] = useState(4) 
    const [width, setWidth] = useState(["w-[22%] lg:w-[130px] xl:w-[200px] 3xl:w-[220px]" , "w-[23%] lg:w-[110px] xl:w-[180px] 3xl:w-[200px]"," w-[28%] lg:w-[110px] xl:w-[180px] 3xl:w-[180px]","lg:w-[90px] w-[70px]"]);
    const [isInfo,setIsInfo] = useState(patientInfo.slice(0,9))
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="w-full h-[74%]  lg:h-auto 3xl:h-[66%] overflow-hidden lg:w-full lg:pl-4 lg:pr-4 rounded-lg border border-solid lg:text-[14px] border-[#E8E8E8] p-3 grid gap-3">
            <PendingHead
             isInfo={isInfo}
             setIsInfo={setIsInfo}
             isOpen={isOpen}
             theme={theme}
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