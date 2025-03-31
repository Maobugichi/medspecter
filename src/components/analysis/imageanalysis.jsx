import mri from "../../assets/mri.png";
import Skeleton from 'react-loading-skeleton'

const ImageAnalysis = () => {
    return(
        <div>
           
             <div className="lg:w-[95%] md:w-[95%]  mx-auto w-full  h-full">
             {mri ? <img className="w-full" src={mri} alt="MRI brain scan" /> : <Skeleton/>}
            </div>
        </div>
       
    )
}

export default ImageAnalysis