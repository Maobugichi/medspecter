const AnomalyButton = ({isShow,setIsShow}) => {
    function handleClick() {
        setIsShow(prev => !prev)
    }
    return(
        <button onClick={handleClick} className="w-[192px] h-[35px] bg-[#F9FAFB] border border-[#0000001A] text-[#535353] text-[12px] rounded-md ml-16">
           { isShow ? "See Less" : "View all Flagged Anomalies (20)"}
        </button>
    )
}

export default AnomalyButton