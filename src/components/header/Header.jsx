import logo from "../../assets/logo.png";
import ThemeNoti from "./themenoti";
import Profile from "./profile";
import { Form } from "react-router-dom";
import SearchIcon from "./searchicon";
import { ShowContext } from "../ContextProvider";
import { useContext, useEffect } from "react";
const Header = () => {
    const { showNav ,setShowNav } = useContext(ShowContext);
   
    function handleNav() {
        setShowNav(prev => !prev)
    }

   
    return(
        <header className="w-full h-20 grid border-b border-solid border-[#E8E8E8]">
            <nav className="flex  items-center lg:w-full w-[90%] mx-auto justify-between  h-full">
                <div className="lg:w-[20%] w-[40%] ">
                    <img src={logo} alt="med spectre logo" />
                </div>
                <div onClick={handleNav} className="lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48"><g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}><path d="M7.94971 11.9497H39.9497"></path><path d="M7.94971 23.9497H39.9497"></path><path d="M7.94971 35.9497H39.9497"></path></g></svg>
                </div>
                <div className=" lg:flex w-full  hidden lg:justify-between h-[90%] lg:items-center">
                    <div className=" text-left w-[25%] ">
                     <p className="pl-7 text-[#C4C4C4] text-[14px]">Dashboard /
                     <span className="text-[#333333]">Overview</span></p>
                    </div>
                        
                    <Form className="hidden lg:block w-[38%] h-10 relative">
                        <input className="border border-[#C4C4C4] w-full h-full rounded-lg" type="search" />
                        <SearchIcon/>
                    </Form>
                    <div className="w-[62%] lg:w-[30%]  flex justify-between">
                        <ThemeNoti/>
                        <Profile/>
                    </div>
                </div>

            </nav>
        </header>
    )
}


export default Header