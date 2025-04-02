import Blockcont from "./blockcont"

const PendingHead = () => {
    return(
        <div className="flex justify-between w-full  h-20 pt-3 items-center">
            <h2 className="md:text-[16px] text-[0.8rem]">
                Pending Cases
            </h2>
            <Blockcont/>
        </div>
    )
}

export default PendingHead