const PolyLine = () => {
    //0,290 30,280 40,275 90,240 120,210 140,190  170,170 220,145 250,135  300,135 370,150  458,160 550,140  580,140
    return(
        <svg height={290} className=" w-[99%]" xmlns="https://www.w3.org/TR/SVG2/">
            <polyline points="0,290 30,280 40,275 90,240 120,190 125,185 160,160 170,155 195,150 250,150 330,170 395,180 450,180 " style={{fill:"none",stroke:"red",strokeWidth:3}}/>
        </svg>
    )
}

export default PolyLine