import { motion } from "motion/react"


const OverviewBlocks = ({src,text,arrSrc,percentage,amount,width , variants , transition}) => {
    return(
        <motion.div 
         initial={{opacity: 0, scale: 0}}
         whileInView={{opacity: 1 , scale : 1} }
         transition={transition}
         viewport={{once:true}}
         className={`${width}  xl:h-[80%] lg:h-[70%] h-[48%] 3xl:h-[90%] p-2  border xs:bg-red-500 border-[#E8E8E8] border-solid  grid place-items-center rounded-lg `}>
            <div className="flex lg:w-[90%] w-[90%] mx-auto text-[12px] justify-between xl:mt-5">
                <div className="flex items-center gap-2 h-5  ">
                  <img className="w-[25%]" src={src} alt="" />
                  <p className="text-[9px] ">{text}</p>
                </div>
                <div className="flex items-center gap-1 ">
                    <img className="w-[25%]" src={arrSrc} alt="" />
                    <span className=" text-[10px]">{percentage}</span>
                </div>
                
            </div>
            <div className="flex flex-col gap-1 w-[90%] ">
                <span className="text-[24px]">{amount}</span>
                <span className="text-[12px]">This week</span>
            </div>
        </motion.div>
    )
}

export default OverviewBlocks