import { navItem } from "../../actions"
import SideNavItem from "./sidenavItem"
import { useContext, useEffect, useState } from "react";
import { motion } from "motion/react";
import { ShowContext } from "../ContextProvider";
import Profile from "../header/profile";
import ThemeNoti from "../header/themenoti";
import gear from "../../assets/gearSix.svg";
import signOut from "../../assets/signOut.svg";
import Extras from "./SideNavExtras";

const SideNav = () => {
    const [isActive, setIsActive] = useState(null);
    const { showNav , setShowNav } = useContext(ShowContext);
    const [ isResize , setIsResize ] = useState(false);
    const [ windowWidth , setWindowWidth ] = useState(window.innerWidth);
    const [ isX , setX ] = useState({
        x:195,
        xAu:500
    });
    const { theme , setTheme } = useContext(ShowContext)
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize' , handleResize);

        return () => {
            window.removeEventListener('resize' , handleResize);
        }
    },[window.innerWidth])

    useEffect(() => {
        if (windowWidth < 850) {
            setIsResize(true);
        } 

        if (windowWidth > 600 && windowWidth < 850) {
            setX({
                x:500,
                xAu:1000
            })
        }
    },[windowWidth])
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

    function handleNav() {
        setShowNav(prev => !prev)
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
         theme={theme}
        />
    ))

    const extraItems = [
        {
            img:signOut,
            text:"Log Out"
        }, {
            img:gear,
            text:"Settings"
        }
    ]

    const extra = extraItems.map(item => (
        <Extras
         key={item.img}
         src={item.img}
         content={item.text}
         alt={item.text + " " + "icon"}
        />
    ))
    return(
        <motion.nav
        initial={{x:isResize && isX.xAu}}
        animate={isResize && {x:showNav  ?isX.x : isX.xAu}}
        className={`lg:left-0 ${!theme ? "bg-[#060606] text-white" : "bg-white"} lg:w-[18%] w-[50%] flex flex-col justify-between fixed top-0 z-20 lg:relative h-auto min-h-[100vh] transition-colors duration-300`}>
          
            <div className=" grid gap-10 mt-10">
               <svg  onClick={handleNav} className="ml-40 lg:hidden" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke={!theme ? "#ffffff" : "#2e2a2a"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.247 6.74c.826.827 1.24 1.24 1.753 1.24c.514 0 .927-.413 1.753-1.24h0l1.754-1.753h0c.407-.408.611-.612.823-.734c1.066-.616 1.945-.005 2.683.734c.739.738 1.35 1.617.734 2.683c-.122.212-.326.416-.734.823l-1.753 1.754c-.827.826-1.24 1.24-1.24 1.753c0 .514.413.927 1.24 1.753l1.753 1.754c.408.407.612.611.734.823c.616 1.066.005 1.945-.734 2.683c-.738.739-1.617 1.35-2.683.734c-.212-.122-.416-.326-.823-.734l-1.754-1.753h0c-.826-.826-1.24-1.24-1.753-1.24c-.514 0-.927.414-1.753 1.24h0l-1.754 1.753c-.407.408-.611.612-.823.734c-1.066.616-1.945.005-2.683-.734c-.739-.738-1.35-1.617-.734-2.683c.122-.212.326-.416.734-.823l1.753-1.754c.827-.826 1.24-1.24 1.24-1.753c0-.514-.414-.927-1.24-1.753L4.987 8.493c-.408-.407-.612-.611-.734-.823c-.616-1.066-.005-1.945.734-2.683c.738-.739 1.617-1.35 2.683-.734c.212.122.416.326.823.734h0z" color="#2e2a2a"></path></svg>
               <div className="lg:hidden">
                 <Profile/>
               </div>
                 
                <ul className="list-none h-[400px] w-full  flex flex-col justify-between items-center">
                  {items}
                </ul>
                <div className="lg:hidden">
                    <ThemeNoti
                    theme={theme}
                    setTheme={setTheme}
                    />
                </div>
                
            </div>
           

            <ul className="h-30 grid ">
                {extra}
            </ul>
        </motion.nav>
    )
}

export default SideNav