import PdBlock from "./pdblock";

const PdCont = ({newItem}) => {
 
    const content =  
        newItem ? newItem.map(item => {
            const newEntries = Array.from(Object.entries(item));
            const newArray = newEntries.slice(3,4).concat(newEntries.slice(15));
           return(
            newArray.map(([key,value],i) => {
                return (<PdBlock
                  title={key}
                  content={value}
                  src={item.src[i]}
                />)
            })
           ) 
        
            
        }) : null 
     
    return(
        <div className="flex flex-wrap items-center  justify-center gap-5">
            {content}
        </div>
    )
}

export default PdCont

