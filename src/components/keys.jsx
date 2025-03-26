import { useState, useRef , useEffect } from "react"
const Keys = ({info,check , count , setCount , width , contWidth}) => {
 
  const [ innerWidth , setInnerWidth ] = useState(window.innerWidth)
  const paraRef = useRef([]);
 
  const key = info.map(patient => {
      const keys = Object.keys(patient)
      return keys
  })

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener('resize',handleResize)

    return () => {
      window.removeEventListener('resize',handleResize)
    }
  },[])
   
  console.log("count" + " " + count)
  const length = key[0].length - count;
  console.log(key[0]?.slice(0,length))
  return(
    <div className={`flex h-[55px] ${contWidth}  justify-between  items-center  overflow-hidden`}>
       {check &&<input className="w-10" type="checkbox" />}
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