import { useEffect, useState } from "react";
import mri from "../../assets/mri.png";
import Skeleton from 'react-loading-skeleton'

const ImageAnalysis = () => {
    const [ imageLoaded, setImageLoaded ] = useState(false)
    useEffect(() => {
        setImageLoaded(true)
    },[])
    return(
        <div>
             <div className="lg:w-[95%] md:w-[95%]  mx-auto w-full  h-full grid ">

             {imageLoaded ? <img className="w-full h-full" src={mri} alt="MRI brain scan" style={{display:imageLoaded ? 'block' : 'none'}}/> : <Skeleton  height={500} width={350}/> }
            </div>
        </div>
       
    )
}

export default ImageAnalysis