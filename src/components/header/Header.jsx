import logo from "../../assets/logo.png";
import ThemeNoti from "./themenoti";
import Profile from "./profile";
import { Form } from "react-router-dom";
import SearchIcon from "./searchicon";
const Header = () => {
    return(
        <header className="">
            <nav className="flex  items-center">
                <div>
                    <img src={logo} alt="med spectre logo" />
                </div>
                <div className="flex w-[80%] justify-between h-[90%] items-center">
                  
                        <p className="pl-7 text-[#C4C4C4]">Dashboard /
                        <span className="text-[#333333]">Overview</span></p>
                    <Form className=" w-[38%] h-12 relative">
                        <input className="border border-[#C4C4C4] w-full h-full rounded-lg" type="search" />
                        <SearchIcon/>
                    </Form>
                    <div className="w-[30%] flex justify-between">
                        <ThemeNoti/>
                        <Profile/>
                    </div>
                </div>

            </nav>
        </header>
    )
}


export default Header