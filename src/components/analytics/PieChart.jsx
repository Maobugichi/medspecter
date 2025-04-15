import { motion } from "motion/react";
import PieStructure from "./PieStructure";
import PieLines from "./PieLines";
import PieText from "./PieText";
import { svgContent } from "../../actions";
import PieSvg from "./PieSvg";

const PieChart =  ({ theme }) => {

  const draw = {
      initial:{ pathLength: 0, strokeDasharray: 1000, strokeDashoffset: 1000, fillOpacity: 0 },
      animate:{ pathLength: 1, strokeDashoffset: 0, fillOpacity: [0, 0.5 ,1] , transition: {default: {duration:0.5 , delay:0}, fillOpacity:{duration:.3,delay : 0.2 , type: "tween"}} }
  
  }

  const drawLines = {
    initial:{ pathLength: 0, strokeDasharray: 1000, strokeDashoffset: 1000, },
    animate:{ pathLength: 1, strokeDashoffset: 0, transition: {default: {duration:0.5 , delay:.5}} }

 }

  
  const lines = svgContent.lines.map(line => 
    (<PieLines
     d={line.d}
     stroke={line.stroke}
     draw={drawLines}
     
    />)
  )



  const text = svgContent.text.map(text => (
    <PieText
     content={text.content}
     x={text.x}
     y={text.y}
     draw={draw}
     theme={theme}
    />
  ))

  const structure = svgContent.pie.map(item => (
    <PieStructure
     d={item.d}
     stroke={item.stroke}
     fill={item.fill}
     draw={draw}
    />
  ))
 
    return(
      <div className=" h-60 relative w-full grid place-items-center md:w-[70%] md:mx-auto">
        <PieSvg
         lines={lines}
         text={text}
         structure={structure}
        />
      </div>
    )
}

export default PieChart