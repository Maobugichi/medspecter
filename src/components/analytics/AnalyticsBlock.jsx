import OverviewBlocks from "../OverviewBlocks"
import { docInfo } from "../../actions"
const AnalyticsBlock = ({docinfo}) => {
   const blocks = docinfo.map(info => {
    return(
        <OverviewBlocks
         src={info.src}
         amount={info.amount}
         percentage={info.percentage}
         text={info.text}
         arrSrc={info.arrSrc}
         width="w-[24%]"
       />
    )
   })


   return(
     <div className="w-full flex justify-between">
        {blocks}
     </div>
   )
}

export default AnalyticsBlock