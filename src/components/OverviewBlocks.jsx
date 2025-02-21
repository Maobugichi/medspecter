const OverviewBlocks = ({src,text,arrSrc,percentage,amount}) => {
    return(
        <div className=" h-[139px] w-[210px] border border-[#E8E8E8] grid place-items-center rounded-lg">
            <div className="flex w-[90%] mx-auto text-[12px] justify-between mt-5">
                <div className="flex items-center gap-2">
                  <img src={src} alt="" />
                  <p >{text}</p>
                </div>
                <div className="flex items-center gap-1">
                    <img src={arrSrc} alt="" />
                    <span>{percentage}</span>
                </div>
                
            </div>
            <div className="flex flex-col gap-1 w-[90%]">
                <span className="text-[24px]">{amount}</span>
                <span className="text-[12px]">This week</span>
            </div>
        </div>
    )
}

export default OverviewBlocks