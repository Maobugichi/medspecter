import Keys from "./keys"
import PendingHead from "./pendinghead"
import PendingTable from "./pendingtable"

const Pending = () => {
    return(
        <div className="w-full p-4 rounded-md border text-[14px] border-[#E8E8E8]">
            <PendingHead/>
            <Keys/>
            <PendingTable/>
        </div>
    )
}

export default Pending