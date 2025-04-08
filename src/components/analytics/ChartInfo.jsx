const ChartInfo = ({content,bg}) => {
    return(
        <div className=" flex w-[50%] items-center gap-2">
            <div
             className={`h-[10px] w-[10px] rounded-[2px] ${bg}`}
            ></div>
            <p className="text-[#676767] text-[12px]">{content}</p>
        </div>
    )
}


export default ChartInfo