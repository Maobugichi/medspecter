import dots from "../../assets/dots.svg";
import ChartInfo from "./ChartInfo";
import PieChart from "./PieChart";

const PieCont = ({ theme }) => {

  const chartInfoArray = [
    {
      text:"Tumors",
      bg:"bg-[#3371EB]"
    }, {
      text:"Fractures",
      bg:"bg-[#FF8E26]"
    } ,
    {
      text:"Infections",
      bg:"bg-[#14CC26]"
    }
  ]

  const chartInfo = chartInfoArray.map(info => (
    <ChartInfo
     content={info.text}
     bg={info.bg}
    />
  )) 
    return(
        <div className="@container h-[340px] lg:w-[347px] border border-[#E8E8E8] border-solid grid rounded-lg">
          <div className="flex items-center justify-between w-[90%]  h-10 mx-auto ">
            <h3 className="text-[14px]">Top Diagnosis</h3>
            <div className="h-[30px] w-[30px] bg-[#0000000F] rounded-md grid place-items-center">
                <img src={dots} alt="three vertical dots" />
            </div>
          </div>
          <PieChart
           theme={theme}
          />
          <div className="flex text-[12px] w-[70%] mx-auto justify-between">
            {chartInfo}
          </div>
    </div>
    )
}

export default PieCont