import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import SideNav from "../components/nav/sidenav";
import { ContextProvider } from "../components/ContextProvider";

const Root = () => {
    return(
      <ContextProvider>
        <div className="overflow-hidden w-full ">
          <Header/>
          <div className="flex w-full">
           <SideNav/>
           <Outlet/>
          </div>
        </div>
      </ContextProvider>  
    )
}

export default Root