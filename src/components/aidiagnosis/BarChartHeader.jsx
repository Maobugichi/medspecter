import Select from "../select"

const BarHeader = ({entries,selectedOption,handleChange,head}) => {
    return(
        <div className=" h-[72px] items-center w-full grid ">
            <div className="flex justify-between w-[95%]  mx-auto">
            <h3 className="text-[14px] font-semibold">{head}</h3>
            <Select
             sliceInfo={entries}
             selectedOption={selectedOption}
             handleChange={handleChange}
             className="text-sm border p-1 border-[#C4C4C4] rounded-md"
            />
            </div>
          
        </div>
    )
}
export default BarHeader