import bell from "../../assets/bellNotif.svg";
import sun from "../../assets/sun.svg";

const ThemeNoti = () => {
    return(
         <div className="lg:w-[25%]  w-[35%] flex lg:justify-between justify-center items-center">
            <button className="w-[45%] h-[33px] hidden md:block bg-[#F2F2F2] p-2 rounded-md">
                <img src={bell} alt="notification icon" />
                <span></span>
            </button>
            <button className="w-[45%] h-[33px] bg-[#F2F2F2] p-2 rounded-md">
                <img src={sun} alt="change theme icon" />
            </button>
        </div>
    )
}

export default ThemeNoti