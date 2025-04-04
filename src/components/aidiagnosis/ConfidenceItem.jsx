const ConfidenceItem = ({date , diagnosis , percentage}) => {
    return (
        <div className="text-[12px] w-[95%] mx-auto flex justify-between h-[40px] border-b border-solid border-[#E8E8E8] items-center">
            <p className="font-semibold flex flex-col"> <span className="font-normal">{date}</span>{diagnosis}</p>
            <span className="font-semibold">{percentage}</span>
        </div>
    )
}


export default ConfidenceItem