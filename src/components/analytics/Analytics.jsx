import AnalyticsBlock from "./AnalyticsBlock";
import PieCont from "./PieCont";
import BarChart from "../BarChart";
import { docInfo } from "../../actions";
import { useContext, useEffect, useState } from "react";
import Bar from "../aidiagnosis/Bar";
import PolyCont from "../PolyCont";
import { ShowContext } from "../ContextProvider";
const Analytics = () => {
 const [selectedOption, setSelectedOptions] = useState("weekly");
 const entries = Object.keys(docInfo.slice(0,1) && docInfo.slice(0,1)[0]?.data); 
 const [ xAxis , setXAxis ] = useState({x:40,x2:40,x3:100})
 const [ windowWidth , setWindowWidth ] = useState(window.innerWidth)
 const [ svgAttri , setSvgAttri ] = useState({
  height:160,
  width: 530
  });
 const [ scale , setScale ] = useState('scale(0.68)');
 const { theme } = useContext(ShowContext)
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
        const x = i === 0 ? 30 :  30 + (i * 66.3); 
        return(
            <Bar
              x={x}
              y={240 - item.value}
              height={item.value}
              label={item.label}
              labelY={255}
              labelX={15}
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
        <div className={`w-[95%] lg:w-[85%] mx-auto 3xl:mt-5 3xl:w-[75%]  flex flex-col h-screen  xl:h-[160vh]  3xl:h-[100vh]  gap-5 ${!theme ? "text-[#ffffff]" : "text-[#060606]"}`}>
          <div className=" 3xl:h-[25%] grid gap-3">
            <h2 className="text-[24px] font-semibold w-[95%] ">Analytics</h2>
              <AnalyticsBlock
              docinfo={docInfo}
              />
          </div>
         
            <div className="xl:h-[70%]  grid gap-4">
              <div className="flex h-auto lg:flex-row flex-col lg:justify-between gap-5">
                  <PieCont
                  theme={theme}
                  />
                  <BarChart
                    width="lg:w-[65%] "
                    height="h-[340px]"
                    barItem={barItem}
                    head="Demographics"
                    axis={axis}
                    x1={windowWidth < 600 ? 30 : 50}
                    x2={windowWidth < 600 ? 755 : 650}
                    x={windowWidth < 600 ? 0 : 5}
                    svgHeight={260}
                    svgWidth={690}
                    container="w-full lg:w-full overflow-auto lg:overflow-hidden "
                  />
              </div>

              <div className="flex flex-col h-auto lg:flex-row w-full gap-5">
                <PolyCont
                width="lg:w-[60%] md:w-full w-full"
                svgAttri={svgAttri}
                scale={scale}
                top="lg:top-25"
                setSvgAttri={setSvgAttri}
                />
                  <BarChart
                    width="lg:w-[45%] md:w-full w-full"
                    barItem={barItem2}
                    height="h-[303px]"
                    head="AI Accuracy Overview"
                    axis={accuracyAxis}
                    svgHeight={225}
                    svgWidth={windowWidth < 600 ? 360 : 430}
                  />
              </div>
            </div>
             
        </div>
    )
}

export default Analytics