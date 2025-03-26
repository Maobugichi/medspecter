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
         width="lg:w-[33%] w-[45%]"
        />
    ))

    return(
        <div className="flex w-full gap-2 h-auto min-h-[25vh] flex-wrap lg:flex-nowrap lg:justify-between">
            {info}
        </div>
    )
}

export default WeekInfo