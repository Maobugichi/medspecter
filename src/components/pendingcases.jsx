const PendingCases = ({id,name,diagnosis,date,status,bgColor,statusColor,statusText,doctor,number,treatment,width}) => {
    return(
        <div className={`${bgColor} flex h-[41px] text-[14px] w-full  justify-between text-[#000000] items-center`}>
            {id && <input type="checkbox" />}
            {id &&  <p className={`${width} flex items-start`}>{id}</p>}
            <p className={`w-auto min-w-[12%] flex items-start`}>{name}</p>
            <p className={`${width} flex items-start`}>{diagnosis}</p>
            <p className={`${width} flex items-start`}>{date}</p>
            {treatment &&   <p className={`w-[14%]`}>{treatment}</p>}
            <p className={`${width} grid place-content-center w-[12%]  h-[23px] text-[12px]  ${statusColor} ${statusText} rounded-2xl`}>{status}</p>
            {doctor && <p className={`${width} flex items-start`}>{doctor}</p>}
            {number && <p className={`w-[12%] flex items-start`}>{number}</p>}
        </div>
    )
}

export default PendingCases