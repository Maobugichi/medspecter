import PendingCases from "../pendingcases";
import Keys from "../keys";
import { useEffect, useState, useRef } from "react";
const PatientTable = ({isInfo,setIsInfo ,variants}) => {
    const [thisInfo, setIsThisInfo] = useState(isInfo)
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
    const [ count , setCount ] = useState(12) 
    const [width, setWidth] = useState(["w-[10%] lg:w-[70px] " , "w-[18%] lg:w-[110px] xl:w-[120px] 3xl:w-[125px]","w-[17%]  lg:w-[80px] xl:w-[85px] 3xl:w-[90px]","w-[19%] lg:w-[90px] xl:w-[80px] ","lg:w-[140px] xl:w-[150px]" , "w-[100px]","w-[115px]","w-[100px] 3xl:w-[175px]"]);
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
            setCount(15)
        }
       
    },[windowWidth]) 
 
    const tableList = thisInfo.map((item ,i) => {
        const widths = contWidth[i]
        return (
             <PendingCases
              key={item.id}
              id={item.id}
              name={item.name}
              date={item.date}
              diagnosis={item.diagnosis}
              treatment={item.treatment}
              status={windowWidth > 600 ? item.status : null}
              doctor={windowWidth > 800 ? item.doctor : null}
              number={windowWidth > 800 ? item.number : null}
              bgColor={item.bgColor}
              statusColor={windowWidth > 600 && item.statusColor}
              statusText={item.statusText}
              width={widths}
              variants={variants}
              transition={{
                duration: 0.5,
                delay: (i * 0.2),
              }}
              spacing="md:gap-5 gap-2.5 smallSize:gap-2 h-16 xl:h-[55px] 3xl:h-14"
        />
   
    )})
    

    return(
        <div className="w-[98%]  lg:w-full 3xl:w-[93%]   mx-auto border border-solid border-[#E8E8E8]   pb-5 rounded-xl">
            <Keys
             info={isInfo}
             check={true}
             count={count}
             setCount={setCount}
             width={width}
             contWidth="w-[95%]"
            />
            <div className="grid w-full   overflow-hidden h-[95%] gap-2">
              {tableList}
            </div>
            
        </div>
    )
}

export default PatientTable