const DiagnosisBox = ({newItem}) => {
    return(
        <div className="h-[90%] grid">
             <h3 className="flex h-12  flex-col text-[14px]"><span className="text-[12px]">Anomaly detected</span> { newItem[0].diagnosis}</h3>
             <div className="h-15 grid ">
                <span className="text-[12px]">status</span>
                <p className={`${newItem[0].statusText} w-[30%] h-6 grid place-content-center rounded-full text-[12px] ${newItem[0].statusColor}`}>{newItem[0].status}</p>
             </div>

             <h3 className="flex h-12 flex-col text-[14px]"><span className="text-[12px]">Confidence Score</span> 90%</h3>
        </div>
       
    )
}

export default DiagnosisBox