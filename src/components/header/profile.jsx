import pfp from "../../assets/avatar.png";
import caretDown from "../../assets/CaretDown.svg";
const Profile = () => {
    return(
        <div className="flex  lg:w-[70%] w-[80%] h-10  lg:h-12 justify-between items-center p-2 rounded-md border border-[#E8E6E6]">
        <div className="flex items-center gap-1  w-[90%]">
            <img className="lg:h-8 lg:w-8 w-6 h-6"  src={pfp} alt="profile icon" />
            <div className="h-10 flex flex-col justify-center lg:tracking-wider">
                <p className="lg:text-sm text-[55%] ">Dr Bello Akin</p>
                <span className="lg:text-[12px] text-[60%]">Specialist</span>
            </div>
        </div>
       
        <div className=" h-2 w-[10%]">
            <img src={caretDown} alt="caret down" />
        </div>
    </div>
    )
}

export default Profile