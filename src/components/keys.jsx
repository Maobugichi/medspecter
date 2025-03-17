import { useState, useRef , useEffect } from "react"
const Keys = ({info,check}) => {
  const [width, setWidth] = useState("w-[120px]");
  const paraRef = useRef([]);
  ;

  useEffect(() => {
    const widths = {
      id: "w-[90px]",
      name: "w-[120px]",
      diagnosis: "w-[110px]",
      date: "w-[90px]",
      treatment: "w-[160px]",
      status: "w-[100px]",
      doctor: "w-[100px]",
      number: "w-[120px]",
    };
    
    if (paraRef.current) {
      paraRef.current.map((item) => {
        const width = widths[item.innerText.toLowerCase()];
        if (width) item.classList.add(width);
      });
    }
  },[paraRef.current])
  const key = info.map(patient => {
      const keys = Object.keys(patient)
      return keys
  })

  const length = key[0].length - 11;
 
  return(
    <div className="flex h-[55px] justify-between items-center  overflow-hidden">
       {check &&<input className="w-[20px]" type="checkbox" />}
      {
        key[0].slice(0,length).map((item,index) => (
            <p ref={(el) => (paraRef.current[index] = el)}  className={` text-left  text-[14px] `}>{item}</p>
        ))
      }
    </div>
  )
}

export default Keys