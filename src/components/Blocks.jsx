const Block = ({d,viewBox,text,fill,onClick}) => {
    return(
        <div onClick={onClick} className="cursor-pointer w-[70px] lg:w-[92px] h-[31px] flex border border-[#E0E0E0] text-[12px] justify-center items-center gap-2 rounded-md">
             <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox={viewBox}><path fill={fill} d={d}></path></svg>
             <p>{text}</p>
        </div>
       
    )
}

export default Block;