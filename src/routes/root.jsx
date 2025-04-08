import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SideNav from "../components/nav/sidenav";
import { useContext } from "react";
import { ShowContext } from "../components/ContextProvider";

const Root = () => {
  const { theme } = useContext(ShowContext)
    return(
      
        <div className={`${!theme ? "bg-[#060606]" : "bg-white"} w-full flex flex-col gap-10 h-auto pb-8   overflow-x-hidden font-sans`}>
          <Header/>
          <div className="flex w-full  h-auto ">
           <SideNav/>
           <Outlet/>
          </div>
        </div>
   
    )
}

export default Root