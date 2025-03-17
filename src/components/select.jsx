const Select = ({selectedOption,handleChange,sliceInfo,className}) => {   
    return(
        <select className={`${className}`} value={selectedOption} onChange={handleChange}>
            {sliceInfo && sliceInfo.map(item => (
                <option value={item.name ? item.name : item}>{item.name ? item.name : item} {item?.id}</option>
            ))}
         
        </select>
    )
}

export default Select