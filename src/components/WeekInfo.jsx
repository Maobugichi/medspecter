import OverviewBlocks from "./OverviewBlocks"
import { weekInfo } from "../actions"

const WeekInfo = () => {
    const info = weekInfo.map(info => (
        <OverviewBlocks
         src={info.src}
         amount={info.amount}
         percentage={info.percentage}
         text={info.text}
         arrSrc={info.arrSrc}
        />
    ))

    return(
        <div className="flex">
            {info}
        </div>
    )
}

export default WeekInfo