const AnomalyBlock = ({bgColor,width,text,border,color}) => {
    return(
        <div className={`${bgColor} ${width} border ${border} ${color} h-[27px] grid place-content-center rounded-sm`}>
            {text}
        </div>
    )
}

export default AnomalyBlock