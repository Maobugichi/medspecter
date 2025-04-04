import DetailsBox from "../detailsbox";
import { patientInfo } from "../../actions";
import { useEffect, useState,useContext } from "react"
import { ShowContext } from "../ContextProvider";
import PdCont from "./PdCont";
import DiagnosisBox from "../DiagnosisBox";
import History from "../../components/analysis/History";
import Button from "../Button";

const DetailsFlex = ({show,setIsShow,variants}) => {
    const [selectedOption, setSelectedOptions] = useState();
    const {newItem , setIsNewItem , sliceInfo , setSliceInfo } = useContext(ShowContext)
    const [prevItem , setIsPrevItem] = useState(patientInfo.slice(9,10))
    const [isHistory, setIsHistory] = useState(patientInfo.slice(9,10))
    
    function handleChange(e) {
        setSelectedOptions(e.target.value)
        const myItem = sliceInfo.filter(item => item.name.toLowerCase() == e.target.value.toLowerCase())
        setIsNewItem(myItem)
    }

    const history = isHistory[0].history.slice(0,3).map(item => {
        return <History
          key={item.id}
          date={item.date}
          treatment={item.treatment}
        />
    })
   
    return(
        <div className="grid gap-3 xl:w-[40%] lg:w-[95%] w-full lg:mr-5 limitedSize:flex limitedSize:flex-col limitedSize:gap-5">
            <DetailsBox 
             sel={true}
             info="Patient Details"
             patient={sliceInfo}
             setSelectedOptions={setSelectedOptions}
             selectedOption={selectedOption}
             handleChange={handleChange}
             sliceInfo={sliceInfo}
             patientName={newItem ? newItem[0].name : sliceInfo[0].name}
             className="h-[270px] lg:w-[96%] w-full flex flex-col"
             headStyle="h-[50px] mt-3 text-[18px]"
            >
            <PdCont
             newItem={newItem ? newItem : prevItem}
             variants={variants}
            />
            
            </DetailsBox>
            <DetailsBox
              info="Diagnosis"
              className="h-[270px] lg:w-[96%] w-full"
              headStyle="h-[50px] mt-5 text-[18px]"
            >
            <DiagnosisBox
                newItem={newItem ? newItem : prevItem}
                
            />
            </DetailsBox>
             <DetailsBox
               info="Recent History"
               className="h-[270px] lg:w-[96%]  w-full"
               headStyle="h-[50px] mt-5 text-[18px]"
             >
                {history}
                <Button
                 className="bg-[#1E40AF] w-[133px] h-[31px] rounded-lg text-[12px] text-[white]"
                 content={show ? "Recent History" : "See previous history"}
                 setIsShow={setIsShow}
                 />
            </DetailsBox>
        </div>
    )
}

export default DetailsFlex