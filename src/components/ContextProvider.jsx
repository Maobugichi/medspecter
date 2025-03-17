import { useState,createContext,useMemo } from "react"
import { patientInfo } from "./../actions";
const ShowContext = createContext("false")

const ContextProvider = ({children}) => {
    const [newItem , setIsNewItem] = useState(patientInfo.slice(9,10))
    const [sliceInfo, setSliceInfo] = useState(patientInfo.slice(9));
    const [isShow, setIsShow] = useState(false)
    const contextValue = useMemo(() => {
        return {
            newItem,
            setIsNewItem,
            sliceInfo,
            setSliceInfo,
            isShow,
            setIsShow
        }
    },[newItem,sliceInfo])
   
    return(
        <ShowContext.Provider value={contextValue}>
            {children}
        </ShowContext.Provider>
    )
}

export  {ContextProvider , ShowContext }
