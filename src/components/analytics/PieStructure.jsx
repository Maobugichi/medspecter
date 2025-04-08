import { motion } from "motion/react";

const PieStructure = ({d,draw,stroke,fill}) => {
    return (
       <g>
         <motion.path 
         variants={draw}
         initial="initial"
         animate="animate"
         viewport={{once: true}}
         d={d}
         fill={fill}
         stroke={stroke}
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
         id="svg_1"/>
         </g> 
    )
}


export default PieStructure