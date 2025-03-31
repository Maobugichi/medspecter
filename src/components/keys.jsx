import { useState, useRef , useEffect } from "react"
const Keys = ({info,check , count , setCount , width , contWidth}) => {
 
  const [ innerWidth , setInnerWidth ] = useState(window.innerWidth)
  const paraRef = useRef([]);
 
  const key = info.map(patient => {
      const keys = Object.keys(patient)
      return keys
  })

  
  const length = key[0].length - count;
  return(
    <div className={`flex h-[55px] ${contWidth}  justify-between  items-center gap-4  overflow-hidden`}>
       {check &&<input className="xl:w-10 w-4" type="checkbox" />}
      {
        key[0]?.slice(0,length).map((item,index) => {
          const widths = width[index]
          return(
            <p ref={(el) => (paraRef.current[index] = el)}  className={`${widths} text-left text-xs md:text-[14px] `}>{item}</p>
          )
        })
      }
    </div>
  )
}

export default Keys