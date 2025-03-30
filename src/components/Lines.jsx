const Lines = ({axis}) => {
    const line = axis.map(item => {
        return(
            <>
                 <line className={`${item.y ? "block" : "hidden"}`}  x1={25} y1={item?.y} x2={750} y2={item?.y} stroke="#ceced3" strokeDasharray={item.y <= 230 ? 2 : 0} />
                 <text  x={0} y={item.y2} className="text-[10px] md:text-[11px]">{item.xLabel}</text>
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