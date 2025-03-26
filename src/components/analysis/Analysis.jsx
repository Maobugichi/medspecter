import ImageAnalysis from "./imageanalysis";
import DetailsFlex from "./detailsflex";
import { ShowContext  } from "../ContextProvider";
import { useContext, useEffect, useState } from "react";
import axios from "axios"
import OpenAI from "openai";
const Analysis = () => {
    const [ isShow , setIsShow ] = useState(false)
    const apiEndpoint = 'https://api.openai.com/v1/completions';
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY
    const client = new OpenAI({
        apiKey:apiKey,
        dangerouslyAllowBrowser: true,
        maxRetries:0
    })

    async function  main() {
        const chatCompletion = await client.chat.completions.create({
            messages:[{role:"user",content:"say this is a test"}],
            model:"gpt-4o"
        })
    }

    useEffect(() => {
        main()
    },[])
      
      
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