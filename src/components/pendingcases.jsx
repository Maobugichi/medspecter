const PendingCases = ({id,name,diagnosis,date,status,bgColor,statusColor,statusText}) => {
    return(
        <div className={`${bgColor} flex h-[41px] text-[14px] w-full  justify-between text-[#000000] items-center`}>
           
            <p className="w-[140px] grid place-content-center">{name}</p>
            <p className="w-[140px] grid place-content-center">{diagnosis}</p>
            <p className="w-[140px] grid place-content-center">{date}</p>
            <p className={`w-[140px] grid place-content-center h-[23px] text-[12px]  ${statusColor} ${statusText} rounded-2xl`}>{status}</p>
        </div>
    )
}

export default PendingCases