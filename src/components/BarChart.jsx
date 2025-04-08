import BarHeader from "./aidiagnosis/BarChartHeader";
import Lines from "./Lines";
const BarChart = ({barItem,selectedOption,setSelectedOptions,entries,width,height,head,axis,x1, x2,x, svgHeight}) => {
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
           
            <svg  
            style={{ transform:  'scale(0.93)'}} 
            height={svgHeight} 
            className="w-full" 
            overflow="auto"
                >
                <Lines
                    axis={axis}
                    x1={x1}
                    x2={x2}
                    x={x}
                />
                {barItem}   
            </svg>
    </div>
    )
}


export default  BarChart