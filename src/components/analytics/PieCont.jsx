import dots from "../../assets/dots.svg";
import PieChart from "./PieChart";

const PieCont = () => {
    return(
        <div className="h-[340px] lg:w-[347px] border border-[#E8E8E8] border-solid grid rounded-lg">
          <div className="flex items-center justify-between w-[90%]  h-10 mx-auto ">
            <h3 className="text-[14px]">Top Diagnosis</h3>
            <div className="h-[28px] w-[28px] bg-[#0000000F] rounded-md grid place-items-center">
                <img src={dots} alt="three vertical dots" />
            </div>
          </div>
          <PieChart/>
          <div className="flex text-[12px] w-[70%] mx-auto justify-between">
            <p>Tumors</p>
            <p>Fractures</p>
            <p>Infections</p>
          </div>
    </div>
    )
}

export default PieCont