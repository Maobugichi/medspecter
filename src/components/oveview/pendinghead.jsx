import Blockcont from "./blockcont"

const PendingHead = () => {
    return(
        <div className="flex justify-between w-full items-center ">
            <h2 className="lg:text-[16px] text-[12px]">
                Pending Cases
            </h2>
            <Blockcont/>
        </div>
    )
}

export default PendingHead