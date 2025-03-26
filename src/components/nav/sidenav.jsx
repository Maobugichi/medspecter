import { navItem } from "../../actions"
import SideNavItem from "./sidenavItem"
import { useContext, useState } from "react";
import { motion } from "motion/react";
import { ShowContext } from "../ContextProvider";

const SideNav = () => {
    const [isActive, setIsActive] = useState(null);
    const [isPath, setPath] = useState("");

    const { showNav , setShowNav } = useContext(ShowContext);

    console.log(showNav)
    function handleClick(e,id) {
        setShowNav(false)
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
        <motion.nav
        initial={{x:500}}
        animate={{x:showNav ? 195 : 500}}
        className="lg:left-0 lg:w-[18%] w-[50%] bg-red-400 fixed z-20 lg:relative h-auto min-h-[100vh]">
            <ul className="list-none h-[400px] w-full  flex flex-col justify-between items-center">
             {items}
            </ul>
        </motion.nav>
    )
}

export default SideNav