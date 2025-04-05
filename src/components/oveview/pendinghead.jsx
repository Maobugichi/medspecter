import Blockcont from "./blockcont"
import FilterBox from "../filterbox"
const PendingHead = ({isInfo ,isOpen , setIsInfo , setIsOpen}) => {
    function handleClick() {
        setIsOpen(prev => !prev)
       
    }
    return(
        <div className="flex justify-between w-full  h-15 pt-3  relative">
            <h2 className="md:text-[16px] text-[0.8rem]">
                Pending Cases
            </h2>
            <Blockcont
             onClick={handleClick}
            />

           <FilterBox
             isOpen={isOpen}
             setIsOpen={setIsOpen}
             isInfo={isInfo}
             setIsInfo={setIsInfo}
             extra="lg:w-[25%]  right-39 top-17"
            />
        </div>
    )
}

export default PendingHead