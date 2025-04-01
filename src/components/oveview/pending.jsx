import Keys from "../keys"
import PendingHead from "./pendinghead"
import PendingTable from "./pendingtable"
import { patientInfo } from "../../actions"
import { useState } from "react"
const Pending = () => {
    const [ count , setCount ] = useState(4) 
    const [width, setWidth] = useState(["w-[130px]" , "w-[110px]","w-[110px]","w-[90px]"]);
    return(
        <div className="w-full h-[74%] lg:h-auto lg:min-h-[600px] lg:w-full lg:p-4 rounded-md border border-solid lg:text-[14px] border-[#E8E8E8] p-3 ">
            <PendingHead/>
            <Keys
             info={patientInfo}
             count={count}
             width={width}
             setCount={setCount}
             contWidth="w-full"
            />
            <PendingTable/>
        </div>
    )
}

export default Pending