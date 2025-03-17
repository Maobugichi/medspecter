import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SideNav from "../components/nav/sidenav";

const Root = () => {
    return(
        <div>
          <Header/>
          <div className="flex w-full bg-yellow-300">
           <SideNav/>
           <Outlet/>
          </div>
         
        </div>
    )
}

export default Root