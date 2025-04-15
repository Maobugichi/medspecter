import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SideNav from "../components/nav/sidenav";
import { useContext } from "react";
import { ShowContext } from "../components/ContextProvider";

const Root = () => {
  const { theme } = useContext(ShowContext);
    return(
      
        <div className={`${!theme ? "bg-[#0c0c0c]" : "bg-white"} w-full flex flex-col h-auto pb-5 xl:pb-0  xl:h-[170vh]  3xl:h-[100vh]  transition-colors duration-300  overflow-hidden  font-sans`}>
          <Header/>
          <div className="flex w-full  h-auto ">
           <SideNav/>
           <Outlet/>
          </div>
        </div>
   
    )
}

export default Root