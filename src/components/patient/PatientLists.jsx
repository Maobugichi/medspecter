import PageCount from "./pagecount";
import PatientHeader from "./patientheader";
import PatientTable from "./patienttable";
import { useEffect, useState } from "react";
import { patientInfo } from "../../actions";
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

  
    return(
        
        <div className="lg:grid limitedSize:flex  limitedSize:gap-10 h-full flex flex-col  gap-10 lg:gap-2 lg:w-[85%] w-[95%] mx-auto ">
            <PatientHeader
             isOpen={isOpen}
             setIsOpen={setIsOpen}
             isInfo={isInfo}
             setIsInfo={setIsInfo}
            />
            <PageCount/>
            <PatientTable
              isInfo={isInfo}
              setIsInfo={setIsInfo}
              variants={variants}
            />
        </div>
    )
}

export default PatientList