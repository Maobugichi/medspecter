const AiItem = ({content}) => {
    return(
        <div className="flex gap-3">
            <div className="h-[12px] w-[12px] rounded-full mt-1 bg-[#93C5FD]"></div>
            <p className="w-[75%] ">{content}</p>
        </div>
    )
}

export default AiItem