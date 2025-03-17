import { anomaly } from "../../actions";
import AnomalyBlock from "./anomalyblock";

const AnomalyFlex = () => {
    const anomalyItem = anomaly.map(item => (
        <AnomalyBlock
         bgColor={item.bgColor}
         color={item.color}
         border={item.border}
         width={item.width}
         text={item.text}
        />
    ))
    return(
        <div className="flex text-[12px] w-[65%] justify-between items-center">
            {anomalyItem}
        </div>
    )
}

export default AnomalyFlex