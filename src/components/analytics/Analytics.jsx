import AnalyticsBlock from "./AnalyticsBlock";
import PieCont from "./PieCont";
import BarChart from "../BarChart";
import { docInfo } from "../../actions";
import { useEffect, useState } from "react";
import Bar from "../aidiagnosis/Bar";
import PolyCont from "../PolyCont";
const Analytics = () => {
 const [selectedOption, setSelectedOptions] = useState("weekly");
 const entries = Object.keys(docInfo.slice(0,1) && docInfo.slice(0,1)[0]?.data); 
 const [ xAxis , setXAxis ] = useState({x:40,x2:40,x3:100})
 const [ windowWidth , setWindowWidth ] = useState(window.innerWidth)

 useEffect(() => {
    const handleResize = () => {
       setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize' , handleResize);
     return () => {
      window.removeEventListener('resize' , handleResize)
     }
 }, [])

  useEffect(() => {

    if (windowWidth < 600) {
        setXAxis({
          x:40,
          x3:85
        })
    }
  },[windowWidth])
 const axis = [{ y:8,y2:11 , xLabel:120 } ,{ y:43, y2:48 , xLabel: 100 }, { y:80, y2:85 , xLabel:80 }, { y:118, y2:125 ,xLabel:60 }, { y:154 , y2:160, xLabel:40 } , { y:193, y2:198, xLabel:20 },{ y:237, y2:240 ,xLabel:0 }]
 const accuracyAxis = [{y2:25 , xLabel:"100%" } ,{ y2:65 , xLabel: "80%" }, { y2:105 , xLabel:"60%" }, { y2:145 ,xLabel:"40%" }, { y2:195, xLabel:"20%" } ]
    const barItem = docInfo.slice(0,1)[0]?.data[selectedOption && selectedOption].map((item,i) => {
        const x = i === 0 ? 28 :  25 + (i * 63); 
        return(
            <Bar
              x={x}
              y={240 - item.value}
              height={item.value}
              label={item.label}
              labelY={255}
              labelX={10}
              width={46.31}
              fill="#357AF6"
              setSelectedOptions={setSelectedOptions}
              entries={entries}
            />
        )
    })

   const barItem2 = docInfo.slice(0,1)[0]?.aiAccuracy[selectedOption && selectedOption].map((item,i) => {
        const x = i === 0 ? xAxis.x :  xAxis.x + (i * xAxis.x3); 
        return(
            <Bar
              x={x}
              y={195 - item.value}
              height={item.value}
              label={item.label}
              labelY={220}
              labelX={10}
              width={46.31}
              fill={item?.fill}
              setSelectedOptions={setSelectedOptions}
              entries={entries}
            />
        )
    })
    return(
        <div className="lg:w-[85%] mx-auto w-[95%] grid gap-5 ">
          <h2 className="text-[24px] font-semibold">AI Diagnosis Report</h2>
            <AnalyticsBlock
             docinfo={docInfo}
            />
             <div className="flex lg:flex-row flex-col lg:justify-between gap-5">
                <PieCont/>
                <BarChart
                  width="lg:w-[65%] "
                  height="h-[340px]"
                  barItem={barItem}
                  head="Demographics"
                  axis={axis}
                />
             </div>

             <div className="flex flex-col md:flex-row w-full gap-5">
              <PolyCont
               width="md:w-[60%] w-full"
              />
                <BarChart
                  width="lg:w-[45%] w-full"
                  barItem={barItem2}
                  height="h-[303px]"
                  head="AI Accuracy Overview"
                  axis={accuracyAxis}
                />
             </div>
        </div>
    )
}

export default Analytics