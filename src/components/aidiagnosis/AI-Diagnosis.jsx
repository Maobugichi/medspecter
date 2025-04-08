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
import ConfidenceItem from "./ConfidenceItem"
import AiItem from "./AiItem"

const  AIdiag = () => {
    const [ isShow , setIsShow ] = useState(false);
    const [ xAxis , setXAxis ] = useState({
        x:63,
        x2:75,
        x3:130
    });
    const [ scale , setScale ] = useState('scale(0.83)');
    const [ svgAttri , setSvgAttri ] = useState({
        height:196,
        width: 650
    });
    const [ windowWidth , setWindowWidth ] = useState(window.innerWidth);
    const { theme } = useContext(ShowContext)
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
    },[windowWidth])

   
    const { newItem } = useContext(ShowContext)
    const streakCount = Object.entries(newItem[0].streakProgress)
    const streak = streakCount.map(([key,value]) => {
        return <Streak
                 title={key}
                 days={value}
                />
    })

    const aiDiag = Array.from(Object.values(newItem[0].insight)).map(item => {
        return(
            <AiItem content={item}/>
        )
    })

    const scores =  isShow ? 
    newItem[0].confidenceScores.map(score => (
      <ConfidenceItem date={score.date} diagnosis={score.diagnosis} percentage={score.rate}/>
    )) 
    : 
    newItem[0].confidenceScores.slice(0, 2).map(score => (
      <ConfidenceItem date={score.date} diagnosis={score.diagnosis} percentage={score.rate}/>
    ));
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
        <div className={`h-auto flex flex-col min-h-[120vh] md:min-h-[100vh] lg:w-[85%] w-full md:w-[95%] md:mx-auto md:flex md:flex-col  lg:grid gap-8 ${!theme ? "text-white" : "text-[#060606]"}`}>
            <DiagHead/>
            <div className="flex gap-5 xl:flex-row flex-col w-full ">
                <div className=" xl:w-[85%]  w-[95%]  mx-auto h-auto flex flex-col lg:grid min-h-[80vh] md:min-h-[50vh] xl:min-h-[90vh] limitedSize:flex limitedSize:flex-col limitedSize:gap-10 gap-10">
                    <PolyCont
                     width="lg:w-full w-full mx-auto"
                     scale={scale}
                     svgAttri={svgAttri}
                     top="lg:top-20"
                     setSvgAttri={setSvgAttri}
                    />
                    <BarChart
                     barItem={barItem}
                     width="lg:w-[97%] w-full md:w-full mx-auto"
                     height="h-[383px]"
                     head="Progress Overtime"
                     axis={axis}
                     x1={windowWidth < 600 ? 30 : 60}
                     x2={windowWidth < 600 ? 355 : 650}
                     x={windowWidth < 600 ? 5 : 23}
                     svgHeight={285}
                     svgWidth={700}
                    />
                </div>
                <InfoFlex
                 streak={streak}
                 scores={scores}
                 warning={warning}
                 setIsShow={setIsShow}
                 aiDiag={aiDiag}
                 theme={theme}
                />
            </div>
           
        </div>
    )
}

export default AIdiag