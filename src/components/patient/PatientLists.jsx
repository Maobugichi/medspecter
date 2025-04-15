import PageCount from "./pagecount";
import PatientHeader from "./patientheader";
import PatientTable from "./patienttable";
import { useContext, useEffect, useState } from "react";
import { patientInfo } from "../../actions";
import { ShowContext } from "../ContextProvider";
const PatientList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isInfo,setIsInfo] = useState(patientInfo.slice(9))
    const [ windowWidth , setWindowWidth ] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize' , handleResize);

        return () => {
            window.removeEventListener('resize' , handleResize)
        }
    },[])

    const variants = {
        visible: {opacity: [0 , 0.5 , 1] , scale : [0 , 0.5 , 1] },
        hidden: {opacity: 0, scale: 0}
    }
    const { theme } = useContext(ShowContext);

    return(
        
        <div className={`${!theme ? "text-white" : "text-[#000000]" } lg:grid  limitedSize:gap-10 h-auto  flex flex-col  gap-10  overflow-hidden  lg:w-[85%] w-[97%] mx-auto  3xl:w-[80%]`}>
            <PatientHeader
             isOpen={isOpen}
             setIsOpen={setIsOpen}
             isInfo={isInfo}
             setIsInfo={setIsInfo}
             theme={theme}
            />
             <div className="flex flex-col gap-10  h-full">
               <PageCount
                theme={theme}
               />
                <PatientTable
                isInfo={isInfo}
                setIsInfo={setIsInfo}
                variants={variants}
                theme={theme}
                />
             </div>
            
        </div>
    )
}

export default PatientList