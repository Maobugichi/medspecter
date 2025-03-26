import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

const SideNavItem = ({id,d,text,viewbox,isActive,onClick,xmlns,dd,path}) => {
    return(
        <Link to={path}>
             <li id={id} onClick={(e) => onClick(e,id)} className={` ${isActive == id ? "bg-[#1E40AF] text-white" : "bg-transparent"} h-[44px] w-[188px] text-[14px] rounded-sm flex items-center gap-3`}>
                <svg className="pl-2" xmlns={xmlns} width={24} height={24} viewBox={viewbox}><path fill={isActive == id ? "#ffffff" : "#2e2a2a"} d={dd} ></path><path fill={isActive == id ? "ffffff" : "#2e2a2a"} d={d}></path></svg>
                    <p>{text}</p>
                </li>
        </Link>
       
    )
}

export default SideNavItem