import { useEffect, useState } from "react";
import mri from "../../assets/mri.png";
import Skeleton from 'react-loading-skeleton'

const ImageAnalysis = () => {
    const [ imageLoaded, setImageLoaded ] = useState(false)

    useEffect(() => {
        const img = new Image();
        img.src = mri;
        img.onload = () => setImageLoaded(true)
    },[])
    return(
        <div>
             <div className="lg:w-[95%] md:w-[95%]  mx-auto w-full  h-full">
             {imageLoaded ? <img className="w-full" src={mri} alt="MRI brain scan" /> : <Skeleton/>}
            </div>
        </div>
       
    )
}

export default ImageAnalysis