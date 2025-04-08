import { motion } from "motion/react"

const PieText = ({x,y,content,draw,theme}) => {
    return(
        <motion.text 
        variants={draw}
        initial="initila"
        whileInView="animate"
        className="text-[12px]" 
        x={x} 
        y={y} 
        fill={!theme ? "#ffffff" : "#333333CC"}
        >{content}</motion.text>
    )
}

export default PieText