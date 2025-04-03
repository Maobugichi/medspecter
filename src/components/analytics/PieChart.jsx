import { delay } from "motion"
import { motion } from "motion/react"

const PieChart =  () => {

  const draw = {
      initial:{ pathLength: 0, strokeDasharray: 1000, strokeDashoffset: 1000, fillOpacity: 0 },
      animate:{ pathLength: 1, strokeDashoffset: 0, fillOpacity: [0, 0.5 ,1] , transition: {default: {duration:5 , delay:0}, fillOpacity:{duration:2,delay : 5 , type: "tween"}} }
  
  }
    return(
      <div className=" h-60 relative w-full grid place-items-center md:w-[70%] md:mx-auto">
          <motion.svg
           width="215" height="214" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
          <g class="layer">
            <title>Layer 1</title>
            <motion.path 
               variants={draw}
               initial="initial"
               animate="animate"
               d="M107.28,6.6c0,-3.64 2.96,-6.62 6.6,-6.4c25.15,1.56 49.03,11.95 67.34,29.46c19.91,19.03 31.71,45.01 32.95,72.53c1.24,27.51 -8.18,54.45 -26.3,75.19c-16.66,19.09 -39.51,31.58 -64.42,35.39c-3.6,0.55 -6.82,-2.15 -7.14,-5.78l-1.22,-13.49c-0.33,-3.63 2.36,-6.81 5.95,-7.44c18.05,-3.14 34.55,-12.38 46.68,-26.27c13.59,-15.56 20.66,-35.76 19.73,-56.4c-0.93,-20.64 -9.78,-40.12 -24.71,-54.4c-13.34,-12.75 -30.61,-20.46 -48.86,-21.97c-3.64,-0.3 -6.6,-3.23 -6.6,-6.87l0,-13.55z"
               fill="#3371EB" 
               stroke="#3371EB"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
               id="svg_1"/>
            <motion.path 
             variants={draw}
             initial="initial"
             animate="animate"
             d="m99.06,6.94c-0.29,-3.63 -3.49,-6.36 -7.1,-5.84c-18.94,2.74 -36.85,10.52 -51.81,22.58c-14.97,12.06 -26.38,27.9 -33.09,45.83c-1.27,3.41 0.71,7.11 4.2,8.18l12.95,3.95c3.49,1.07 7.15,-0.91 8.5,-4.3c5.1,-12.81 13.43,-24.13 24.22,-32.83c10.8,-8.7 23.63,-14.43 37.23,-16.68c3.6,-0.6 6.31,-3.76 6.01,-7.39l-1.11,-13.5z" 
             fill="#FF8E26"
             stroke="#FF8E26"
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
             id="svg_2"/>
            <motion.path 
             variants={draw}
             initial="initial"
             animate="animate"
             stroke="#14CC26"
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
             d="m107.28,207.4c0,3.64 -2.96,6.62 -6.6,6.4c-13.59,-0.84 -26.92,-4.27 -39.26,-10.13c-14.34,-6.8 -26.98,-16.7 -37.01,-28.99c-10.04,-12.28 -17.22,-26.65 -21.01,-42.05c-3.28,-13.26 -3.97,-27.01 -2.08,-40.49c0.5,-3.62 4.01,-5.92 7.59,-5.19l13.27,2.7c3.57,0.73 5.85,4.22 5.42,7.84c-1.15,9.59 -0.56,19.32 1.77,28.73c2.85,11.55 8.23,22.33 15.76,31.54c7.52,9.22 17,16.64 27.75,21.74c8.76,4.16 18.18,6.68 27.8,7.48c3.64,0.3 6.6,3.23 6.6,6.87l0,13.55z" 
             fill="#14CC26" 
             id="svg_3"/>
          </g>
          </motion.svg>
      </div>
    )
}

export default PieChart