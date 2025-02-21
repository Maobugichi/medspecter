import { patientInfo } from "../actions"
const Keys = () => {
 const key = patientInfo.map(patient => {
    const keys = Object.keys(patient)
    return keys
  })


  return(
    <div className="flex h-[55px] justify-around items-center">
      {
        key[0].slice(0,4).map(item => (
            
            <p className="w-[140px] grid place-content-center text-[14px]">{item}</p>
        ))
      }
    </div>
  )
}

export default Keys