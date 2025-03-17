import Blockcont from "./blockcont"

const PendingHead = () => {
    return(
        <div className="flex justify-between w-full items-center">
            <h2 className="text-[16px]">
                Pending Cases
            </h2>
            <Blockcont/>
        </div>
    )
}

export default PendingHead