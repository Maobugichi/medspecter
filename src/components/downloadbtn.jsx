import download from "../assets/downloadSimple.svg";

const DownloadBtn = () => {
   return(
    <button className="w-[123px] h-[36px] rounded-md bg-[#1E40AF] text-[12px] flex items-center justify-center gap-2 text-[#FFFFFF] p-2">
        <img src={download} alt="download icon" />
        Download List
    </button>
   )
}

export default DownloadBtn