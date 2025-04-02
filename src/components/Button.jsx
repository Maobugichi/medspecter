const Button = ({setIsShow,content,className}) => {
    function handleClick() {
        setIsShow(prev => !prev)
    }
    return(
        <button onClick={handleClick} className={`${className}`}>
           {content}
        </button>
    )
}

export default Button