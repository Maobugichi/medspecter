import PageCount from "./pagecount";
import PatientHeader from "./patientheader";
import PatientTable from "./patienttable";
import { useState } from "react";
import { patientInfo } from "../../actions";
const PatientList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isInfo,setIsInfo] = useState(patientInfo.slice(9))
    return(
        <div className=" grid gap-2  w-[85%]">
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
            />
        </div>
    )
}

export default PatientList