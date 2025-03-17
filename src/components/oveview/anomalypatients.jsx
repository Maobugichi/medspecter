const AnomalyPatients = ({id,name,d,content}) => {
    return(
        <div className="flex h-[23px] border-b border-[#E8E8E8]  text-[12px] justify-between w-full">
            <div className="w-1/2 flex items-center gap-3">
                <span className="bg-[#FC485A] h-[10px] w-[10px] rounded-full">

                </span>
                <p className="text-[#333333]">{id} - {name}</p>
            </div>
            <div className="flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width={20} height={15} viewBox="0 0 256 256"><path fill="#2e2a2a" d={d}></path></svg>
             <p className="text-[#00000066]">{content}</p>
             <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="none" stroke="#2e2a2a" strokeLinecap="round" d="m9.929 4.858l6.364 6.364a1 1 0 0 1 0 1.414L9.929 19" strokeWidth={1}></path></svg>
            </div>
        </div>
    )
}

export default AnomalyPatients