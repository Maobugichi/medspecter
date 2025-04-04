import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SideNav from "../components/nav/sidenav";

const Root = () => {
    return(
      
        <div className="w-full flex flex-col gap-10 h-auto pb-8   overflow-x-hidden font-sans">
          <Header/>
          <div className="flex w-full  h-auto ">
           <SideNav/>
           <Outlet/>
          </div>
        </div>
   
    )
}

export default Root