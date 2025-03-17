import pfp from "../../assets/avatar.png";
import caretDown from "../../assets/CaretDown.svg";
const Profile = () => {
    return(
        <div className="flex w-[70%] h-12 justify-between items-center p-2 rounded-md border border-[#E8E6E6]">
        <div className="flex items-center gap-1">
            <img className="h-8 w-8" src={pfp} alt="profile icon" />
            <div className="h-10 flex flex-col justify-center tracking-wider">
                <p className="text-sm ">Dr Bello Akin</p>
                <span className="text-[12px]">Specialist</span>
            </div>
        </div>
       
        <div>
            <img src={caretDown} alt="caret down" />
        </div>
    </div>
    )
}

export default Profile