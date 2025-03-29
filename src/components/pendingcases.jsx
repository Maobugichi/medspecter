const PendingCases = ({id,name,diagnosis,date,status,bgColor,statusColor,statusText,doctor,number,treatment,width , spacing}) => {
    
    return(
        <div className={`${bgColor} flex h-[41px] text-[10px]  lg:text-[14px] w-full  text-[#000000] ${spacing} items-center`}>
            {id && <input className="w-2 md:w-10" type="checkbox" />}
            {id &&  <p className={`w-auto lg:min-w-[60px] flex  items-start `}>{id}</p>}
             <p className={` w-auto md:min-w-[120px] min-w-[68px]  flex items-start `}>{name}</p>    
             <p className={` flex items-start w-auto ${id ? "min-w-[50px] xxSmall:min-w-[40px] " : "min-w-[90px] lg:min-w-[100px] smallSize:min-w-[80px]"} md:min-w-[80px]   `}>{diagnosis}</p>
             <p className={` flex items-start  w-auto min-w-[60px]  lg:min-w-[80px]`}>{date}</p>
            {treatment &&   <p className={`w-auto min-w-[80px] md:min-w-[100px] lg:min-w-[135px] whitespace-nowrap overflow-x-auto `}>{treatment}</p>}
            <p className={` grid place-content-center h-[23px] w-[100px] text-[9px] ${statusColor} ${statusText} rounded-2xl`}>{status}</p>
            {doctor && <p className={` flex items-start w-auto min-w-[100px]`}>{doctor}</p>}
            {number && <p className={` flex items-start w-auto min-w-[150px] `}>{number}</p>}
        </div>
    )
}

export default PendingCases