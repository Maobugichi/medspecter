import { useState,createContext,useMemo } from "react"
import { patientInfo } from "./../actions";
const ShowContext = createContext("TRUE")

const ContextProvider = ({children}) => {
    const [newItem , setIsNewItem] = useState(patientInfo.slice(9,10));
    const [sliceInfo, setSliceInfo] = useState(patientInfo.slice(9));
    const [isShow, setIsShow] = useState(false);
    const [ showNav , setShowNav ] = useState(false);
    const [ theme , setTheme ] = useState(true)
    const contextValue = useMemo(() => {
        return {
            newItem,
            setIsNewItem,
            sliceInfo,
            setSliceInfo,
            isShow,
            setIsShow,
            showNav,
            setShowNav,
            theme,
            setTheme
        }
    },[newItem,sliceInfo, isShow , showNav , theme , setTheme])
   
    return(
        <ShowContext.Provider value={contextValue}>
            {children}
        </ShowContext.Provider>
    )
}

export  {ContextProvider , ShowContext }
