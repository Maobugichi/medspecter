const ProgressItem = ({color , content}) => {
    return(
        <div className="flex items-center gap-2">
        <div  className={`${color} rounded-full w-[6px] h-[6px]`}></div>
        <p className=""> {content}</p>
        </div>
    )
}

export default ProgressItem