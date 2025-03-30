import PolyLine from "./aidiagnosis/PolyLine"
import charts from "../assets/charts.svg"
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
            <img className=" absolute left-8 md:left-12 w-[90%] top-38 md:top-23" src={charts} alt="" />
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