import { motion } from "motion/react";

const PieLines = ({d,draw,stroke}) => {
    return (
        <motion.path 
         variants={draw}
         initial="initial"
         animate="animate"
         d={d}
         id="svg_1" 
         stroke={stroke}
         fill="none"/>

    )
}

export default PieLines