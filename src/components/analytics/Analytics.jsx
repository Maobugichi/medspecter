import AnalyticsBlock from "./AnalyticsBlock";
import PieCont from "./PieCont";
import BarChart from "../BarChart";
import { docInfo } from "../../actions";
import { useState } from "react";
import Bar from "../aidiagnosis/Bar";
import PolyCont from "../PolyCont";
const Analytics = () => {
 const [selectedOption, setSelectedOptions] = useState("weekly");
 const entries = Object.keys(docInfo.slice(0,1) && docInfo.slice(0,1)[0]?.data); 
 
 const axis = [{ y:8,y2:11 , xLabel:120 } ,{ y:43, y2:48 , xLabel: 100 }, { y:80, y2:85 , xLabel:80 }, { y:118, y2:125 ,xLabel:60 }, { y:154 , y2:160, xLabel:40 } , { y:193, y2:198, xLabel:20 },{ y:237, y2:240 ,xLabel:0 }]
 const accuracyAxis = [{y2:25 , xLabel:"100%" } ,{ y2:65 , xLabel: "80%" }, { y2:105 , xLabel:"60%" }, { y2:145 ,xLabel:"40%" }, { y2:195, xLabel:"20%" } ]
    const barItem = docInfo.slice(0,1)[0]?.data[selectedOption && selectedOption].map((item,i) => {
        const x = i === 0 ? 28 :  25 + (i * 64.5); 
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
        const x = i === 0 ? 50 :  50 + (i * 110); 
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
        <div className="w-[85%] grid gap-5">
            <AnalyticsBlock
             docinfo={docInfo}
            />
             <div className="flex justify-between">
                <PieCont/>
                <BarChart
                  width="w-[65%]"
                  height="h-[340px]"
                  barItem={barItem}
                  head="Demographics"
                  axis={axis}
                />
             </div>

             <div className="flex">
                <BarChart
                  width="w-[47%]"
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