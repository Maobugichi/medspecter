const Progress = () => {
    return(
        <svg height={50} width={30} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <marker id="circle-start" markerWidth={20} markerHeight={20} refX={5} refY={5}>
                    <circle cx={5} cy={5} r={4.5} fill="white" stroke="#1E40AF" strokeWidth={1}/>
                    <circle cx={5} cy={5} r={2.5} fill="#1E40AF66"/>
                </marker>
            </defs>
            <line x1={10} y1={10} x2={30} y2={1500} stroke="black" strokeWidth={1.5} strokeDasharray={2} markerStart="url(#circle-start)" markerEnd="url(#circle-start)"/>
        </svg>
    )
}


export default Progress