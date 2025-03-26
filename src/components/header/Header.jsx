import logo from "../../assets/logo.png";
import ThemeNoti from "./themenoti";
import Profile from "./profile";
import { Form } from "react-router-dom";
import SearchIcon from "./searchicon";
const Header = () => {
    return(
        <header className="w-full">
            <nav className="flex  items-center w-full">
                <div className="w-[30%]">
                    <img src={logo} alt="med spectre logo" />
                </div>
                <div className=" flex w-[70%] lg:justify-between h-[90%] lg:items-center">
                    <div className=" text-left w-[37%] grid place-content-center">
                     <p className="pl-7 text-[#C4C4C4] text-[11px]">Dashboard /
                     <span className="text-[#333333]">Overview</span></p>
                    </div>
                        
                    <Form className="hidden lg:block w-[38%] h-12 relative">
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