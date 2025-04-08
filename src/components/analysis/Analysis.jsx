import ImageAnalysis from "./imageanalysis";
import DetailsFlex from "./detailsflex";
import { ShowContext  } from "../ContextProvider";
import { useContext, useEffect, useState } from "react";
import axios from "axios"
import OpenAI from "openai";
const Analysis = () => {
    const [ isShow , setIsShow ] = useState(false)
    const variants = {
        visible: {opacity: [0 , 0.5 , 1] , scale : [0 , 0.5 , 1] },
        hidden: {opacity: 0, scale: 0}
    }
    const { theme } = useContext(ShowContext)
    return(
        <div className={`w-[95%] lg:w-[85%] grid gap-4 mx-auto ${!theme ?  "text-white" : "text-[#060606]"}`}>
            <h2 className="text-[24px] font-semibold">Image Analysis</h2>
            <div className="flex xl:flex-row flex-col w-full mx-auto gap-5">
              <ImageAnalysis/>
                <DetailsFlex
                show={isShow}
                setIsShow={setIsShow}
                variants={variants}
                />
            </div>
            
        </div>
    )
}

export default Analysis