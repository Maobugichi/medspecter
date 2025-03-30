import BarHeader from "./aidiagnosis/BarChartHeader";
import Lines from "./Lines";
const BarChart = ({barItem,selectedOption,setSelectedOptions,entries,width,height,head,axis}) => {
    function handleChange(e) {
        setSelectedOptions(e.target.value)
        const myItem = sliceInfo.filter(item => item.name.toLowerCase() == e.target.value.toLowerCase())
        setIsNewItem(myItem)
    }
   
    return(
        <div className={`${width} ${height} border border-solid border-[#ceced3] rounded-md grid place-items-center`}>
            <BarHeader
             entries={entries}
             selectedOption={selectedOption}
             handleChange={handleChange}
             head={head}
            />
            <div className="w-full overflow-auto">
                <svg  height={260} className="w-[95%]  mx-auto ">
                    <Lines
                     axis={axis}
                    />
                    {barItem}   
                </svg>
            </div>
           
    </div>
    )
}


export default  BarChart