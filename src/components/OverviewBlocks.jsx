const OverviewBlocks = ({src,text,arrSrc,percentage,amount,width}) => {
    return(
        <div className={`${width} lg:h-[100%] h-[45%] border-2 border-[#E8E8E8] grid place-items-center rounded-lg`}>
            <div className="flex lg:w-[90%] w-[90%] mx-auto text-[12px] justify-between mt-5">
                <div className="flex items-center gap-2 h-5  ">
                  <img className="w-[25%]" src={src} alt="" />
                  <p className="text-[9px] ">{text}</p>
                </div>
                <div className="flex items-center gap-1 ">
                    <img className="w-[25%]" src={arrSrc} alt="" />
                    <span className=" text-[10px]">{percentage}</span>
                </div>
                
            </div>
            <div className="flex flex-col gap-1 w-[90%] ">
                <span className="text-[24px]">{amount}</span>
                <span className="text-[12px]">This week</span>
            </div>
        </div>
    )
}

export default OverviewBlocks