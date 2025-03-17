const Button = ({setIsShow,content,className}) => {
    function handleClick() {
        setIsShow(prev => !prev)
        console.log("hello")
    }
    return(
        <button onClick={handleClick} className={`${className}`}>
           {content}
        </button>
    )
}

export default Button