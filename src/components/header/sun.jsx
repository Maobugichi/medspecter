const Sun = ({theme , setTheme}) => {
    function changeTheme() {
        setTheme(prev => !prev)
    }
    return(
        
        <svg onClick={changeTheme} width="20" height="21" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="clip0_0_287">
                <rect fill="white" height="20" id="svg_1" transform="translate(0.00012207 0.499981)" width="20"/>
            </clipPath>
            </defs>
            <g className="layer">
            <title>Layer 1</title>
            
            <path d="m10,3.62l0,-0.62" id="svg_3" stroke={!theme ? "white" : "black"} strokeLinecap="round" strokelinejoin="round"/>
            <path d="m10,14.88c2.42,0 4.38,-1.96 4.38,-4.38c0,-2.42 -1.96,-4.38 -4.38,-4.38c-2.42,0 -4.37,1.96 -4.37,4.38c0,2.42 1.95,4.38 4.37,4.38z" id="svg_4" stroke={!theme ? "white" : "black"} strokeLinecap="round" stroke-linejoin="round"/>
            <path d="m5,5.5l-0.62,-0.63" id="svg_5" stroke={!theme ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="m5,15.5l-0.62,0.63" id="svg_6" stroke={!theme ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="m15,5.5l0.63,-0.63" id="svg_7" stroke={!theme ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="m15,15.5l0.63,0.63" id="svg_8" stroke={!theme ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="m3.13,10.5l-0.63,0" id="svg_9" stroke={!theme ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="m10,17.38l0,0.62" id="svg_10"  stroke={!theme ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="m16.88,10.5l0.62,0" id="svg_11" stroke={!theme ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
          
            </g>
        </svg>
    )
}

export default Sun