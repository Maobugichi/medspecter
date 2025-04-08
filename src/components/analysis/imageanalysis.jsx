import { useEffect, useState } from "react";
import mri from "../../assets/mri.png";
import Skeleton from 'react-loading-skeleton'

const ImageAnalysis = () => {
    const [ imageLoaded, setImageLoaded ] = useState(false)

    
    return(
        <div>
             <div className="lg:w-[95%] md:w-[95%]  mx-auto w-full  h-full ">

             {!imageLoaded && <Skeleton height={300} width={300}/>} <img onLoad={() => setImageLoaded(true)} className="w-full h-full" src={mri} alt="MRI brain scan" style={{display:imageLoaded ? 'block' : 'none'}}/>  
            </div>
        </div>
       
    )
}

export default ImageAnalysis