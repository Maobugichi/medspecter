import Select from "./select";

const DetailsBox = ({info,children,sel,selectedOption, setSelectedOptions,handleChange,sliceInfo,patient,patientName,className,img,svg}) => {
    return(
        <div className={`${className} border border-[#E8E8E8] grid`}>
            <div className={`w-[95%] h-[50px] border-b border-[#C4C4C4] flex ${img || svg ? "gap-3" : "justify-between"} items-center mx-auto mt-5 pb-2`}>
               {img && <img src={img}/>}
               {svg && <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 256 256"><path fill={svg.fill} d={svg.d}></path></svg>}
                <h3>{info}</h3>
                {sel && <Select
                info={patient}
                selectedOption={selectedOption}
                setSelectedOptions={setSelectedOptions}
                handleChange={handleChange}
                className="text-sm border p-3 border-[#C4C4C4] rounded-md"
                sliceInfo={sliceInfo}
              />}
            </div>

           {patientName && <h4 className="text-[14px] flex flex-col ml-4">
                {patientName}
                <span className="text-[12px]">Patient</span>
            </h4> }
            <div className="w-[95%] mx-auto">
            {children}
            </div>
           
        </div>
    )
}

export default DetailsBox