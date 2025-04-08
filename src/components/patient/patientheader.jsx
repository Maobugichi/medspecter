import { pending } from "../../actions";
import Block from "../../components/Blocks";
import DownloadBtn from "../downloadbtn";
import FilterBox from "../filterbox";

const PatientHeader = ({isOpen,setIsOpen,isInfo,setIsInfo,theme}) => {
    function handleClick() {
        setIsOpen(prev => !prev)
       
    }
    return(
        <div className="flex justify-between relative  w-full mx-auto ">
            <h2 className="text-[20px] lg:text-[29px] font-semibold">
                Patient List
            </h2>
            <div className="flex gap-2 md:gap-4">
                <DownloadBtn/>
                <Block
                 text={pending[0].text}
                 d={pending[0].d}
                 viewBox={pending[0].viewBox}
                 fill={!theme ? "#ffffff" : pending[0].fill}
                 onClick={handleClick}
                
                />
                <div className="h-[36px] w-[36px] border border-[#E4E4E4] border-solid rounded-md grid place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 256 256"><path fill={!theme ? "#ffffff" : "#2e2a2a"} d="M118 60a10 10 0 1 1 10 10a10 10 0 0 1-10-10m10 58a10 10 0 1 0 10 10a10 10 0 0 0-10-10m0 68a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></path></svg>
                </div>
            </div>

            <FilterBox
             isOpen={isOpen}
             setIsOpen={setIsOpen}
             isInfo={isInfo}
             setIsInfo={setIsInfo}
             extra="lg:w-[15%]  right-0 top-10"
             theme={theme}
            />
           
        </div>
    )
}

export default PatientHeader