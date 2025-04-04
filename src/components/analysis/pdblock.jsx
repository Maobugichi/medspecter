import { motion } from "motion/react"

const PdBlock = ({src,alt,age,title,content, variants,transition}) => {
   
    return(
        <motion.div 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={transition}
        viewport={{once:true}}
        className="w-[45%] h-[56px] border flex items-center justify-center border-[#C4C4C4]  rounded-md gap-3">
            <div className="bg-[#1E40AF33] w-9 h-9 grid place-content-center rounded-md">
                <img src={src} alt={alt} />
            </div>
            <p className="flex flex-col text-[12px] w-[55%]">{title} <span>{content}</span></p>
        </motion.div>
    )
}

export default PdBlock