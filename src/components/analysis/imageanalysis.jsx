import mri from "../../assets/mri.png";

const ImageAnalysis = () => {
    return(
        <div>
           
             <div className="lg:w-[95%] md:w-[95%]  mx-auto w-full  h-full">
              <img className="w-full" src={mri} alt="MRI brain scan" />
            </div>
        </div>
       
    )
}

export default ImageAnalysis