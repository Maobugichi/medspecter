import Select from "../select";
import { ShowContext } from "../ContextProvider";
import { useContext , useState } from "react";

const DiagHead = () => {
    const [selectedOption, setSelectedOptions] = useState();
    function handleChange(e) {
        setSelectedOptions(e.target.value)
        const myItem = sliceInfo.filter(item => item.name.toLowerCase() == e.target.value.toLowerCase())
        setIsNewItem(myItem)
    }

    const { sliceInfo } = useContext(ShowContext)
    return(
        <div className=" h-20 grid gap-5 w-[90%] mx-auto lg:w-full">
            <h2 className="text-[20px] md:text-[24px] font-semibold">AI Diagnosis Report</h2>
            <div className="flex justify-between w-full items-center">
              <h3 className="text-[12px] md:text-[16px] font-semibold">Patient Progress/Streak</h3> 

              <Select
                info=""
                selectedOption={selectedOption}
                setSelectedOptions={setSelectedOptions}
                handleChange={handleChange}
                className="text-sm border p-2 md:p-3 border-[#C4C4C4] border-solid rounded-md"
                sliceInfo={sliceInfo} />
        </div>
        </div>
       
    )
}


export default DiagHead