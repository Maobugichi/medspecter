import Bell from "./bell";
import Sun from "./sun";

const ThemeNoti = ({ theme , setTheme }) => {
    return(
         <div className="lg:w-[25%]  w-[30%] flex lg:justify-between justify-center items-center gap-4  h-15">
            <button className={`w-[45%] h-[70%] lg:h-[33px]  md:block   p-2 rounded-md grid place-items-center`}>
                <Bell
                 theme={theme}
                />
            </button>
            <button className={`w-[45%] h-[70%] lg:h-[33px]  p-2 rounded-md grid place-items-center`}>
               <Sun
                theme={theme}
                setTheme={setTheme}
               />
            </button>
        </div>
    )
}

export default ThemeNoti