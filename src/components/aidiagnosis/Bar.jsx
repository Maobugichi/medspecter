import { motion } from "motion/react"

const Bar = ({width,height,x,y,label,labelY,fill, labelX}) => {
  const draw = {
    initial:{ pathLength: 0, strokeDasharray: 1000, strokeDashoffset: 1000, fillOpacity: 0 },
    animate:{ pathLength: 1, strokeDashoffset: 0, fillOpacity: [0, 0.5 ,1] , transition: {default: {duration:5 , delay:0}, fillOpacity:{duration:2,delay : 5 , type: "tween"}} }

}
    return(
        <>
          <motion.rect
           variants={draw}
           initial={{ height: 0, y: 500 }}
           animate={{ height:height, y:[500 , 400 , 300 , 200 , 100 , 0] }}
           transition={{ duration:0.5}}
           viewport={{once: true}}
           stroke={fill}

           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
           width={width}  x={x} y={y} fill={fill} />
          <text x={x} y={labelY} font-size="9" fill="#9c9ca0">{label}</text>
          
        </>
    )
}

export default Bar