import { motion } from "motion/react"

const PendingCases = ({id,name,diagnosis,date,status,bgColor,statusColor,statusText,doctor,number,treatment,width , spacing , variants , transition}) => {
    return(
        <motion.div 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={transition}
        className={`${bgColor} flex  text-[10px]  lg:text-[14px] w-full  text-[#000000] ${spacing} items-center p-2`}>
            {id && <input className="w-2 md:w-10" type="checkbox" />}
            {id &&  <p className={`w-auto lg:min-w-[60px] flex  items-start `}>{id}</p>}
             <p className={` md:w-auto md:min-w-[120px]  whitespace-wrap flex items-start break-word w-[60px] `}>{name}</p>    
             <p className={` flex items-start md:w-auto ${id ? "w-[50px] xxSmall:min-w-[40px] " : "w-[55px] lg:min-w-[100px] smallSize:min-w-[80px] break-word"} md:min-w-[80px] whitespace-wrap `}>{diagnosis}</p>
             <p className={` flex items-start  md:w-auto w-[70px]   lg:min-w-[80px]`}>{date}</p>
            {treatment &&   <p className={`w-auto min-w-[70px] md:min-w-[100px] lg:min-w-[135px] whitespace-wrap   `}>{treatment}</p>}
            <p className={` grid place-content-center h-[23px] md:w-[100px] w-[80px] text-[9px] ${statusColor} ${statusText} rounded-2xl`}>{status}</p>
            {doctor && <p className={` flex items-start w-auto min-w-[100px]`}>{doctor}</p>}
            {number && <p className={` flex items-start w-auto min-w-[150px] `}>{number}</p>}
        </motion.div>
    )
}

export default PendingCases