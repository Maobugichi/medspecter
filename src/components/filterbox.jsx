import { motion ,AnimatePresence } from "motion/react";

const FilterBox = ({isOpen,setIsOpen,setIsInfo,isInfo}) => {
    let setInfo
    function handleFilter(e) {
        if (e.target.innerText == "ascending") {
             setInfo = isInfo.sort((a,b)=> {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          })
        } else if (e.target.innerText == "descending"){
            
            setInfo = isInfo.sort((a,b)=> {
                return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
          })
        } else {
            setInfo = isInfo.sort((a,b)=> {
                return a.status.toLowerCase().localeCompare(b.status.toLowerCase())
          })
        }
      setIsInfo(setInfo)
      setIsOpen(prev => !prev)
    }
    
    return(
        <AnimatePresence>
            {
                isOpen &&<motion.ul 
                        className="h-32 cursor-pointer rounded-md border border-[#E4E4E4]   bg-white  w-1/2 lg:w-[15%] grid place-content-center gap-4 absolute right-0 top-10">
                        <li onClick={handleFilter}>ascending</li>
                        <li onClick={handleFilter}>descending</li>
                        <li onClick={handleFilter}>status</li>
                        </motion.ul>
            }
           
        </AnimatePresence>
        
    )
}

export default FilterBox