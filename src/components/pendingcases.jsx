const PendingCases = ({id,name,diagnosis,date,status,bgColor}) => {
    return(
        <div className={`${bgColor} flex h-[41px] text-[14px] w-full  justify-between`}>
           
            <p className="w-[140px] grid place-content-center">{name}</p>
            <p className="w-[140px] grid place-content-center">{diagnosis}</p>
            <p className="w-[140px] grid place-content-center">{date}</p>
            <p className="w-[140px] grid place-content-center">{status}</p>
        </div>
    )
}

export default PendingCases