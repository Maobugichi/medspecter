import { motion } from "motion/react"

const Button = ({setIsShow,content,className}) => {
    function handleClick() {
        setIsShow(prev => !prev)
    }
    return(
        <motion.button 
        initial={{opacity: 0 , scale: 0}}
        animate={{opacity: [0, 0.5 , 1] , scale: [0 , 0.5 , 1]}}
        transition={{delay: 1.3 , times: [0 , 0.3 , 1]}}
        onClick={handleClick} className={`${className}`}>
           {content}
        </motion.button>
    )
}

export default Button