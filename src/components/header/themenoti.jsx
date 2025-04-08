import Bell from "./bell";
import Sun from "./sun";

const ThemeNoti = ({ theme , setTheme }) => {
    return(
         <div className="lg:w-[25%]  w-[50%] flex lg:justify-between justify-center items-center gap-4  h-15">
            <button className={`w-[45%] h-[70%] lg:h-[33px]  md:block ${!theme ? "bg-[#060606]": "bg-[#F2F2F2]"} p-2 rounded-md`}>
                <Bell
                 theme={theme}
                />
            </button>
            <button className={`w-[45%] h-[70%] lg:h-[33px] ${!theme ? "bg-[#060606]" : "bg-[#F2F2F2]"} p-2 rounded-md`}>
               <Sun
                theme={theme}
                setTheme={setTheme}
               />
            </button>
        </div>
    )
}

export default ThemeNoti