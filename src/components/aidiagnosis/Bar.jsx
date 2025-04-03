import { motion } from "motion/react"

const Bar = ({width,height,x,y,label,labelY,fill}) => {
  const draw = {
    initial:{ pathLength: 0, strokeDasharray: 1000, strokeDashoffset: 1000, fillOpacity: 0 },
    animate:{ pathLength: 1, strokeDashoffset: 0, fillOpacity: [0, 0.5 ,1] , transition: {default: {duration:5 , delay:0}, fillOpacity:{duration:2,delay : 5 , type: "tween"}} }

}
    return(
        <>
          <motion.rect
          variants={draw}
          initial="initial"
          whileInView="animate"
          viewport={{once: true}}
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          width={width} height={height} x={x} y={y} fill={fill} />
          <text x={x} y={labelY} font-size="9" fill="#333">{label}</text>
          
        </>
    )
}

export default Bar