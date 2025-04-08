import { motion } from "motion/react"

const PieSvg = ({text , lines, structure}) => {
    return(
        <motion.svg
        width="280" 
        height="224" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:svg="http://www.w3.org/2000/svg"
        className=" pl-3 pt-2 "
        >
       <g >
         <title>Layer 1</title>
            <g>
              {lines}
            </g>

            <g>
              {text}
            </g>

            <g>
               {structure}
            </g>
             
          
       </g>
       </motion.svg>
    )
}

export default PieSvg