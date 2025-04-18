import { motion ,AnimatePresence } from "motion/react";

const FilterBox = ({isOpen,setIsOpen,setIsInfo,isInfo,extra,theme}) => {
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
                        initial={{scale:0, opacity:0}}
                        whileInView={{scale:[0 , 0.5 , 1] , opacity:[0 ,0.5, 1]}}
                        exit={{scale:[1 , 0.5 , 0],opacity:[1 , 0.5 , 0]}}
                        transition={{ times: [0 , 0.5 , 1] }}
                        className={`h-32 cursor-pointer rounded-md border border-[#E4E4E4] border-solid shadow-md  ${!theme ? "bg-[#060606]" : "bg-white"}  w-1/2 ${extra} grid place-content-center gap-4 absolute`}>
                        <li onClick={handleFilter}>ascending</li>
                        <li onClick={handleFilter}>descending</li>
                        <li onClick={handleFilter}>status</li>
                        </motion.ul>
            }
           
        </AnimatePresence>
        
    )
}

export default FilterBox