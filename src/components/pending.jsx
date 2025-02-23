import Keys from "./keys"
import PendingHead from "./pendinghead"
import PendingTable from "./pendingtable"
import { patientInfo } from "../actions"
const Pending = () => {
    return(
        <div className="w-full p-4 rounded-md border text-[14px] border-[#E8E8E8]">
            <PendingHead/>
            <Keys
             info={patientInfo}
            />
            <PendingTable/>
        </div>
    )
}

export default Pending