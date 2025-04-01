import { useContext , useEffect, useState } from "react"
import PolyLine from "./PolyLine"
import { ShowContext } from "../ContextProvider"
import Streak from "./Streak"
import warning from "../../assets/warningCircle.svg"
import BarChart from "../BarChart"
import InfoFlex from "./InfoFlex";
import Bar from "./Bar"
import PolyCont from "../PolyCont"
import DiagHead from "./DiagHead"

const  AIdiag = () => {
    const [ xAxis , setXAxis ] = useState({
        x:30,
        x2:30,
        x3:120
    })
    const [ windowWidth , setWindowWidth ] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
             setWindowWidth(width);
            if (width < 400) {
                setXAxis({
                    x:25,
                    x2:23,
                    x3:72
                })
            } else if (width > 400 && width < 600) {
                setXAxis({
                    x:20,
                    x2:20,
                    x3:75
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
              labelY={270}
              labelX={10}
              width={49.59}
              fill="#357AF6"
              setSelectedOptions={setSelectedOptions}
              entries={entries}
            />
        )
    })
               
    
    return(
        <div className="h-auto flex flex-col min-h-[120vh] md:min-h-[100vh] lg:w-[85%] w-full md:w-[95%] md:mx-auto md:flex md:flex-col  lg:grid gap-8">
            <DiagHead/>
            <div className="flex gap-10 xl:flex-row flex-col w-full ">
                <div className=" xl:w-[70%]  w-[95%]  mx-auto h-auto flex flex-col lg:grid min-h-[80vh] md:min-h-[50vh] xl:min-h-[90vh] limitedSize:flex limitedSize:flex-col limitedSize:gap-10 gap-10">
                    <PolyCont
                    width="lg:w-[97%] w-full mx-auto"
                    />
                    <BarChart
                    barItem={barItem}
                    width="lg:w-[97%] w-full md:w-full mx-auto"
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
           
        </div>
    )
}

export default AIdiag