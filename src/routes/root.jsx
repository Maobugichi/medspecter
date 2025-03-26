import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SideNav from "../components/nav/sidenav";

const Root = () => {
    return(
        <div className="overflow-hidden w-full ">
          <Header/>
          <div className="flex w-full">
           <SideNav/>
           <Outlet/>
          </div>
         
        </div>
    )
}

export default Root