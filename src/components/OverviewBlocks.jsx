const OverviewBlocks = ({src,text,arrSrc,percentage,amount}) => {
    return(
        <div className=" h-[139px] w-[210px] bg-yellow-200 border border-[#E8E8E8] grid place-items-center rounded-lg">
            <div className="flex bg-red-200 w-[90%] mx-auto text-[12px] justify-between mt-5">
                <div className="flex items-center">
                  <img src={src} alt="" />
                  <p >{text}</p>
                </div>
                <div className="flex items-center">
                    <img src={arrSrc} alt="" />
                    <span>{percentage}</span>
                </div>
                
            </div>
            <div className="flex flex-col gap-1 items-center">
                <span className="text-[24px]">{amount}</span>
                <span className="text-[12px]">This week</span>
            </div>
        </div>
    )
}

export default OverviewBlocks