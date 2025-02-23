import { motion ,AnimatePresence } from "motion/react";
import { useState } from "react";
const FilterBox = ({isOpen,setIsInfo,isInfo}) => {
    function handleFilter() {
      const setInfo = isInfo.sort((a,b)=> {
            return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      })

     console.log(setInfo)
      setIsInfo(setInfo)
    }
    
    return(
        <AnimatePresence>
            {
                isOpen &&<motion.ul 
                        className="h-24 rounded-md border border-[#E4E4E4]  bg-white w-[15%] grid place-content-center absolute right-0 top-10">
                        <li onClick={handleFilter}>ascending</li>
                        <li>descending</li>
                        <li>status</li>
                        </motion.ul>
            }
           
        </AnimatePresence>
        
    )
}

export default FilterBox