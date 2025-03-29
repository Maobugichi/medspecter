import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SideNav from "../components/nav/sidenav";
import { ContextProvider } from "../components/ContextProvider";

const Root = () => {
    return(
      
        <div className="w-full flex flex-col gap-10 h-auto min-h-[100vh]  overflow-y-scroll overflow-x-hidden">
          <Header/>
          <div className="flex w-full bg-green-300 overflow-auto h-full">
           <SideNav/>
           <Outlet/>
          </div>
        </div>
   
    )
}

export default Root