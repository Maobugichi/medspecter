import bell from "../assets/bellNotif.svg";
import sun from "../assets/sun.svg";

const ThemeNoti = () => {
    return(
         <div className="w-[25%]  flex justify-between items-center">
            <button className="w-[34px] h-[33px] bg-[#F2F2F2] p-2 rounded-md">
                <img src={bell} alt="notification icon" />
                <span></span>
            </button>
            <button className="w-[34px] h-[33px] bg-[#F2F2F2] p-2 rounded-md">
                <img src={sun} alt="change theme icon" />
            </button>
        </div>
    )
}

export default ThemeNoti