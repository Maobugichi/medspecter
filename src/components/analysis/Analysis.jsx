import ImageAnalysis from "./imageanalysis";
import DetailsFlex from "./detailsflex";
import { ShowContext  } from "../ContextProvider";
import { useContext, useEffect, useState } from "react";
import axios from "axios"
import OpenAI from "openai";
const Analysis = () => {
    const [ isShow , setIsShow ] = useState(false)
   
    return(
        <div className="flex lg:flex-row flex-col w-[95%] lg:w-[85%] mx-auto gap-5">
            <ImageAnalysis/>
            <DetailsFlex
             show={isShow}
             setIsShow={setIsShow}
            />
        </div>
    )
}

export default Analysis