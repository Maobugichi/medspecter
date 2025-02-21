import { navItem } from "../actions"
import SideNavItem from "./sidenavItem"
import { useState } from "react";
const SideNav = () => {
    const [isActive, setIsActive] = useState(null);
    const [isPath, setPath] = useState("")
    function handleClick(e,id) {

        if (isActive) {
            const previouslyActiveElement = document.querySelector(`#${isActive}`);
            if (previouslyActiveElement) {
              previouslyActiveElement.classList.remove("bg-red-300", "text-white");
            }
        }

        setIsActive(id);
        e.target.classList.add("bg-[#1E40AF]");
    }

    const items = navItem.map(item => (
        <SideNavItem
        key={item.key}
         id={item.id}
         d={item.d}
         dd={item.dd}
         viewbox={item.viewBox}
         xmlns={item.xmlns}
         text={item.text}
         alt={item.alt}
         onClick={handleClick}
         isActive={isActive}
         path={item.path}
        />
    ))
    return(
        <nav className="left-0 w-[20%]  h-auto min-h-[100vh]">
            <ul className="list-none h-[400px] w-full  flex flex-col justify-between items-center">
             {items}
            </ul>
        </nav>
    )
}

export default SideNav