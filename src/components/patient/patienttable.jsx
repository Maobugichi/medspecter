import PendingCases from "../pendingcases";
import Keys from "../keys";
import { useEffect, useState, useRef } from "react";
const PatientTable = ({isInfo,setIsInfo}) => {
    const [thisInfo, setIsThisInfo] = useState(isInfo)
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const [ count , setCount ] = useState(10) 
    const [width, setWidth] = useState(["w-[70px]" , "w-[110px]","w-[80px]","w-[90px]","w-[140px]" , "w-[100px]","w-[115px]","w-[100px]"]);
    const [contWidth, setContWidth] = useState(["w-[500px]" , "w-[90px]","w-[100px]","w-[90px]","w-[200px]" , "w-[120px]","w-[110px]","w-[90px]"]);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize',handleResize);

        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[])

    useEffect(() => {
        if (windowWidth < 600) {
            //setIsInfo(9)
        }
    },[windowWidth]) 
    
    const tableList = thisInfo.map((item ,i) => {
        const widths = contWidth[i]
        return (
             <PendingCases
              id={item.id}
              name={item.name}
              date={item.date}
              diagnosis={item.diagnosis}
              treatment={item.treatment}
              status={windowWidth > 600 ? item.status : null}
              doctor={windowWidth > 600 ? item.doctor : null}
              number={windowWidth > 600 ? item.number : null}
              bgColor={windowWidth > 600 && item.bgColor}
              statusColor={windowWidth > 600 && item.statusColor}
              statusText={item.statusText}
              width={widths}
              spacing="md:gap-5 gap-3"
        />
   
    )})
    

    return(
        <div className="w-full  limitedSize:h-[75%] mx-auto ">
            <Keys
             info={isInfo}
             check={true}
             count={count}
             setCount={setCount}
             width={width}
             contWidth="w-[95%]"
            />
            <div className="grid h-[90%] gap-2">
              {tableList}
            </div>
            
        </div>
    )
}

export default PatientTable