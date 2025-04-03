import PolyLine from "./aidiagnosis/PolyLine"
import { motion } from "motion/react"
import ProgressItem from "./aidiagnosis/ProgressItem"
const PolyCont = ({width}) => {

  const items = [
    {
      text:"High",
      color:"bg-[#3b82f6] "
    },
    {
      text: "Medium",
      color:"bg-[#9333ea]"
    },
    {
      text: "Low",
      color: "bg-[#f59e0b]"
    }
  ]

  const draw = {
    initial:{ pathLength: 0, strokeDasharray: 1000, strokeDashoffset: 1000, fillOpacity: 0 },
    animate:{ pathLength: 1, strokeDashoffset: 0, fillOpacity: [0, 0.5 ,1] , transition: {default: {duration:5 , delay:0}, fillOpacity:{duration:2,delay : 5 , type: "tween"}} }

}

  const progressItem = items.map(item => {
    return(
      <ProgressItem content={item.text} color={item.color}/>
    )
  })
    return(
        <div className={`${width} relative  h-[303px] grid place-items-center rounded-md border border-solid border-[#ceced3]`}>
          <div className="flex justify-between w-[90%] h-[30%] ">
            <div>
              <h3 className="text-[14px]">Progress Overtime</h3>
              <div className="flex text-[9px] gap-5 w-full">
                {progressItem}
              </div>
            </div>
             <div>
               <div className="text-[10px]">
                 View Full Report
               </div>
             </div>
          </div>

          <div className=" w-[95%] h-[90%] grid gap-5">
            <ul className="grid gap-5 text-[10px]">
              <li>100</li>
              <li>80</li>
              <li>60</li>
              <li>40</li>
              <li>20</li>
            </ul>
            <motion.svg  className=" absolute left-10 top-17" width="590" height="196" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
            <g>
            
              <motion.path 
              variants={draw}
              initial="initial"
              animate="animate"
              d="m1,194.44c67.38,-20.39 97.7,-57.39 97.7,-57.39c0,0 44.88,-59.66 97.71,-72.61c52.83,-12.94 138.71,10.83 208.22,-8c69.51,-18.83 42.46,-48.74 113.88,-54.5c71.41,-5.75 87.26,54.64 144.62,34.8c57.36,-19.84 94.5,-18.27 94.5,-18.27" id="svg_1"
              stroke="#9333EA" 
              strokeWidth="2.33" 
              
              fill="none"/>
              <motion.path 
               variants={draw}
               initial="initial"
               animate="animate"
               d="m0.9,176.31c82.75,1.57 127.54,-65.38 127.54,-65.38c0,0 18.56,-23.83 59.84,-32.88c41.27,-9.05 127.18,23.83 196.67,5c69.48,-18.83 59.48,-66.28 130.87,-72.03c71.38,-5.75 90.92,29.22 148.25,9.38c57.34,-19.84 94.46,-18.27 94.46,-18.27" id="svg_1" stroke="#3B82F6" stroke-width="2.33" fill="none"/>
              <motion.path
               variants={draw}
               initial="initial"
               animate="animate"
              d="m0.9,161.26c67.53,-6.49 114.77,-59.05 195.05,-59.05c80.29,0 132.04,48.96 191.55,41.89c59.52,-7.07 73.68,-43.48 95.09,-68.97c21.41,-25.49 44.42,-46.67 85.84,-48.8c41.43,-2.12 59.5,18.34 90.78,10.88c31.89,-6.97 53.53,-35.76 99.32,-35.76" id="svg_1" stroke="#F59E0B" stroke-width="2.33" fill="none"/>
            </g>
            </motion.svg>
            <ul className="ml-8 flex w-[90%] justify-between text-[10px]">
              <li>Jan 29</li>
              <li>Jan 30</li>
              <li>Jan 29</li>
              <li>Jan 30</li>
              <li>Jan 29</li>
              <li>Jan 30</li>
              <li>Jan 29</li>
              <li>Jan 30</li>
              <li>Jan 30</li>
            </ul>
          </div>
         
        </div>
    )
}

export default PolyCont