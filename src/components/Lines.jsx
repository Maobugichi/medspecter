const Lines = ({axis,windowWidth}) => {
    const line = axis.map(item => {
        return(
            <>
                 <line className={`${item.y ? "block" : "hidden"}`}  x1={windowWidth < 600 ? 30 : 60} y1={item?.y} x2={windowWidth < 600 ? 355 : 650} y2={item?.y} stroke="#ceced3" strokeDasharray={item.y <= 230 ? 2 : 0} />
                 <text  x={windowWidth < 600 ? 5 : 23} y={item.y2} className="text-[10px] md:text-[11px]">{item.xLabel}</text>
            </>
           
        )
    }) 


    return(
        <>
            <g>
               {line}
            </g>
        </>
    )
}

export default Lines