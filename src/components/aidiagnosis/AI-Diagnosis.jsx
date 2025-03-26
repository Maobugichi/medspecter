import { useContext , useEffect, useState } from "react"
import PolyLine from "./PolyLine"
import { ShowContext } from "../ContextProvider"
import Streak from "./Streak"
import warning from "../../assets/warningCircle.svg"
import BarChart from "../BarChart"
import InfoFlex from "./InfoFlex";
import Bar from "./Bar"
import PolyCont from "../PolyCont"

const  AIdiag = () => {
    const [ xAxis , setXAxis ] = useState({
        x:90,
        x2:85,
        x3:120
    })
    const [ windowWidth , setWindowWidth ] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
             setWindowWidth(width);

            if (width < 600) {
                setXAxis({
                    x:20,
                    x2:20,
                    x3:68
                })
            }
        }
        window.addEventListener('resize', handleResize);

        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])

   
    const { newItem , sliceInfo } = useContext(ShowContext)
    const streakCount = Object.entries(newItem[0].streakProgress)
    const streak = streakCount.map(([key,value]) => {
        return <Streak
                 title={key}
                 days={value}
                />
    })
    const [selectedOption, setSelectedOptions] = useState("weekly");
    const entries = Object.keys(newItem && newItem[0]?.data); 
    const axis = [{ y:10,y2:13 , xLabel:120 } ,{ y:55, y2:58 , xLabel: 100 }, { y:95, y2:98 , xLabel:80 }, { y:135, y2:140 ,xLabel:60 }, { y:180 , y2:185, xLabel:40 } , { y:220, y2:225, xLabel:20 },{ y:260, y2:265 ,xLabel:0 }]
    const barItem = newItem[0]?.data[selectedOption && selectedOption].map((item,i) => {
        const x = i === 0 ? xAxis.x :  xAxis.x2 + (i * xAxis.x3); 
        return(
            <Bar
              x={x}
              y={260 - item.value}
              height={item.value}
              label={item.label}
              labelY={275}
              labelX={10}
              width={49.59}
              fill="#357AF6"
              setSelectedOptions={setSelectedOptions}
              entries={entries}
            />
        )
    })
               
    
    return(
        <div className="flex justify-around lg:flex-row flex-col  h-auto min-h-[120vh] lg:w-[85%] w-full">
            <div className=" lg:w-[70%]  w-[95%] mx-auto h-auto grid min-h-[90vh]">
                <PolyCont
                 width="md:w-[97%] w-full"
                />
                <BarChart
                 barItem={barItem}
                 width="lg:w-[97%] w-full"
                 height="h-[383px]"
                 head="Progress Overtime"
                 axis={axis}
                />
            </div>
            <InfoFlex
             streak={streak}
             warning={warning}
            />
        </div>
    )
}

export default AIdiag