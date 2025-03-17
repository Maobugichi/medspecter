import OverviewBlocks from "../OverviewBlocks"
import { weekInfo } from "../../actions"

const WeekInfo = () => {
    const info = weekInfo.map(info => (
        <OverviewBlocks
         src={info.src}
         amount={info.amount}
         percentage={info.percentage}
         text={info.text}
         arrSrc={info.arrSrc}
         width="w-[31%]"
        />
    ))

    return(
        <div className="flex w-full justify-between">
            {info}
        </div>
    )
}

export default WeekInfo