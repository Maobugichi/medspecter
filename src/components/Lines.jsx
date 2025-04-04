const Lines = ({axis,x,x1,x2}) => {
    const line = axis.map(item => {
        return(
            <>
                 <line className={`${item.y ? "block" : "hidden"}`}  x1={x1} y1={item?.y} x2={x2} y2={item?.y} stroke="#ceced3" strokeDasharray={item.y <= 230 ? 2 : 0} />
                 <text  x={x} y={item.y2} className="text-[10px] md:text-[11px]" fill="#9c9ca0">{item.xLabel}</text>
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