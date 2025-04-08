const Bell = ({ theme }) => {
    return(
        <svg width="20" height="21" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
            <defs>
            <clipPath id="clip0_0_284">
            <rect fill="white" height="20" id="svg_1" transform="translate(0.00012207 0.499966)" width="20"/>
            </clipPath>
            </defs>
 <g class="layer">
  <title>Layer 1</title>
  <g clipPath="url(#clip0_0_284)" id="svg_2">
   <path d="m7.5,18l5,0" id="svg_3" stroke={!theme ? "white" : "black"} strokeLinecap="round" strokeLinejoin="round"/>
   <path d="m4.38,8.62c0,-1.49 0.59,-2.92 1.64,-3.97c1.06,-1.06 2.49,-1.65 3.98,-1.65c1.49,0 2.92,0.59 3.98,1.65c1.05,1.05 1.65,2.48 1.65,3.97c0,2.8 0.64,5.05 1.16,5.94c0.05,0.1 0.08,0.2 0.08,0.31c0,0.11 -0.03,0.22 -0.08,0.32c-0.05,0.09 -0.13,0.17 -0.23,0.23c-0.09,0.05 -0.2,0.08 -0.31,0.08l-12.5,0c-0.11,0 -0.22,-0.03 -0.31,-0.09c-0.1,-0.05 -0.17,-0.13 -0.23,-0.22c-0.05,-0.1 -0.08,-0.21 -0.08,-0.32c0,-0.11 0.03,-0.21 0.08,-0.31c0.52,-0.89 1.17,-3.14 1.17,-5.94z" id="svg_4" stroke={!theme ? "white" : "black"} strokeLinecap="round" stroke-linejoin="round"/>
  </g>
 </g>
</svg>
    )
}

export default Bell