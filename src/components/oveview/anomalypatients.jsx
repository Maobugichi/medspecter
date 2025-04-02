import { motion } from "motion/react"
import { useEffect, useState } from "react"

const AnomalyPatients = ({id,name,d,content, variants}) => {
    const [ fontSize , setFontSize ] = useState('12px');
    const [windowWidth , setWindowWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize' , handleResize);

        return () => {
            window.removeEventListener('resize' , handleResize)
        }
    },[window.innerWidth])

    useEffect(() => {
        if (windowWidth < 600) {
            setFontSize("10px")
        }
    }, [windowWidth])
    const transition = {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
        type:"tween"
    }

    return(
        <motion.div
         initial={{height: 0 , fontSize: 0 , borderBottom: "none"}}
         whileInView={{height: 30 , fontSize: fontSize , transition: transition , borderBottom:"solid" , borderWidth:0.5 , borderColor:"#E8E8E8 ", borderTop:"none", borderLeft:"none", borderRight:"none" }}
         className="flex    justify-between w-full">
            <div className="w-1/2 flex items-center gap-3">
                <motion.span 
                 variants={variants}
                 initial="hidden"
                 whileInView="visible"
                 transition={{times: [0, 0.3, 1],  delay:0.8}}
                 className="bg-[#FC485A] h-[10px] w-[10px] rounded-full">

                </motion.span>
                <p className="text-[#333333]">{id} - {name}</p>
            </div>
            <motion.div 
             variants={variants}
             initial="hidden"
             whileInView="visible"
             transition={{times: [0, 0.3, 1],  delay:0.8}}
             className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={15} viewBox="0 0 256 256"><path fill="#2e2a2a" d={d}></path></svg>
              <p className="text-[#00000066]">{content}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke="#2e2a2a" strokeLinecap="round" d="m9.929 4.858l6.364 6.364a1 1 0 0 1 0 1.414L9.929 19" strokeWidth={1}></path></svg>
            </motion.div>
        </motion.div>
    )
}

export default AnomalyPatients