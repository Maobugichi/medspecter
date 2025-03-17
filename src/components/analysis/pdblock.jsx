

const PdBlock = ({src,alt,age,title,content}) => {
    return(
        <div className="w-[45%] h-[56px] border flex items-center justify-center border-[#C4C4C4] rounded-md gap-3">
            <div className="bg-[#1E40AF33] w-9 h-9 grid place-content-center rounded-md">
                <img src={src} alt={alt} />
            </div>
            <p className="flex flex-col text-[12px] w-[55%]">{title} <span>{content}</span></p>
        </div>
    )
}

export default PdBlock