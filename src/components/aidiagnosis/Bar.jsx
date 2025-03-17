const Bar = ({width,height,x,y,label,labelY,fill}) => {
    return(
        <>
          <rect  width={width} height={height} x={x} y={y} fill={fill} />
          <text x={x} y={labelY} font-size="12" fill="#333">{label}</text>
          
        </>
    )
}

export default Bar