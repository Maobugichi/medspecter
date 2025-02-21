import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideNav from "../components/sidenav";

const Root = () => {
    return(
        <>
          <Header/>
          <div className="flex w-full">
          <SideNav/>
          <Outlet/>
          </div>
         
        </>
    )
}

export default Root