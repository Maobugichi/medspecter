import PdBlock from "./pdblock";

const PdCont = ({newItem,variants}) => {
    const content =  
        newItem ? newItem.map(item => {
            const newEntries = Array.from(Object.entries(item));

            const newArray = newEntries.slice(3,4).concat(newEntries.slice(17));
           
           return(
            newArray.map(([key,value],i) => {
               
                return (
                <PdBlock
                  key={key}
                  title={key}
                  content={value}
                  src={item.src[i]}
                  variants={variants}
                  transition={{
                    duration: 0.3,
                    delay: (i * 0.3),
                  }}
                />)
            })
           ) 
        
            
        }) : null 
     
    return(
        <div className="flex relative left-0 flex-wrap items-center  justify-center gap-5">
            {content}
        </div>
    )
}

export default PdCont

